package com.itd5.homeReviewSite.model;

import lombok.Data;

import java.util.List;

@Data
public class Map {
    List<String> img_url;
    review_article review_article;
    KeywordsToString keyword;
    double longitude;
    double latitude;
    int reviewCount;
}
