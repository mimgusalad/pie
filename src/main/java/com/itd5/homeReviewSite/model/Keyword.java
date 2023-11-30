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

    public Keyword(){}
    public Keyword(String noise, String smell, String safety, String convenience, String insect,
                   String optionQuality, String trash, String sunlight){
        this.noise = Double.parseDouble(noise);
        this.smell = Double.parseDouble(smell);
        this.safety = Double.parseDouble(safety);
        this.convenience = Double.parseDouble(convenience);
        this.insect = Double.parseDouble(insect);
        this.optionQuality = Double.parseDouble(optionQuality);
        this.trash = Double.parseDouble(trash);
        this.sunlight = Double.parseDouble(sunlight);
    }
}
