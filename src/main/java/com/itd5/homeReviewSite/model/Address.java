package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Table;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;
    private Integer generation;
    private String household;
    private String floor;
    private Integer elevator;
    private String buildDate;
    private Double latitude;
    private Double longitude;
    private String address;
    private String buildingName;
    private String road_address;
    private Integer zone_no;    // 우편번호
    private int reviewCount;

}

