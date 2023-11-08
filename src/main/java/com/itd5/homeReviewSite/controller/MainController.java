package com.itd5.homeReviewSite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {
    @GetMapping("/home")
    public String mainPage(){
        return "mainPage";
    }

    @GetMapping("/chacha")
    public String chacha(){
        return "잘 나옴";
    }
}
