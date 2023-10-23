package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KeywordRepository extends JpaRepository<keyword, Long> {
    @Query("SELECT k, ra.userId FROM keyword k JOIN review_article ra ON k.review_id = ra.articleNo")
    List<Object[]> findKeywordAndUserId();
}
