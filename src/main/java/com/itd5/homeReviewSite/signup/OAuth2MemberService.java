package com.itd5.homeReviewSite.signup;


import com.itd5.homeReviewSite.model.Nickname;
import com.itd5.homeReviewSite.repository.NicknameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OAuth2MemberService extends DefaultOAuth2UserService {
    private final BCryptPasswordEncoder encoder;
    private final MemberRepository memberRepository;
    private final NicknameRepository nicknameRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        OAuth2MemberInfo memberInfo = null;
        System.out.println(oAuth2User.getAttributes());
        System.out.println(userRequest.getClientRegistration().getRegistrationId());

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        System.out.println("registrationId = " + registrationId);
        if (registrationId.equals("google")) {
            memberInfo = new GoogleMemberInfo(oAuth2User.getAttributes());
        } else if (registrationId.equals("kakao")) {
            memberInfo = new KakaoMemberInfo(oAuth2User.getAttributes());
        } else {
            System.out.println("로그인 실패");
        }
        String provider = memberInfo.getProvider();
        String providerId = memberInfo.getProviderId();
        // String oauth2Id = provider + "_" + providerId; //중복이 발생하지 않도록 provider와 providerId를 조합
        String username = memberInfo.getName();
        String email = memberInfo.getEmail();
        String role = "ROLE_USER"; //일반 유저
        String nickname = nicknameRepository.getRandomNickname().getNickname();
        System.out.println(oAuth2User.getAttributes());
        Optional<SocialAuth> findMember = memberRepository.findByProviderId(providerId);
        SocialAuth member=null;
        if (findMember.isEmpty()) { //찾지 못했다면
            member = SocialAuth.builder()
                    .name(username)
                    .email(email)
                    .password(encoder.encode("password"))
                    .role(role)
                    .provider(provider)
                    .providerId(providerId)
                    .nickname(nickname).build();
            memberRepository.save(member);
            nicknameRepository.setNicknameTaken(nickname);
        }
        else{
            member=findMember.get();
        }
        return new PrincipalDetails(member, oAuth2User.getAttributes());
    }

    public boolean verifyEmail(String email) {
        Optional<SocialAuth> existingMember=memberRepository.findByEmail(email);

        if(existingMember.isPresent()){
            return false;
        }
        return true;
    }
}