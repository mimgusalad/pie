package com.itd5.homeReviewSite.model;

import jakarta.persistence.*;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Entity
public class review_article {
    @Id
    //@Column(name="review_articleNo")
    //@OneToMany(fetch = FetchType.LAZY)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleNo;      //review number
    private Long userId;         // 리뷰 작성 user Id
    @NotBlank
    private String houseType;   // 원룸, 투룸 등 정보
    @NotBlank
    private String payment;     // 전세 혹은 월세
    @NotBlank(message = "livingYear is not empty")
    private String livingYear;     //거주년도
    @NotNull
    private double rating;      // 별점 평가 점수
    @NotNull
    private int deposit;            //보증금
    private int fee;                //월세
    @NotBlank
    @NotEmpty
    private String address;     // 주소
    private String addressDetail;   // 주소 자세히
    private float latitude;     // 위도 및 경도
    private float longitude;    // 위도 및 경도
    private int likedCnt;       // 공감 횟수
    private String contentTitle;    // 리뷰 글 제목
    private String contentText;     // 리뷰 글 내용
    private LocalDateTime regdate = LocalDateTime.now();  // 리뷰 작성 날짜
    private int certification;  // 입주민 인증 확인
    private int viewCnt;
}
