package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.UserInfo;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableCaching
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserInfoController {
    @GetMapping("/getCookie")
    public String getCookie(HttpServletRequest request) {
        HttpSession session = request.getSession(true);
        String jsessionId = session.getId();
        Cookie cookie = new Cookie("JSESSIONID", jsessionId);
        return cookie.getValue();
    }
    @GetMapping("/user-info")
    public UserInfo getUserInfo(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserInfo user = null;
        if (principal instanceof PrincipalDetails) {
            PrincipalDetails principalDetails = (PrincipalDetails) principal;
            String name = principalDetails.getMember().getName();
            String email = principalDetails.getMember().getEmail();
            String nickname = principalDetails.getMember().getNickname();
            user = new UserInfo(name, email, nickname);
            System.out.println(user.getName());
        } else if (principal instanceof String) {
            // Handle the case where principal is a String (e.g., username or identifier)
            // You can log an error or take appropriate action.
            user = new UserInfo("anonymous", "anonymous", "anonymous");
        }
        System.out.println("user name: " +user.getName());

        return user;
    }
}
