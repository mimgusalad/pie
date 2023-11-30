package com.itd5.homeReviewSite.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itd5.homeReviewSite.model.Address;
import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.Keyword;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.Service.S3UploadService;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.*;

@Controller
@RequestMapping("review")
@RequiredArgsConstructor
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    static
    FileRepository fileRepository;
    @Autowired
    KeywordRepository keywordRepository;
    @Autowired
    static
    S3UploadService s3UploadService;

    @GetMapping("form")
    public String form(Model model) {
        model.addAttribute("review", new review_article());
        model.addAttribute("keyword", new Keyword());
        return "review/form";
    }

    @PostMapping("form")
    public String submitReview(HttpServletRequest request, @RequestParam(value = "files", required = false) List<MultipartFile> uploadFiles,
                               @RequestParam(value="contract_img", required = false) MultipartFile contractImg,
                               @RequestParam(value="addressName") String addressName,
                               @Valid review_article review, @ModelAttribute Keyword keyword,
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
/*        if (contractImg != null){

        }*/

        // rating  set
        review.setRating(review.getRating());

        // review 객체 변수 설정
        review.setUserId(getLoginUserId());
        review.setAddressId(sameAddress.getAddressId());
        review.setAddress(sameAddress.getAddress());

        // review db save
        reviewRepository.save(review);

        System.out.println(uploadFiles.size());
        // 리뷰 사진 save
        saveReviewPhoto(uploadFiles, review.getArticleNo());

        // keyword db save
        keyword.setReviewId(review.getArticleNo());
        keywordRepository.save(keyword);

        return "redirect:/review/myReview";
    }

    @GetMapping("myReview")
    public String myReview(Model model) {
        Long userId = getLoginUserId();

        List<review_article> myReviewList = reviewRepository.findByUserId(userId);
        List<PhotoFile> previewImgList = fileRepository.findPhotoFile(userId);
        List<String> previewImgUrlList = new ArrayList<>();

        /*
        * 이미지 Preview code
        * review에 첨부된 사진이 있다면 upload한 사진 중 하나를 get
        * 아니면 대체 이미지를 get(/img/reviewUploadImg/altRoomPicture.png)
        * */
        for(PhotoFile photoFile: previewImgList){
            if (photoFile != null)
                previewImgUrlList.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            else
                previewImgUrlList.add("/img/reviewUploadImg/altRoomPicture.png");
        }
        model.addAttribute("myReviewList", myReviewList);
        model.addAttribute("previewImgUrlList",previewImgUrlList);

        return "review/myReview";
    }

    @GetMapping("detail")
    public String detail(Model model, @RequestParam(required = false) Long articleNo) {
        List<String> imgUrlList = new ArrayList<>();
        review_article review;

        if (articleNo == null) {
            review = new review_article();
        }
        review = reviewRepository.findById(articleNo).orElse(null);
        List<PhotoFile> photoFileList = fileRepository.findByReviewIdAndArticleType(articleNo, "review");
        // aws img url get
        if (!photoFileList.isEmpty()) {
            for (PhotoFile photoFile : photoFileList) {
                String url = s3UploadService.getImgUrl(photoFile.getSaveFileName());
                imgUrlList.add(url);
            }
        }
        else{
            imgUrlList.add("/img/reviewUploadImg/reviewDetailExample.png");
        }
        // 키워드 전처리
        Keyword keyword = keywordRepository.findByReviewId(articleNo);
        List<String> keywordList  = Arrays.asList("", "", "", "","");
        System.out.println(keywordList);
        String inputValue = keywordList.get((int) keyword.getNoise()) + "소음  ";
        keywordList.set((int) keyword.getNoise(),inputValue);

        inputValue = keywordList.get((int) keyword.getSmell()) + "냄새  ";
        keywordList.set((int) keyword.getSmell(),inputValue);

        inputValue = keywordList.get((int) keyword.getSafety()) + "치안  ";
        keywordList.set((int) keyword.getSafety(),inputValue);

        inputValue = keywordList.get((int) keyword.getConvenience()) + "편의시설  ";
        keywordList.set((int) keyword.getConvenience(),inputValue);

        inputValue = keywordList.get((int) keyword.getInsect()) + "벌레  ";
        keywordList.set((int) keyword.getInsect(),inputValue);

        inputValue = keywordList.get((int) keyword.getOptionQuality()) + "옵션 상태  ";
        keywordList.set((int) keyword.getOptionQuality(),inputValue);

        inputValue = keywordList.get((int) keyword.getTrash()) + "쓰레기 처리  ";
        keywordList.set((int) keyword.getTrash(),inputValue);

        inputValue = keywordList.get((int) keyword.getSunlight()) + "일조량  ";
        keywordList.set((int) keyword.getSunlight(),inputValue);

        System.out.println(keywordList);
        model.addAttribute("review", review);
        model.addAttribute("imgUrlList", imgUrlList);
        model.addAttribute("keywordList", keywordList);

        return "review/detail";
    }

    @GetMapping("delete")
    public String deleteReview(@RequestParam(required = false) Long articleNo){
        review_article reviewArticle = reviewRepository.findByArticleNo(articleNo);
        reviewRepository.delete(reviewArticle);

        return "";
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

    public static void saveReviewPhoto(List<MultipartFile> uploadFiles, Long articleNo) {

        for (MultipartFile imgFile : uploadFiles) {
            PhotoFile photoFile = new PhotoFile();
            if (!imgFile.isEmpty()) {
                String originalFilename = imgFile.getOriginalFilename();
                String saveFilename = UUID.randomUUID() + "." + extractExt(originalFilename);
                try {
                    // file save func
                    // file DB save
                    photoFile.setArticleType("review");
                    photoFile.setReviewId(Long.valueOf(articleNo));
                    photoFile.setSaveFileName(saveFilename);
                    photoFile.setOriFileName(originalFilename);
                    photoFile.setSuccessionId(null);

                    fileRepository.save(photoFile);
                    //aws 서비스 등록
                    s3UploadService.saveFile(imgFile, saveFilename);
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
    // 확장자 추출
    private static String extractExt(String originalFilename) {
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }
}
