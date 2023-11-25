package com.itd5.homeReviewSite.controller;
import com.itd5.homeReviewSite.Service.ReviewService;
import com.itd5.homeReviewSite.Service.SuccBoardService;
import com.itd5.homeReviewSite.model.SuccArticle;
import com.itd5.homeReviewSite.model.review_article;

import com.itd5.homeReviewSite.model.Review;
import com.itd5.homeReviewSite.model.succession_article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {
    @GetMapping("main")
    public String mainPage(){
        return "mainPage";
    }

    private final ReviewService reviewService;
    private final SuccBoardService succBoardService;
    @Autowired
    public MainController(ReviewService reviewService, SuccBoardService succBoardService) {
        this.reviewService = reviewService;
        this.succBoardService = succBoardService;
    }

    // 이미지, 리뷰글 저장 테스트용 api
    @ResponseBody
    @PostMapping("checkpost")
    public List<review_article> checkPost(@ModelAttribute Review review){
        reviewService.saveArticle(review);
        return reviewService.getAllReviewArticle();
    }

    // 전체 리뷰글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("reviews")
    public List<review_article> getAllReviewArticle(){
        return reviewService.getAllReviewArticle();
    }

    // 리뷰글 삭제하기
    @ResponseBody
    @DeleteMapping("reviews/{articleNo}")
    public List<review_article> deleteArticle(@PathVariable Long articleNo){
        reviewService.deleteArticle(articleNo);
        return reviewService.getAllReviewArticle();
    }

    // 리뷰글 1개 조회하기
    @ResponseBody
    @GetMapping("reviews/{articleNo}")
    public review_article getArticle(@PathVariable Long articleNo){
        return reviewService.getArticle(articleNo);
    }

    // 리뷰글 수정하기
    @ResponseBody
    @PutMapping("reviews/{articleNo}")
    public void updateArticle(@PathVariable Long articleNo, @ModelAttribute Review review){
        reviewService.updateArticle(articleNo, review);
    }

    // 내가 쓴 리뷰글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("reviews/my")
    public List<review_article> getMyArticle(@RequestParam("userId") long userId){
       return reviewService.getArticleByUserId(userId);
    }

    // 여기서부턴 승계글 관련 api

    // 전체 승계글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("articles")
    public List<succession_article> getAllSuccArticle(){
        return succBoardService.getAllSuccArticle();
    }

    @ResponseBody
    @GetMapping("articles/{articleNo}")
    public SuccArticle getSuccArticle(@PathVariable Long articleNo){
        return succBoardService.getSuccArticleAndWriter(articleNo);
    }

}
