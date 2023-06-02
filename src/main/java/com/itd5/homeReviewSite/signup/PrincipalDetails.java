package com.itd5.homeReviewSite.signup;

//import lombok.Getter;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Map;

//import lombok.Getter;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.oauth2.core.user.OAuth2User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Map;

@Getter
public class PrincipalDetails implements OAuth2User {
    private Socialauth member;
    private Map<String, Object> attributes;

    public PrincipalDetails(Socialauth member) {
        this.member=member;
    }

    public PrincipalDetails(Socialauth member, Map<String, Object> attributes) {
        this.member=member;
        this.attributes=attributes;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collect = new ArrayList<>();
        collect.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return member.getRole();
            }
        });
        return collect;
    }

    @Override
    public String getName() {
        return "name";
    }
}
