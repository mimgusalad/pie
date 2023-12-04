package com.itd5.homeReviewSite.model;

import jakarta.persistence.*;
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
    @Column(name="road_address")
    private String roadAddress;
    private Integer zone_no;    // 우편번호
    private int reviewCount;

}

