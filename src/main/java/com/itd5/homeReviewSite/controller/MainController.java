package com.itd5.homeReviewSite.controller;
import com.itd5.homeReviewSite.Service.ArticleService;
import com.itd5.homeReviewSite.model.review_article;

import com.itd5.homeReviewSite.model.Review;
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

    private final ArticleService articleService;
    @Autowired
    public MainController(ArticleService articleService) {
        this.articleService = articleService;
    }

    // 이미지, 리뷰글 저장 테스트용 api
    @ResponseBody
    @PostMapping("checkpost")
    public List<review_article> checkPost(@ModelAttribute Review review){
        articleService.saveArticle(review);
        return articleService.getAllReviewArticle();
    }


    // 전체 리뷰글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("reviews")
    public List<review_article> getAllReviewArticle(){
        return articleService.getAllReviewArticle();
    }

    // 리뷰글 삭제하기
    @ResponseBody
    @DeleteMapping("reviews/{articleNo}")
    public List<review_article> deleteArticle(@PathVariable Long articleNo){
        articleService.deleteArticle(articleNo);
        return articleService.getAllReviewArticle();
    }

    // 리뷰글 1개 조회하기
    @ResponseBody
    @GetMapping("reviews/{articleNo}")
    public review_article getArticle(@PathVariable Long articleNo){
        return articleService.getArticle(articleNo);
    }

    // 리뷰글 수정하기
    @ResponseBody
    @PutMapping("reviews/{articleNo}")
    public void updateArticle(@PathVariable Long articleNo, @ModelAttribute Review review){
        articleService.updateArticle(articleNo, review);
    }



}
