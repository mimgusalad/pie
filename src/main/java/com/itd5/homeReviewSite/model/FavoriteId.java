package com.itd5.homeReviewSite.model;

import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteId implements Serializable {
    private int userId;
    private int articleNo;
}
