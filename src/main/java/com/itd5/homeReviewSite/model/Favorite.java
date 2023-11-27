package com.itd5.homeReviewSite.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "favorite")
@IdClass(FavoriteId.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorite implements Serializable {
    @Id
    @Column(name = "user_id")
    int userId;
    @Id
    @Column(name = "article_no")
    int articleNo;
    @Column(name = "favdate")
    LocalDateTime favDate;
}
