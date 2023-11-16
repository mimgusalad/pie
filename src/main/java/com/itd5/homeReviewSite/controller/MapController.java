package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.Address;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

@Controller
@RequestMapping("/map")
@RequiredArgsConstructor
public class MapController {
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    ReviewRepository reviewRepository;

    @ResponseBody
    @GetMapping("list")
    public List<Address> list() throws IOException, InterruptedException {
        return addressRepository.findAll();
    }

    @ResponseBody
    @GetMapping("detail/{addressId}")
    public List<review_article> getReviewArticle(@PathVariable Long addressId) throws IOException, InterruptedException {
        return reviewRepository.findByAddressId(addressId);
    }

    @GetMapping("match")
    public String match(@RequestParam(value = "addressKeyword", required = false) String addressKeyword,
                        @RequestParam(value = "firstKeyword", required = false) String firstKeyword,
                        @RequestParam(value = "secondKeyword", required = false) String secondKeyword,
                        @RequestParam(value = "thirdKeyword", required = false) String thirdKeyword,
                        Model model) {

        //전처리
        /* 순차적으로 키워드가 입력되지 않은 경우
           mainPage에서 alert 메시지를 출력하고 map 화면으로 전환되지 않음

           주소 키워드가 입력되지 않은 경우에
           inputAddressKeyword 는 사용자 지정으로
           (비로그인 : 서버에서 알아서 지정)
           (로그인 : 회원에 저장된 관심 지역 중 하나)
         */

        if (addressKeyword != null) {
            model.addAttribute("addressKeyword", addressKeyword);
        }
        if (firstKeyword != null) {
            model.addAttribute("firstKeyword", firstKeyword);
        }
        if (secondKeyword != null) {
            model.addAttribute("secondKeyword", secondKeyword);
        }
        if (thirdKeyword != null) {
            model.addAttribute("thirdKeyword", thirdKeyword);
        }

        return "map/list";
    }

}
