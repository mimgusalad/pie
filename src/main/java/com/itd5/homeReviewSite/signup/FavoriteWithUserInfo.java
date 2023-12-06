package com.itd5.homeReviewSite.signup;

import com.itd5.homeReviewSite.model.UserInfo;
import com.itd5.homeReviewSite.model.review_article;
import lombok.Data;

@Data
public class FavoriteWithUserInfo {
    private review_article review;
    private UserInfo userInfo;

    public FavoriteWithUserInfo(review_article review, UserInfo userInfo) {
        this.review = review;
        this.userInfo = userInfo;
    }
}
