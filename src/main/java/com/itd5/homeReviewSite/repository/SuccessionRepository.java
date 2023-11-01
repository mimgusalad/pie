package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.succession_article;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SuccessionRepository extends JpaRepository<succession_article,Long> {
    succession_article findByUserId(Long userId);

    List<succession_article> getAllByAddressIdIn(List<Long> list);
}
