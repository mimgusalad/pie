package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.keyword;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import com.itd5.homeReviewSite.validator.ReviewValidator;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;
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
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;

@Controller
@RequestMapping("review")
@RequiredArgsConstructor
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    KeywordRepository keywordRepository;

    @GetMapping("form")
    public String form(Model model) {
        review_article reviewArticle = new review_article();
        model.addAttribute("review", reviewArticle);
        model.addAttribute("keyword", new keyword());

        System.out.println(reviewArticle.getDeposit());
        return "review/form";
    }

    @PostMapping("form")
    public String submitReview(HttpServletRequest request, @RequestParam(value="files", required = false) List<MultipartFile> uploadFiles,
                               @Valid review_article review, @ModelAttribute keyword keyword,
                               BindingResult bindingResult, Errors errors) throws Exception{


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

        // 사진 save
        savePhoto(request, uploadFiles, review.getArticleNo());

        // keyword db save
        keyword.setReview_id(review.getArticleNo());
        keywordRepository.save(keyword);

        return "redirect:/review/myReview";
    }

    @GetMapping("myReview")
    public String myReview(Model model){
        Long userId = getLoginUserId();

        List<review_article> myReviewList = reviewRepository.findByUserId(userId);
        //List<PhotoFile> myReviewPreviewList = fileRepository.findPreviewImg(userId);

        model.addAttribute("myReviewList", myReviewList);
        //model.addAttribute("myReviewPreviewList", myReviewPreviewList);
        return "review/myReview";
    }

    @GetMapping("detail")
    public String detail(Model model, @RequestParam(required = false)Long id){

        review_article review;

        if(id == null){
            review = new review_article();
        }

        review= reviewRepository.findById(id).orElse(null);
        List<PhotoFile> photoFileList = fileRepository.findByReviewIdAndArticleType(id, "review");
        model.addAttribute("review", review);
        model.addAttribute("photoFileList", photoFileList);

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

    public void savePhoto(HttpServletRequest request, List<MultipartFile> uploadFiles, Long articleNo){

        for (MultipartFile multipartFile : uploadFiles){
            PhotoFile photoFile = new PhotoFile();
            if(!multipartFile.isEmpty()){
                String fileName = multipartFile.getOriginalFilename();
                String filePath = request.getSession().getServletContext().getRealPath("/");
                try {
                    // file save func
                    // save path : /src/main/webapp/review 에 img download
                    multipartFile.transferTo(new File(filePath+"review/" + fileName));
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
    public Long getLoginUserId(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }
}
