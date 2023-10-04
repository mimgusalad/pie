package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.Message;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("ai")
public class AiController {
    @Autowired
    ReviewRepository reviewRepository;
    @GetMapping("list")
    public String list(Model model) {
        List<review_article> recommendReviewPreList = reviewRepository.findTop4ByOrderByArticleNo();
        model.addAttribute("recommendReviewPreList",recommendReviewPreList);
        model.addAttribute("searchCheck", null);
        return "ai/list";

    }

    @GetMapping("reviewMore")
    public String moreReview(Model model){
        List<review_article> reviewList = reviewRepository.findAll();
        model.addAttribute("reviewList", reviewList);
        return "ai/recommendReviewMore";
    }

    // 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
    private String showMessageAndRedirect(final Message params, Model model) {
        model.addAttribute("params", params);
        return "messageRedirect";
    }

}
