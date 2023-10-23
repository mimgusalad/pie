package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.succession_article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuccessionRepository extends JpaRepository<succession_article,Long> {
    succession_article findByUserId(Long userId);
    succession_article findByArticleNo(Long articleNo);
}
