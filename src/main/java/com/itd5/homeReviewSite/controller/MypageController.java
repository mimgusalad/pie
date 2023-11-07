package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.service.S3UploadService;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@Controller
@RequestMapping("account")
public class MypageController {
    @Autowired
   ReviewRepository reviewRepository;
    @GetMapping("myPage/myReview")
    public String myReview(Model model) {
        Long userId = getLoginUserId();

        List<review_article> myReviewList = reviewRepository.findByUserId(userId);
        model.addAttribute("myReviewList", myReviewList);

        return "account/myPage";
    }
    public Long getLoginUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }
//    @GetMapping("detail")
//    public String detail(Model model, @RequestParam(required = false) Long articleNo) {
//        review_article review;
//
//        if (articleNo == null) {
//            review = new review_article();
//        }
//        review = reviewRepository.findById(articleNo).orElse(null);
//        model.addAttribute("review", review);
//
//        return "review/detail";
//    }
//    @GetMapping("delete")
//    public String deleteReview(@RequestParam(required = false) Long articleNo){
//        review_article reviewArticle = reviewRepository.findByArticleNo(articleNo);
//        reviewRepository.delete(reviewArticle);
//        return "";
//    }

}
