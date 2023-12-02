package com.itd5.homeReviewSite.Service;
import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.FavoriteRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteService {
    @Autowired
    FavoriteRepository favoriteRepository;
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    S3UploadService s3UploadService;

    public FavoriteService(
            FavoriteRepository favoriteRepository,
            ReviewRepository reviewRepository,
            FileRepository fileRepository,
            S3UploadService s3UploadService) {
        this.favoriteRepository = favoriteRepository;
        this.reviewRepository = reviewRepository;
        this.fileRepository = fileRepository;
        this.s3UploadService = s3UploadService;
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

    public List<ReviewAndImgOut> getFavorites(int userId) {
        List<ReviewAndImgOut> myFavorites = new ArrayList<>();
        List<FavoriteRepository.review_article> favorites = favoriteRepository.getMyFavorites(userId);
        favorites.forEach(favorite -> {
            Long articleNo = favorite.getArticleNo();
            review_article review_article = reviewRepository.findByArticleNo(articleNo);
            List<PhotoFile> photoFiles =  fileRepository.findByReviewIdAndArticleType(articleNo, "review");
            List<String> img_list = new ArrayList<>();
            photoFiles.forEach(photoFile -> {
                img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            });
            ReviewAndImgOut reviewAndImgOut = new ReviewAndImgOut();
            reviewAndImgOut.setReview_article(review_article);
            reviewAndImgOut.setImg_url(img_list);
            myFavorites.add(reviewAndImgOut);
        });
        return myFavorites;
    }

    public boolean checkFavorite(FavoritePK key) {
        return favoriteRepository.findById(key).orElse(null) != null;
    }

    public Long getUserInfo(String email) {
        return favoriteRepository.getUserId(email);
    }
}
