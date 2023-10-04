package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.PhotoFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FileRepository extends JpaRepository<PhotoFile, Long> {

    List<PhotoFile> findByReviewIdAndArticleType(Long reviewId, String articleType);
    List<PhotoFile> findBySuccessionIdAndArticleType(Long successionId, String articleType);

    @Query(value = "SELECT photo " +
            "FROM review_article review " +
            "LEFT JOIN PhotoFile photo " +
            "ON review.articleNo = photo.reviewId " +
            "WHERE review.userId = :userId " +
            "Group By review.articleNo")
    List<PhotoFile> findPreviewImg(@Param("userId") Long userId);
}

