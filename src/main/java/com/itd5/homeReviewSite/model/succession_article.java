package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
public class succession_article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int articleNo;  // 승계글 id
    private int fee;    //월세
    private double area;    // 승계 건물 면적
    private String payType; // 월세 전세인지 선택
    private String picture; // 승계글 작성시 업로드한 사진 파일 id
    private String optionQuality;   // 승계방 옵션 물건 저장
    private String successionQuality;  // 승계 물건 저장

    private String houseType;   // 원룸, 투룸,, 등 방구조 저장
    private float latitude;     //주소
    private float longitude;    // 주소

    private int deposit;    // 보증금
    private int modCnt;  // 끌올 횟수 저장
    private String moddate;  // 끌올 날짜 저장
    private Timestamp regDate;     // 게시글 작성 날짜 및 수정 날짜 기록

    //추가
    private String address;     // 주소
    private String addressDetail;   // 주소
    private int payment;        // 관리비
    private String contentText; //승계글 text
    private String contentTitle;    // 승계글 제목

    //추가
    private int periodYear;     // 계약기간 년도 저장
    private int periodMonth;    // 계약기간 월 저장
    private int periodDay;      //계약기간 일 저장
}
