package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "keyword")
public class Keyword {
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
