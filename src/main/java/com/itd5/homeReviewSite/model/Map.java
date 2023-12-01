package com.itd5.homeReviewSite.model;

import lombok.Data;

import java.util.HashMap;
import java.util.List;

@Data
public class Map {
    List<String> img_url;
    review_article review_article;
    HashMap<String, List<String>> keyword;
    double longitude;
    double latitude;
    int reviewCount;
}
