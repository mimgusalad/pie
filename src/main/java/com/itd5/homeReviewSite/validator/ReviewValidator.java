package com.itd5.homeReviewSite.validator;

import com.itd5.homeReviewSite.model.review_article;
import jakarta.validation.ConstraintViolation;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.Set;

@Component
public class ReviewValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return review_article.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        review_article reviewArticle = (review_article) target;

        if(reviewArticle.getHouseType() == null){
            errors.reject("nullValue",  "값을 입력해주세요");
        }
        ValidationUtils.rejectIfEmpty(errors,"houseType","required");
    }

}
