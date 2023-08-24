package com.itd5.homeReviewSite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/map")
public class MapController {
    @GetMapping("list")
    public String list(){
        return "map/list";
    }

    @GetMapping("match")
    public String match(@RequestParam(value="addressKeyword", required = false) String addressKeyword,
                        @RequestParam(value="firstKeyword", required = false) String firstKeyword,
                        @RequestParam(value="secondKeyword", required = false) String secondKeyword,
                        @RequestParam(value="thirdKeyword", required = false) String thirdKeyword,
                         Model model){

        //전처리
        /* 순차적으로 키워드가 입력되지 않은 경우
           mainPage에서 alert 메시지를 출력하고 map 화면으로 전환되지 않음

           주소 키워드가 입력되지 않은 경우에
           inputAddressKeyword 는 사용자 지정으로
           (비로그인 : 서버에서 알아서 지정)
           (로그인 : 회원에 저장된 관심 지역 중 하나)
         */

        if(addressKeyword != null) {
            model.addAttribute("addressKeyword", addressKeyword);
        }
        if(firstKeyword != null){
            model.addAttribute("firstKeyword", firstKeyword);
        }
        if(secondKeyword != null){
            model.addAttribute("secondKeyword", secondKeyword);
        }
        if(thirdKeyword != null){
            model.addAttribute("thirdKeyword", thirdKeyword);
        }

        return "map/list";
    }
}
