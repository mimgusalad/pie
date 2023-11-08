package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class RoomServiceCriteria {
    private String address;
    private String purpose;
    private String keyword;
    private String structure;
    private String priceOption;
    private int minDeposit;
    private int maxDeposit;
    private int minMonthlyRent;
    private int maxMonthlyRent;
    @Id
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
