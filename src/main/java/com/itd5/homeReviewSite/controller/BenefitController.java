package com.itd5.homeReviewSite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("benefit")
public class BenefitController {
    //@Autowired
    //Recommender recommender;
    @GetMapping("list")
    public String list(){
        // here
        //recommender.Recommender(1);
        return "benefit/list";
    }
}
