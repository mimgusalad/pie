package com.itd5.homeReviewSite.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class PhotoFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileId;
    private String articleType;
    //@ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name="review_articleNo")
    private Long reviewId;

    //@ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name="succession_articleNo")
    private Long successionId;
    private String saveFileName;
    private String oriFileName;

}
