package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Favorite;
import com.itd5.homeReviewSite.model.FavoriteId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Favorite findByUserIdAndArticleNo(int userId, int reviewId);
    List<Integer> findByUserIdOrderByFavDateDesc(long userId);
}
