package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.Review;
import com.itd5.homeReviewSite.service.S3UploadService;

import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.UUID;

@Service
public class ArticleService {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    S3UploadService s3UploadService;
    @Autowired
    public ArticleService(
            ReviewRepository reviewRepository,
            FileRepository fileRepository,
            S3UploadService s3UploadService) {
        this.reviewRepository = reviewRepository;
        this.fileRepository = fileRepository;
        this.s3UploadService = s3UploadService;
    }

    public void saveArticle(Review review){
        System.out.println("Service/ArticleService/saveArticle called");
        long id = reviewRepository.save(review.getReview_article()).getArticleNo();
        review.getImg_list().forEach(multipartFile -> {
            System.out.println(multipartFile.getOriginalFilename());
            PhotoFile photoFile = new PhotoFile();
            String originalFileName = multipartFile.getOriginalFilename();
            String fileName = UUID.randomUUID()+"."+extractExt(originalFileName);
            photoFile.setArticleType("review");
            photoFile.setReviewId(id);
            photoFile.setSaveFileName(fileName);
            photoFile.setOriFileName(originalFileName);
            fileRepository.save(photoFile);
            try {
                s3UploadService.saveFile(multipartFile,fileName);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }
    private String extractExt(String originalFilename) {
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }
}

