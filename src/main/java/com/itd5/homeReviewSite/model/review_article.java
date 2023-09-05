package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@Entity
public class review_article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int articleNo;
    private double rating;
    private String cons1;
    private String cons2;
    private String cons3;
    private String payment;
    private String picture;
    private int livingYear;
    private int likedCnt;
    private Timestamp regdate;
    private String houseType;
    private float latitude;
    private float longitude;
    private int certification;

    private int userId;


    // 추가
    private String address;
    private String addressDetail;
    private int deposit;
    private int fee;
    private String contentText;
    private String contentTitle;

}
