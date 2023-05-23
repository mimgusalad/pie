package com.itd5.homeReviewSite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("account")
public class AccountController {
    @GetMapping("login")
    public String login(){
        return "account/login";
    }
    @GetMapping("joinMembership")
    public String join(){
        return "account/joinMembership";
    }
    @GetMapping("myPage")
    public String myPage(){return "account/myPage";}
}
