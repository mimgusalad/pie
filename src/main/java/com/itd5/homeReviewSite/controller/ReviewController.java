package com.itd5.homeReviewSite.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itd5.homeReviewSite.model.Address;
import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.keyword;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import com.itd5.homeReviewSite.validator.ReviewValidator;
import com.nimbusds.jose.shaded.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;
import net.minidev.json.parser.JSONParser;
import org.hibernate.dialect.SybaseASEDialect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.lang.reflect.Type;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("review")
@RequiredArgsConstructor
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    KeywordRepository keywordRepository;

    @GetMapping("form")
    public String form(Model model) {
        model.addAttribute("review", new review_article());
        model.addAttribute("keyword", new keyword());
        return "review/form";
    }

    @PostMapping("form")
    public String submitReview(HttpServletRequest request, @RequestParam(value = "files", required = false) List<MultipartFile> uploadFiles,
                               @RequestParam(value="contract_img", required = false) MultipartFile contractImg,
                               @RequestParam(value="addressName") String addressName,
                               @Valid review_article review, @ModelAttribute keyword keyword,
                               BindingResult bindingResult, Errors errors) throws Exception {


        // 주소 정보 가지고 오기
        // 도로명, 지번주소, 빌딩 이름, 우편 번호, 위도, 경도
        Address saveAddress = getKakaoApiFromAddress(addressName);

        // 동일한 주소에 대한 처리
        // 동일한 주소가 없는 경우에만 save
        Address sameAddress = addressRepository.findByLatitudeAndLongitude(saveAddress.getLatitude(), saveAddress.getLongitude());
        if (sameAddress == null){
            addressRepository.save(saveAddress);
            sameAddress = saveAddress;
        }

        // 입주민 인증에 대한 처리
        // 입주민 인증을 위해 이미지 파일을 업로드 한 경우
        if (!contractImg.isEmpty()){

        }

        // rating  set
        review.setRating(review.getRating() / 2);

        // review 객체 변수 설정
        review.setUserId(getLoginUserId());
        review.setAddressId(sameAddress.getAddressId());
        review.setAddress(sameAddress.getAddress());

        // review db save
        reviewRepository.save(review);

        // 리뷰 사진 save
        saveReviewPhoto(request, uploadFiles, review.getArticleNo());

        // keyword db save
        keyword.setReview_id(review.getArticleNo());
        keywordRepository.save(keyword);

        return "redirect:/review/myReview";
    }

    @GetMapping("myReview")
    public String myReview(Model model) {
        Long userId = getLoginUserId();

        List<review_article> myReviewList = reviewRepository.findByUserId(userId);

        model.addAttribute("myReviewList", myReviewList);

        return "review/myReview";
    }

    @GetMapping("detail")
    public String detail(Model model, @RequestParam(required = false) Long id) {

        review_article review;

        if (id == null) {
            review = new review_article();
        }

        review = reviewRepository.findById(id).orElse(null);
        List<PhotoFile> photoFileList = fileRepository.findByReviewIdAndArticleType(id, "review");
        model.addAttribute("review", review);
        model.addAttribute("photoFileList", photoFileList);

        return "review/detail";
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

    public void saveReviewPhoto(HttpServletRequest request, List<MultipartFile> uploadFiles, Long articleNo) {

        for (MultipartFile multipartFile : uploadFiles) {
            PhotoFile photoFile = new PhotoFile();
            if (!multipartFile.isEmpty()) {
                String fileName = multipartFile.getOriginalFilename();
                String filePath = request.getSession().getServletContext().getRealPath("/");
                try {
                    // file save func
                    // save path : /src/main/webapp/review 에 img download
                    multipartFile.transferTo(new File(filePath + "review/" + fileName));
                    photoFile.setArticleType("review");
                    photoFile.setReviewId(Long.valueOf(articleNo));
                    photoFile.setSaveFileName(fileName);
                    photoFile.setOriFileName(multipartFile.getOriginalFilename());
                    photoFile.setSuccessionId(null);

                    fileRepository.save(photoFile);
                } catch (IllegalStateException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }

    public Long getLoginUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }
}
