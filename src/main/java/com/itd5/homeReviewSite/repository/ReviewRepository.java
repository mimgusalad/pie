package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.review_article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<review_article, Long> {
    List<review_article> findByUserId(Long userId);
    List<review_article> findTop4ByOrderByArticleNo();
    List<review_article> findTop4ByAddressId(Long addressId);
    List<review_article> getAllByAddressIdIn(List<Long> list);
    review_article findByArticleNo(Long articleNo);
    List<review_article> findByAddressId(Long addressId);
    List<review_article> findAllByOrderByRegdateDesc();
    List<review_article> findByUserIdOrderByRegdateDesc(long userId);
    @Query(value = "select * from review_article group by addressId", nativeQuery = true)
    List<review_article> findDistinctByAddressId();

    @Query(value="select * from review_article a, keyword k " +
            "where a.articleNo=k.reviewId " +
            "and (:first <= 2 or :second <= 5 or :third <= 8)", nativeQuery = true)
    List<review_article> findByAddressKeywordAndFirstKeywordAndSecondKeywordAndThirdKeyword(
            @Param("first") String firstKeyword,
            @Param("second") String secondKeyword,
            @Param("third") String thirdKeyword
    );


}
