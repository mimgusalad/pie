package com.itd5.homeReviewSite.controller;
import com.itd5.homeReviewSite.Service.ArticleService;
import com.itd5.homeReviewSite.repository.ReviewRepository;

import com.itd5.homeReviewSite.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @Autowired
    private ReviewRepository reviewRepository;
    @GetMapping("main")
    public String mainPage(){
        return "mainPage";
    }

    private final ArticleService articleService;
    @Autowired
    public MainController(ArticleService articleService) {
        this.articleService = articleService;
    }
    @ResponseBody
    @PostMapping("checkpost")
    public String checkPost(@ModelAttribute Review review){
        articleService.saveArticle(review);
        return "checkpost:success";
    }
}
