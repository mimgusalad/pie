package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.ReviewAndImgIn;
import com.itd5.homeReviewSite.model.ReviewAndImgOut;
import com.itd5.homeReviewSite.model.review_article;

import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

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
    public void saveArticle(ReviewAndImgIn reviewAndImgIn){
        System.out.println("Service/ArticleService/saveArticle called");
        long id = reviewRepository.save(reviewAndImgIn.getReview_article()).getArticleNo();
        reviewAndImgIn.getImg_list().forEach(multipartFile -> {
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
    public List<ReviewAndImgOut> getAllReviewArticle(){
        List<ReviewAndImgOut> allReviewArticle = new ArrayList<>();
        List<review_article> allReview_article = reviewRepository.findAllByOrderByRegdateDesc();
        allReview_article.forEach(review_article -> {
            Long articleNo = review_article.getArticleNo();
            List<PhotoFile> photoFiles = fileRepository.findByReviewIdAndArticleType(articleNo,"review");
            List<String> img_list = new ArrayList<>();
            photoFiles.forEach(photoFile -> {
                img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            });
            ReviewAndImgOut reviewAndImgOut = new ReviewAndImgOut();
            reviewAndImgOut.setReview_article(review_article);
            reviewAndImgOut.setImg_url(img_list);
            allReviewArticle.add(reviewAndImgOut);
        });

        // 최신순으로 정렬
        allReviewArticle.sort(new __ReviewComparator().reversed());
        return allReviewArticle;
    }

    // 리뷰글 삭제하기
    public void deleteArticle(Long articleNo) {
        reviewRepository.deleteById(articleNo);
    }

    // 리뷰글 1개 조회하기
    public ReviewAndImgOut getOneArticle(Long articleNo) {
        review_article review_article = reviewRepository.findByArticleNo(articleNo);
        List<PhotoFile> photoFiles = fileRepository.findByReviewIdAndArticleType(articleNo, "review");
        List<String> img_url = new ArrayList<>();
        for (PhotoFile photoFile : photoFiles) {
            img_url.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
        }
        ReviewAndImgOut reviewAndImgOut = new ReviewAndImgOut();
        reviewAndImgOut.setReview_article(review_article);
        reviewAndImgOut.setImg_url(img_url);
        return reviewAndImgOut;
    }

    // 리뷰글 수정할때 수정한 날짜 필요하고 (moddate) and originally uploaded pictures must be deleted on the aws server as well
    // delete the pictures then upload the new ones.
    public void updateArticle(Long articleNo, ReviewAndImgIn reviewAndImgIn) {
        review_article review_article = reviewRepository.findByArticleNo(articleNo);

    }

    // 내가 쓴 리뷰글 최신순으로 조회하기
    public List<ReviewAndImgOut> getArticleByUserId(long userId) {
        List<ReviewAndImgOut> myReviewArticle = new ArrayList<>();
        List<review_article> myReview_article = reviewRepository.findByUserIdOrderByRegdateDesc(userId);
        myReview_article.forEach(review_article -> {
            Long articleNo = review_article.getArticleNo();
            List<PhotoFile> photoFiles = fileRepository.findByReviewIdAndArticleType(articleNo,"review");
            List<String> img_list = new ArrayList<>();
            photoFiles.forEach(photoFile -> {
                img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            });
            ReviewAndImgOut reviewAndImgOut = new ReviewAndImgOut();
            reviewAndImgOut.setReview_article(review_article);
            reviewAndImgOut.setImg_url(img_list);
            myReviewArticle.add(reviewAndImgOut);
        });

        // 최신순으로 정렬
        myReviewArticle.sort(new __ReviewComparator().reversed());
        return myReviewArticle;
    }

    public review_article getArticle(Long articleNo) {
        return reviewRepository.findByArticleNo(articleNo);
    }
}

class __ReviewComparator implements Comparator<ReviewAndImgOut> {
    @Override
    public int compare(ReviewAndImgOut o1, ReviewAndImgOut o2) {
        return o1.getReview_article().getRegdate().compareTo(o2.getReview_article().getRegdate());
    }
}