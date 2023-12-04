package com.itd5.homeReviewSite.model;

import lombok.Data;

import java.util.ArrayList;

@Data
public class reviewForm {
    private String houseType;
    private String payment;
    private String managementFee;
    private String deposit;
    private String fee;
    private String address;
    private String addressDetail;
    private String livingYear;
    private String noise;
    private String safety;
    private String trash;
    private String smell;
    private String optionQuality;
    private String sunlight;
    private String insect;
    private String convenience;
    private String contentTitle;
    private String contentText;
    private String rating;
    private ArrayList files;
    private String certification;
}
