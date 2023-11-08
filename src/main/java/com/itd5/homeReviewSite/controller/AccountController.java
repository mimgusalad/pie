package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import com.itd5.homeReviewSite.model.succession_article;
import com.itd5.homeReviewSite.signup.MemberRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import com.itd5.homeReviewSite.signup.SocialAuth;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("account")
public class AccountController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    SuccessionRepository successionRepository;
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
    @GetMapping("myPage/myReview")
    public String myReview(Model model) {
        Long userId = getLoginUserId();

        List<review_article> myReviewList = reviewRepository.findByUserId(userId);
        model.addAttribute("myReviewList", myReviewList);

        return "account/myPage";
    }
    @GetMapping("myPage/mySuccession")
    public String mySuccession(Model model) {

        Long userId = getLoginUserId();
        succession_article successionArticle = successionRepository.findByUserId(userId);
        model.addAttribute("successionArticle", successionArticle);
        return "redirect:/succession/detail?articleNo="+successionArticle.getArticleNo();
    }
    public Long getLoginUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails) principal;
        Long userId = principalDetails.getMember().getId();

        return userId;
    }
    @GetMapping("myPage/setting")
    public String setting(Model model) {
        Long userId = getLoginUserId();
        SocialAuth member = memberRepository.findById(userId).orElse(null);

        if (member != null) {
            model.addAttribute("socialAuth", member);
        }

        return "account/setting"; // setting 페이지에 대한 뷰로 이동
    }

    @PostMapping("myPage/setting")
    public String updateSetting(@RequestParam("nickname") String nickname) {
        Long userId = getLoginUserId();
        SocialAuth member = memberRepository.findById(userId).orElse(null);

        if (member != null) {
            member.setNickname(nickname);
            memberRepository.save(member); // 업데이트된 정보를 저장

            return "redirect:/account/myPage/setting"; // 수정 후 다시 설정 페이지로 리다이렉트
        }

        return "redirect:/account/myPage"; // 사용자 정보가 없는 경우 마이페이지로 리다이렉트
    }
    @PostMapping("myPage/updateUserInfo")
    @ResponseBody
    public Map<String, Object> updateUserInfo(@RequestBody Map<String, String> userUpdateData) {
        Map<String, Object> response = new HashMap<>();
        try {
            Long userId = getLoginUserId();
            SocialAuth member = memberRepository.findById(userId).orElse(null);
            if (member != null) {
                member.setNickname(userUpdateData.get("nickname"));
                member.setUserInfo(userUpdateData.get("userInfo"));
                memberRepository.save(member);
                response.put("success", true);
            } else {
                response.put("success", false);
            }
        } catch (Exception e) {
            response.put("success", false);
            response.put("에러발생", e.getMessage());
        }
        return response;
    }
}
