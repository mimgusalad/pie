package com.itd5.homeReviewSite.signup;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class OAuthController {
    private final BCryptPasswordEncoder encoder;
    private final MemberRepository memberRepository;

    @GetMapping("/index")
    public String index(){return "index";}
    @GetMapping("/loginForm")
    public String home() {
        return "loginForm";
    }
    @GetMapping("/updateForm")
    public String updateForm() {
        return "updateForm";
    }
    @PostMapping("/updateForm")
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
}