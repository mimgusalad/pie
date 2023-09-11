package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@Entity
public class review_article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int articleNo;      //review number
    private Long userId;         // 리뷰 작성 user Id

    private String houseType;   // 원룸, 투룸 등 정보
    @NotNull
    private String payment;     // 전세 혹은 월세
    @NotNull
    private String livingYear;     //거주년도
    @NotNull
    private double rating;      // 별점 평가 점수
    @NotNull
    private int deposit;            //보증금
    private int fee;                //월세
    @NotNull
    private String address;     // 주소
    private String addressDetail;   // 주소 자세히
    private float latitude;     // 위도 및 경도
    private float longitude;    // 위도 및 경도
    private int likedCnt;       // 공감 횟수
    private String contentTitle;    // 리뷰 글 제목
    private String contentText;     // 리뷰 글 내용
    private Timestamp regdate;  // 리뷰 작성 날짜
    private String picture;     // 사진 첨부
    private int certification;  // 입주민 인증 확인
}
