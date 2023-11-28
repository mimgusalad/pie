package com.itd5.homeReviewSite.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserInfo {
    private String name;
    private String email;
    private String nickname;

    public UserInfo(String name, String email, String nickname) {
        this.name = name;
        this.email = email;
        this.nickname = nickname;
    }
    public String getNickname(){
        return nickname;
    }
}
