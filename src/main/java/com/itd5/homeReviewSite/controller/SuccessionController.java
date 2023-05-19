package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.Succession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("succession")
public class SuccessionController {
    @GetMapping("form")
    public String form(Model model){
        model.addAttribute("succession", new Succession());
        return "succession/form";
    }
    @GetMapping("list")
    public String list(){
        return "succession/list";
    }
    @GetMapping("detail")
    public String detail(Model model, @RequestParam Long id){
        /*Succession succession = successionRepository.findById(id).orElse(null);
        model.addAttribute("succession", succession);*/

        return "succession/detail";
    }

}
