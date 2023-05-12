package com.itd5.homeReviewSite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("review")
public class ReviewController {

    @GetMapping("form")
    public String form() {
        return "review/form";
    }

    public String formSubmit() {
        return "";
    }

    public String showPreView(){return "";}

    public String showDetail() {return "";}
    public String delete(){return "redirect:/마이페이지 내가 작성한 승계글";}

     public String certificationResident() {return "";}
}
