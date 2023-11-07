package com.itd5.homeReviewSite.signup;


import ch.qos.logback.classic.Logger;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import jakarta.servlet.http.HttpSession;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
@Controller
@RequiredArgsConstructor
public class OAuthController {
    private static final Logger logger = (Logger) LoggerFactory.getLogger(OAuthController.class);

    private final BCryptPasswordEncoder encoder;
    private final MemberRepository memberRepository;
    private final SessionService sessionService;
    @GetMapping("/index")
    public String index(){return "index";}
    @GetMapping("/login")
    public String home() {
        return "login";
    }
    @GetMapping("/joinMembership")
    public String joinForm() {
        return "joinMembership";
    }

    @Autowired
    private OAuth2MemberService oAuth2MemberService;
    // 중복 확인을 처리하는 메서드
    @GetMapping("/check-duplicate-email")
    @ResponseBody
    public Map<String, Boolean> checkDuplicateEmail(@RequestParam("email") String email) {
        boolean isDuplicate = memberRepository.existsByEmail(email);

        Map<String, Boolean> response = new HashMap<>();
        response.put("duplicate", isDuplicate);
        return response;
    }

    @PostMapping("/join")
    public String join(SocialAuth member, Model model) {
        String rawPwd = member.getPassword();
        System.out.println("member = " + member);

        // 이메일 중복 확인
        boolean isDuplicate = memberRepository.existsByEmail(member.getEmail());

        if (isDuplicate) {
            model.addAttribute("emailExists", true);
            return "joinMembership";
        }

        member.setRole("ROLE_USER");
        member.setPassword(encoder.encode(rawPwd));
        memberRepository.save(member);
        return "redirect:/index";
    }
    @GetMapping("/logout")
    public String logout(){return "login";}
    @GetMapping("/myPage")
    public String myPage(Model model) {
        // 세션에서 받아온 유저정보 검색
        UserDetails userDetails = (UserDetails) sessionService.getAttribute("userDetails");
        model.addAttribute("userDetails", userDetails);
        return "myPage";
    }

    @PostMapping("/myPage")
    public String updateMember(@ModelAttribute SocialAuth updatedMember) {
        Optional<SocialAuth> existingMemberOptional = memberRepository.findByProviderId(updatedMember.getProviderId());

        if (existingMemberOptional.isPresent()) {
            SocialAuth existingMember = existingMemberOptional.get();
            existingMember.setName(updatedMember.getName());
            memberRepository.save(existingMember);
        }

        return "redirect:/index";
    }



    @GetMapping("/private")
    public String privatePage() {
        return "privatePage";
    }
    @GetMapping("/admin")
    public String adminPage() {
        return "adminPage";
    }

//    @GetMapping("/login-success")
//    public String loginSuccess(HttpSession session) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//        sessionService.setAttribute("userDetails", userDetails);
//        logger.info("세션 연결 확인용");
//// OO님 환영합니다! 라는 모달창 띄우기?
////        model.addAttribute("username", userDetails.getUsername());
////        return "welcome-modal";
//        return "redirect:/";
//    }
}