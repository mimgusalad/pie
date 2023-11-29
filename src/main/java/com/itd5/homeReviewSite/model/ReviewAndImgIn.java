package com.itd5.homeReviewSite.model;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class ReviewAndImgIn {
    private List<MultipartFile> img_list;
    private review_article review_article;
}
