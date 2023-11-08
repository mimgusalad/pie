package com.itd5.homeReviewSite.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

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
