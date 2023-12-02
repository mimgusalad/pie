package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Favorite;
import com.itd5.homeReviewSite.model.FavoritePK;
import com.itd5.homeReviewSite.model.review_article;
import com.querydsl.core.Tuple;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, FavoritePK> {
    Favorite findByUserIdAndArticleNo(int userId, int reviewId);
    @Query(value = "select a.* " +
            "from review_article a " +
            "join favorite f on a.articleNo = f.article_no " +
            "where f.user_id =:userId " +
            "order by f.favdate desc", nativeQuery = true)
    List<review_article> getMyFavorites(int userId);

    @Query(value = "select id from SocialAuth where email =:email", nativeQuery = true)
    Long getUserId(String email);

    interface review_article{
        Long getArticleNo();
        Long getUserId();
        String getHouseType();
        String getPayment();
        String getUtility();
        String getLivingYear();
        double getRating();
        int getDeposit();
        int getFee();
        String getAddress();
        String getAddressDetail();
        int getLikedCnt();
        String getContentTitle();
        String getContentText();
        int getCertification();
        int getViewCnt();
        Long getAddressId();
    }

}
