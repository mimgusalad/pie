package com.itd5.homeReviewSite.signup;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
@Component
@ConfigurationProperties(prefix = "app.jwt")
public class TokenProvider {
    private static final String AUTHORITIES_KEY="auth";
    private static final String BEARER_TYPE="bearer";
    private static final long ACCESS_TOKEN_EXPIRE_TIME=1000*60*30;
    private static final long REFRESH_TOKEN_EXPIRE_TIME=1000*60*60*24*7;

    private String secret;

    public TokenProvider() {
        // 기본 생성자
    }
    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }


}
