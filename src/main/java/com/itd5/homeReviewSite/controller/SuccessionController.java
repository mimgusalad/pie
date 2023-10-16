package com.itd5.homeReviewSite.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itd5.homeReviewSite.model.Address;
import com.itd5.homeReviewSite.model.Message;
import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.succession_article;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.compress.utils.FileNameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("succession")
public class SuccessionController {

    @Autowired
    SuccessionRepository successionRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    AddressRepository addressRepository;
    @GetMapping("form")
    public String form(Model model){
        Long userId = getLoginUserId();
        succession_article successionArticle = successionRepository.findByUserId(userId);
        if(successionArticle == null){
            successionArticle = new succession_article();
            model.addAttribute("succession", successionArticle);

            return "succession/form";
        }
        else{
            Message message = new Message("이미 작성된 승계글이 있습니다." ,"작성된 승계글 페이지로 전환됩니다.", "/succession/detail","/",  RequestMethod.GET, null );
            return showMessageAndRedirect(message, model);
            //return "redirect:/succession/detail?id="+successionArticle.getArticleNo();
        }

    }

    @PostMapping("form")
    public String submitSuccession(HttpServletRequest request,   @RequestParam(value="files", required = false) List<MultipartFile> uploadFiles,
                                   @ModelAttribute succession_article succession) throws Exception{

        // 위도 경도 변환
        // 주소 정보 가지고 오기
        // 도로명, 지번주소, 빌딩 이름, 우편 번호, 위도, 경도
        Address saveAddress = getKakaoApiFromAddress(succession.getAddress());

        // 동일한 주소에 대한 처리
        // 동일한 주소가 없는 경우에만 save
        Address sameAddress = addressRepository.findByLatitudeAndLongitude(saveAddress.getLatitude(), saveAddress.getLongitude());
        if (sameAddress == null){
            addressRepository.save(saveAddress);
            sameAddress = saveAddress;
        }

        // succession 객체 변수 설정
        succession.setUserId(getLoginUserId());
        succession.setAddressId(sameAddress.getAddressId());

        // succession db save
        successionRepository.save(succession);

        // 사진 save
        savePhoto(request, uploadFiles, succession.getArticleNo());

        return "redirect:/succession/detail?id="+succession.getArticleNo();
    }
    @GetMapping("delete")
    public String delete(){
        Long userId = getLoginUserId();
        succession_article successionArticle = successionRepository.findByUserId(userId);
        if (successionArticle != null) {
            successionRepository.delete(successionArticle);
        }

        return "account/myPage";
    }

    @GetMapping("list")
    public String list(Model model){
        List<succession_article> successionList = successionRepository.findAll();

        model.addAttribute("totalCnt", successionList.size());
        model.addAttribute("successionList", successionList);
        model.addAttribute("sortSuccessionList", successionList);
        return "succession/list";
    }
    @GetMapping("detail")
    public String detail(Model model){

        succession_article succession;
        Long userId = getLoginUserId();

        succession= successionRepository.findByUserId(userId);

        if(succession == null){
            succession = new succession_article();
        }

        List<PhotoFile> photoFileList = fileRepository.findBySuccessionIdAndArticleType(succession.getArticleNo(), "succession");
        model.addAttribute("succession", succession);
        model.addAttribute("photoFileList", photoFileList);

        return "succession/detail";
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

    public Long getLoginUserId(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }

    public void savePhoto(HttpServletRequest request, List<MultipartFile> uploadFiles, Long articleNo){

        for (MultipartFile multipartFile : uploadFiles){
            PhotoFile photoFile = new PhotoFile();
            if(!multipartFile.isEmpty()){
                String fileName = multipartFile.getOriginalFilename();
                String filePath = request.getSession().getServletContext().getRealPath("/");
                try {
                    // file save func
                    // save path : /src/main/webapp/succession 에 img download
                    multipartFile.transferTo(new File(filePath+"succession/" + fileName));
                    photoFile.setArticleType("succession");
                    photoFile.setSuccessionId(Long.valueOf(articleNo));
                    photoFile.setSaveFileName(fileName);
                    photoFile.setOriFileName(multipartFile.getOriginalFilename());
                    photoFile.setReviewId(null);

                    fileRepository.save(photoFile);
                } catch (IllegalStateException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }

    // 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
    private String showMessageAndRedirect(final Message params, Model model) {
        model.addAttribute("params", params);
        return "messageRedirect";
    }
}
