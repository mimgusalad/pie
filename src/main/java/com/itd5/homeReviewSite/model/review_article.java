package com.itd5.homeReviewSite.model;

import jakarta.persistence.*;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

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
    private String utility;     // 관리비
    @NotBlank(message = "livingYear is not empty")
    private String livingYear;     //거주년도
    @NotNull
    private double rating;      // 별점 평가 점수
    @NotNull
    private int deposit;            //보증금
    private int fee;                //월세
    private int managementFee;      //관리비
    private String address;
    private String addressDetail;   // 주소 자세히

    private int likedCnt;       // 공감 횟수
    private String contentTitle;    // 리뷰 글 제목
    private String contentText;     // 리뷰 글 내용
    private LocalDateTime regdate = LocalDateTime.now();  // 리뷰 작성 날짜
    private int certification;  // 입주민 인증 확인
    private int viewCnt;
    private Long addressId;

    public review_article(){}
    public review_article(String houseType, String payment, String livingYear, String rating, String deposit,
                              String fee, String managementFee, String contentTitle, String contentText, String certification) {
        this.houseType = houseType;
        this.payment = payment;
        this.livingYear = livingYear;
        this.contentTitle = contentTitle;
        this.contentText = contentText;

        this.rating = (rating == "" ? 0 : Double.parseDouble(rating));
        this.deposit = (deposit == "" ? 0 : Integer.parseInt(deposit));
        this.fee = (fee == "" ? 0 : Integer.parseInt(fee));
        this.managementFee = (managementFee == "" ? 0 : Integer.parseInt(managementFee));
        this.certification = (certification == "" ? 0 : Integer.parseInt(certification));

    }
}
