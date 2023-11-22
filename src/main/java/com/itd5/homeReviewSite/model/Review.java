package com.itd5.homeReviewSite.model;

import jakarta.persistence.Entity;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class Review {
    private List<MultipartFile> img_list;
    private review_article review_article;
}
