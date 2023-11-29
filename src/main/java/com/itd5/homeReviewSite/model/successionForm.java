package com.itd5.homeReviewSite.model;

import lombok.Data;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Data
public class successionForm {
    private String houseType;
    private String addressName;
    private String addressDetail;
    private String periodYear;
    private String periodMonth;
    private String periodDay;
    private String payType;
    private String payment;
    private String deposit;
    private String fee;
    private String contentTitle;
    private String contentText;
    private ArrayList optionQuality;
    private ArrayList successionQuality;
    private String files;
}
