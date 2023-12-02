package com.itd5.homeReviewSite.model;

import lombok.Data;
import lombok.ToString;

@Data
public class UserInfo {
    private String name;
    private String email;
    private String nickname;
    private Long userId;

    public UserInfo(String name, String email, String nickname, Long userId){
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.userId = userId;
    }
    public String getNickname(){
        return nickname;
    }
}
