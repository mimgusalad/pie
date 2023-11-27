package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.Favorite;
import com.itd5.homeReviewSite.model.FavoriteId;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.FavoriteRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FavoriteService {
    @Autowired
    FavoriteRepository favoriteRepository;
    @Autowired
    ReviewRepository reviewRepository;

    public FavoriteService(FavoriteRepository favoriteRepository, ReviewRepository reviewRepository) {
        this.favoriteRepository = favoriteRepository;
        this.reviewRepository = reviewRepository;
    }

    public List<Favorite> favoriteHandler(int userId, int articleNo) {
        // Check if the Favorite with the given composite key exists
        Favorite userFavorite = favoriteRepository.findByUserIdAndArticleNo(userId, articleNo);

        if (userFavorite == null) {
            // If it doesn't exist, create a new Favorite
            userFavorite = new Favorite();
            userFavorite.setUserId(userId);  // Set the composite key
            userFavorite.setArticleNo(articleNo);
            userFavorite.setFavDate(LocalDateTime.now());
            favoriteRepository.save(userFavorite);
        } else {
            // If it exists, delete it
            favoriteRepository.delete(userFavorite);
        }
        return favoriteRepository.findAll();
    }

    public List<review_article> getFavorite(long userId) {
        List<Integer> articleNoList = favoriteRepository.findByUserIdOrderByFavDateDesc(userId);
        return reviewRepository.findByArticleNoIn(articleNoList);
    }
}
