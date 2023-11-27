package com.itd5.homeReviewSite.Service;
import com.itd5.homeReviewSite.model.Favorite;
import com.itd5.homeReviewSite.model.FavoritePK;
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

    public List<Favorite> favoriteHandler(FavoritePK key) {
        // Check if the Favorite with the given composite key exists
        FavoritePK pk = new FavoritePK(key.getUserId(), key.getArticleNo());
        Favorite userKey = favoriteRepository.findById(key).orElse(null);

        if (userKey == null) {
            // If it doesn't exist, create a new Favorite
            Favorite userFavorite = new Favorite();
            userFavorite.setUserId(key.getUserId());  // Set the composite key
            userFavorite.setArticleNo(key.getArticleNo());
            userFavorite.setFavdate(LocalDateTime.now());
            favoriteRepository.save(userFavorite);
        } else {
            // If it exists, delete it
            System.out.println("userKey = " + userKey);
            favoriteRepository.delete(userKey);
        }
        return favoriteRepository.findAll();
    }

    public List<FavoriteRepository.review_article> getFavorites(int userId) {
        return favoriteRepository.getMyFavorites(userId);
    }
}
