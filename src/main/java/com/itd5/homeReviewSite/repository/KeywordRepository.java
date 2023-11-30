package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {
    Keyword findByReviewId(Long review_id);
}
