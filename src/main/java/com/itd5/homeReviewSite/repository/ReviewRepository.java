package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
