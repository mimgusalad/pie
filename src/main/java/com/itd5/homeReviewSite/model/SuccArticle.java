package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Data
public class SuccArticle {
    private succession_article succession_article;
    private List<String> img_list;
    private UserInfo userInfo;
}
