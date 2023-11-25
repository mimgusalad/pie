package com.itd5.homeReviewSite.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Entity
public class succession_article {
    @Id
    //@Column(name="succession_articleNo")
    //@OneToMany(fetch=FetchType.LAZY)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleNo;  // 승계글 id
    private Long userId;     //작성자 user id
    private String payType; // 월세 전세인지 선택
    @NotNull
    private String houseType;   // 원룸, 투룸,, 등 방구조 저장
    @NotNull
    private int periodYear;     // 계약기간 년도 저장
    @NotNull
    private int periodMonth;    // 계약기간 월 저장
    @NotNull
    private int periodDay;      //계약기간 일 저장
    @NotNull
    private int deposit;    // 보증금
    @NotNull
    private String address;     // 도로명 주소 및 구 주소
    private String addressDetail;   // 상세주소
    private int fee;    //월세
    private int payment;        // 관리비
    private double area;    // 승계 건물 면적
    private String contentText; //승계글 text
    private String contentTitle;    // 승계글 제목
    private String optionQuality;   // 승계방 옵션 물건 저장
    private String successionQuality;  // 승계 물건 저장
    private int modCnt;  // 끌올 횟수 저장
    private String moddate;  // 끌올 날짜 저장
    private LocalDateTime regDate = LocalDateTime.now();     // 게시글 작성 날짜 및 수정 날짜 기록
    private int viewCnt;
}
