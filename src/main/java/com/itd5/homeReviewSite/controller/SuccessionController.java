package com.itd5.homeReviewSite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("succession")
public class SuccessionController {
    @GetMapping("form")
    public String form(){
        return "succession/form";
    }

    public String submitForm(){
        return "";
    }
    @GetMapping("list")
    public String showList(){
        return "succession/list";
    }

    public String showDetail() {return "";}

    public String delete(){return "redirect:/마이페이지 내가작성한 승계글";}

    public String certificationContract() {return "";}
}
