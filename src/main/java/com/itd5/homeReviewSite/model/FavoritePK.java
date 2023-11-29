package com.itd5.homeReviewSite.model;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavoritePK implements Serializable {
    private int userId;
    private int articleNo;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FavoritePK that = (FavoritePK) o;
        return userId == that.userId && articleNo == that.articleNo;
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, articleNo);
    }
}