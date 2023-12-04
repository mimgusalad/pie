package com.itd5.homeReviewSite.model;

import lombok.Data;

import java.util.HashMap;
import java.util.List;

@Data
public class ReviewAndImgOut {
    private List<String> img_url;
    private review_article review_article;
    private HashMap<String, List<String>> keyword;
    private UserInfo userInfo;
}
