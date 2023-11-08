//package com.itd5.homeReviewSite.signup;
//
//import com.itd5.homeReviewSite.signup.JwtUtils;
//import com.itd5.homeReviewSite.signup.TokenProvider;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import jakarta.servlet.http.HttpServletRequest;
//
//// 미완성 - 현재 작업중인 코드입니다
//
//@Controller
//public class JwtTestController {
//
//    private final JwtUtils jwtUtils;
//    private final MemberRepository memberRepository;
//
//    public JwtTestController(JwtUtils jwtUtils, MemberRepository memberRepository) {
//        this.jwtUtils = jwtUtils;
//        this.memberRepository = memberRepository;
//    }
//    @GetMapping("/generateJwt")
//    @ResponseBody
//    public String generateJwt(Authentication authentication) {
//        // 사용자 이름으로 Authentication 객체 생성
//        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//        String username = userDetails.getUsername();
//
//        // JWT 생성
//        String jwt = jwtUtils.generateUserNameToken(authentication);
//
//        return "Generated JWT: " + jwt;
//    }
//
//
//    @GetMapping("/getUsernameFromJwt")
//    @ResponseBody
//    public String getUsernameFromJwt(HttpServletRequest request) {
//        // JWT 추출
//        String token = jwtUtils.resolveToken(request);
//
//        // JWT를 이용하여 사용자 이름 받아오기
//        String username = jwtUtils.getUsernameFromToken(token);
//
//        return "Username from JWT: " + username;
//    }
//}
