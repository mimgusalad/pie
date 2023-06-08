package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.review_article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<review_article, Long> {
}
