package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.Review;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("review")
public class ReviewController {

    @GetMapping("form")
    public String form(Model model) {
        model.addAttribute("review", new Review());
        return "review/form";
    }
}
