package com.itd5.homeReviewSite.model;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "favorite")
@IdClass(FavoritePK.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorite {
    @Id
    @Column(name = "user_id")
    int userId;
    @Id
    @Column(name = "article_no")
    int articleNo;
    LocalDateTime favdate;

    @Override
    public String toString() {
        return "Favorite{" +
                "userId=" + userId +
                ", articleNo=" + articleNo +
                ", favDate=" + favdate +
                '}';
    }
}
