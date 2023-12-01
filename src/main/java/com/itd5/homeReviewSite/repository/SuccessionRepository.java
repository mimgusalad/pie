package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.SuccArticle;
import com.itd5.homeReviewSite.model.succession_article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SuccessionRepository extends JpaRepository<succession_article,Long> {
    succession_article findByUserId(Long userId);
    // 클남 이거 이제 안댐
    //List<succession_article> getAllByAddressIdIn(List<Long> list);

    succession_article findByArticleNo(Long articleNo);
    List<succession_article> findAllByOrderByRegDateDesc();
}
