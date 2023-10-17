package com.itd5.homeReviewSite.signup;


import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class OAuthController {
    private final BCryptPasswordEncoder encoder;
    private final MemberRepository memberRepository;

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
    @PostMapping("/join")
    public String join(SocialAuth member) {
        String rawPwd = member.getPassword();
        System.out.println("member = " + member);
        member.setRole("ROLE_USER");
        member.setPassword(encoder.encode(rawPwd));
        memberRepository.save(member);
        return "redirect:/index";
    }
    @GetMapping("/logout")
    public String logout(){return "login";}
    @GetMapping("/myPage")
    public String myPage() {
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
}