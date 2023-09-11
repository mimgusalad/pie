package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.review_article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<review_article, Long> {
    List<review_article> findByUserId(Long userId);
}
