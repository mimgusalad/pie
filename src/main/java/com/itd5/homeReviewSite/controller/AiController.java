package com.itd5.homeReviewSite.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.repository.RoomRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("ai")
@RequiredArgsConstructor
@EnableCaching
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AiController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    SuccessionRepository successionRepository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    RoomRepository roomRepository;
    List<Long> list;
    @GetMapping("list")
    public String list(Model model, RoomServiceCriteria roomInput){
        model.addAttribute("searchCheck", null);
        model.addAttribute("roomInput", roomInput);
        return "ai/list";
    }
    @PostMapping("list")
    @ResponseBody
    //ai 화면에서 검색을 했을 시 처리하는 함수
    public Map<String, Object> processSearch(@RequestBody RoomServiceCriteria roomInput){

        System.out.println(roomInput);
        String keyword = roomInput.getKeyword();
        if (keyword.equals("소음")) roomInput.setKeyword("k.noise");
        if (keyword.equals("옵션 상태")) roomInput.setKeyword("k.optionQuality");
        if (keyword.equals("치안")) roomInput.setKeyword("k.safety");
        if (keyword.equals("일조량")) roomInput.setKeyword("k.sunlight");
        if (keyword.equals("벌레")) roomInput.setKeyword("k.insect");
        if (keyword.equals("냄새")) roomInput.setKeyword("k.smell");
        if (keyword.equals("쓰레기 처리")) roomInput.setKeyword("k.trash");
        if (keyword.equals("편의시설")) roomInput.setKeyword("k.convenience");
        roomInput.setAddress("대구");
        String priceOption = roomInput.getPriceOption();
        String modifiedPriceOption = priceOption.trim().replace(",", "");
        roomInput.setPriceOption(modifiedPriceOption);
        roomInput.setMaxDeposit(5000);
        roomInput.setMaxMonthlyRent(5000);

        System.out.println("getAllRoom 이전");
        list = roomRepository.getAllRooms(
                roomInput.getMinDeposit(),
                roomInput.getMaxDeposit(),
                roomInput.getMinMonthlyRent(),
                roomInput.getMaxMonthlyRent(),
                roomInput.getStructure(),
                roomInput.getAddress(),
                roomInput.getKeyword()
        );

        System.out.println(list);
        List<review_article> recommendReviewList = reviewRepository.getAllByAddressIdIn(list);
        //List<succession_article> recommendSuccessionList = successionRepository.getAllByAddressIdIn(list);
//        model.addAttribute("recommendSuccessionList", recommendSuccessionList);
//        model.addAttribute("roomInput", roomInput);

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("recommendReviewList", recommendReviewList);
        resultMap.put("searchCheck", true);

        System.out.println(resultMap);
        return resultMap;
    }
    @GetMapping("homeDetail/{roadAddress}")
    @ResponseBody
    public Map<String,Object> homeDetail(@PathVariable String roadAddress){
        Address address = addressRepository.findByRoad_Address(roadAddress);
        if (address == null){
            address = getKakaoApiFromAddress(roadAddress);
        }
        List<review_article> reviewList = reviewRepository.findTop4ByAddressId(address.getAddressId());

        Map<String, Object> result = new HashMap<>();
        result.put("address", address);
        result.put("reviewList", reviewList);

        return result;
    }

    @GetMapping("reviewMore")
    public String moreReview(Model model){
        List<review_article> reviewList = reviewRepository.getAllByAddressIdIn(list);
        model.addAttribute("reviewList", reviewList);
        return "ai/recommendReviewMore";
    }


    // 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
    private String showMessageAndRedirect(final Message params, Model model) {
        model.addAttribute("params", params);
        return "messageRedirect";
    }

    public Address getKakaoApiFromAddress(String roadFullAddr) {
        String apiKey = "04519b1d8946746a4ea4438360fe8418";
        String apiUrl = "https://dapi.kakao.com/v2/local/search/address.json";
        String jsonString = null;
        Address address = new Address();

        try {
            roadFullAddr = URLEncoder.encode(roadFullAddr, "UTF-8");

            String addr = apiUrl + "?query=" + roadFullAddr;

            URL url = new URL(addr);
            URLConnection conn = url.openConnection();
            conn.setRequestProperty("Authorization", "KakaoAK " + apiKey);

            BufferedReader rd = null;
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            StringBuffer docJson = new StringBuffer();
            String line;
            // api json file get
            while ((line = rd.readLine()) != null) {
                docJson.append(line);
            }

            jsonString = docJson.toString();

            /*json Map type 변형
             * docList key : [address, address_name, address_type, road_address, x,y]
             * docAddressList : 지번 주소 상세 정보
             * docRoadList : 도로명 주소 상세 정보
             * */
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<Map<String, Object>> typeReference = new TypeReference<Map<String, Object>>() {
            };
            Map<String, Object> jsonMap = mapper.readValue(jsonString, typeReference);


            List<Map<String, String>> docList = (List<Map<String, String>>) jsonMap.get("documents");
            Map<String, String> adList = (Map<String, String>) docList.get(0);
            Map<String,Object> docAddressList = mapper.convertValue(adList.get("address"), typeReference);
            Map<String,Object> docRoadList = mapper.convertValue(adList.get("road_address"), typeReference);

            // address 객체 정보 설정
            address.setLongitude(Double.parseDouble(adList.get("x")));
            address.setLatitude(Double.parseDouble(adList.get("y")));

            address.setAddress((String) docAddressList.get("address_name"));
            address.setRoad_address((String) docRoadList.get("address_name"));
            address.setBuildingName((String) docRoadList.get("building_name"));
            address.setZone_no(Integer.parseInt((String) docRoadList.get("zone_no")));

            rd.close();

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return address;
    }

}
