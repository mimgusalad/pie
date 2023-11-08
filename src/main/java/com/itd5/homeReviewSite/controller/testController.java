package com.itd5.homeReviewSite.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class testController {
    @GetMapping("/test")
    public String goMain() {
        return "/test.html";
    }
}
