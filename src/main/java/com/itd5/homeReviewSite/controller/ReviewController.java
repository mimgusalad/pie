package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.keyword;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import com.itd5.homeReviewSite.signup.SocialAuth;
import com.itd5.homeReviewSite.validator.ReviewValidator;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.apache.commons.compress.utils.FileNameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;

@Controller
@RequestMapping("review")
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    ReviewValidator reviewValidator;
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
    public String submitReview(HttpServletRequest request, @RequestPart MultipartFile files,
                               @ModelAttribute @Valid review_article review, @ModelAttribute keyword keyword,
                               BindingResult bindingResult) throws Exception{
        // 현재 날짜 설정해주기
/*        java.util.Date utilDate = new java.util.Date();
        java.sql.Timestamp sqlDate = new java.sql.Timestamp(utilDate.getTime());
        review.setRegdate(sqlDate);
        System.out.println(keyword.getInsect());*/

        if(bindingResult.hasErrors()){
            System.out.println("error 발생");
            return "review/form";
        }

        // 사진 업로드
        PhotoFile photoFile = new PhotoFile();
        String sourceFileName = files.getOriginalFilename();
        String sourcedFileNameExtension = FileNameUtils.getExtension(sourceFileName).toLowerCase();
        File destinationFile;
        String destinationFileName;

        String fileUrl = request.getSession().getServletContext().getRealPath("/reviewUploadImg");
        do{
            destinationFileName = RandomStringUtils.randomAlphanumeric(32)+"."+ sourcedFileNameExtension;
            destinationFile = new File(fileUrl+destinationFileName);
        } while(destinationFile.exists());

        destinationFile.getParentFile().mkdirs();
        files.transferTo(destinationFile);

        photoFile.setFileName(destinationFileName);
        photoFile.setFileOriName(sourceFileName);
        photoFile.setFileUrl(fileUrl);


        // 위도와 경도 바꾸기
        Float[] coord = getKakaoApiFromAddress(review.getAddress());
        if(coord[0] != null){
            review.setLongitude(coord[0]);
            review.setLatitude(coord[1]);
        }

        // userId set
        review.setUserId(getLoginUserId());

        // rating  set
        review.setRating(review.getRating() /2);

        // review db save
        reviewRepository.save(review);
        fileRepository.save(photoFile);

        // keyword db save
        keyword.setReview_id(review.getArticleNo());
        keywordRepository.save(keyword);

        return "redirect:/review/myReview";
    }

    @GetMapping("myReview")
    public String myReview(Model model){
        Long userId = getLoginUserId();

        List<review_article> myReviewList = reviewRepository.findByUserId(userId);
        //List<Picture> myPictureList = pictureRepository.findAll();
        model.addAttribute("myReviewList", myReviewList);
        return "review/myReview";
    }

    @GetMapping("detail")
    public String detail(Model model, @RequestParam(required = false)Long id){

        review_article review;
        if(id == null){
            review = new review_article();
        }
        /*Succession succession = successionRepository.findById(id).orElse(null);*/

        review= reviewRepository.findById(id).orElse(null);
        model.addAttribute("review", review);

        return "review/detail";
    }

    public Float[] getKakaoApiFromAddress(String roadFullAddr) {
        String apiKey = "04519b1d8946746a4ea4438360fe8418";
        String apiUrl = "https://dapi.kakao.com/v2/local/search/address.json";
        String jsonString = null;
        Float[] coord = new Float[2];

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

            while ((line=rd.readLine()) != null) {
                docJson.append(line);
            }

            jsonString = docJson.toString();
            String tmp = jsonString.substring(jsonString.lastIndexOf("x"), jsonString.lastIndexOf("meta"));
            // x = long
            // y = lati
            coord[0] = Float.parseFloat(tmp.substring(tmp.indexOf("x")+4, tmp.indexOf("y")-4));
            coord[1] = Float.parseFloat(tmp.substring(tmp.indexOf("y")+4, tmp.indexOf("}")-1));

            rd.close();

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return coord;
    }

    public Long getLoginUserId(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }
}
