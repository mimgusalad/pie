package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.Review;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.service.S3UploadService;

import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    S3UploadService s3UploadService;
    @Autowired
    public ReviewService(
            ReviewRepository reviewRepository,
            FileRepository fileRepository,
            S3UploadService s3UploadService) {
        this.reviewRepository = reviewRepository;
        this.fileRepository = fileRepository;
        this.s3UploadService = s3UploadService;
    }

    // 리뷰글 업로드
    // this method must be divided into two methods, which will be saveArticle and saveArticleImages
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

    // 전체 리뷰글 조회하기
    public List<review_article> getAllReviewArticle(){
        return reviewRepository.findAllByOrderByRegdateDesc();
    }

    // 리뷰글 삭제하기
    public void deleteArticle(Long articleNo) {
        reviewRepository.deleteById(articleNo);
    }

    // 리뷰글 1개 조회하기
    public review_article getArticle(Long articleNo) {
        return reviewRepository.findByArticleNo(articleNo);
    }

    // 리뷰글 수정할때 수정한 날짜 필요하고 (moddate) and originally uploaded pictures must be deleted on the aws server as well
    // delete the pictures then upload the new ones.
    public void updateArticle(Long articleNo, Review review) {
        review_article review_article = reviewRepository.findByArticleNo(articleNo);

    }

    public List<review_article> getArticleByUserId(long userId) {
        return reviewRepository.findByUserIdOrderByRegdateDesc(userId);
    }
}

