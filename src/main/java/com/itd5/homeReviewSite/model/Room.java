package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;
    private String address;
    private String addressDetail;
    private int deposit;
    private int fee;
    private String houseType;
    private int noise;
    private int optionQuality;
    private int safety;
    private int sunlight;
    private int trash;
    private int insect;
    private int smell;
    private int convenience;

}
