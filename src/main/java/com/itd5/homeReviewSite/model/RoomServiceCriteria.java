package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
public class RoomServiceCriteria {
    private String purpose;
    private String keyword;
    private String structure;
    private String priceOption;
    private String address;
    private int minDeposit;
    private int maxDeposit;
    private int minMonthlyRent;
    private int maxMonthlyRent;
}
