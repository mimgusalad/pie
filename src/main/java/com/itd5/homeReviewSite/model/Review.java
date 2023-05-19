package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Review {
    private int reviewId;
    private String address;
    private int startPoint;
    private String option;
    private String payment;
    private String picture;
    private String livingYear;
    private String likedCnt;
    private String date;
    private String houseType;
    private String cons;
    private String content;
}
