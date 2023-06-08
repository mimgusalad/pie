package com.itd5.homeReviewSite.model;

import com.fasterxml.jackson.annotation.JsonTypeId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
@Data
@Entity
public class Succession {
    @Id
    private int successionId;
    private String fee;
    private String area;
    private String deposit;
    private String period;
    private String payType;
    private String picture;
    private String option;
    private String date;
    private String houseType;
    private String modifying;
    private String update;
    private String content;
    private String payment;
    private String address;
}
