package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class keyword {
    @Id
    private Long reviewId;
    private double noise;
    private double smell;
    private double safety;
    private double convenience;
    private double insect;
    private double optionQuality;
    private double trash;
    private double sunlight;
}
