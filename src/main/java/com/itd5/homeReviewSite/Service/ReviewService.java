package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.*;

import com.itd5.homeReviewSite.model.Map;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.Key;
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
    AddressRepository addressRepository;
    @Autowired
    KeywordRepository keywordRepository;
    @Autowired
    public ReviewService(
            ReviewRepository reviewRepository,
            FileRepository fileRepository,
            S3UploadService s3UploadService,
            AddressRepository addressRepository,
            KeywordRepository keywordRepository) {
        this.reviewRepository = reviewRepository;
        this.fileRepository = fileRepository;
        this.s3UploadService = s3UploadService;
        this.addressRepository = addressRepository;
        this.keywordRepository = keywordRepository;
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

    // 게시글 사진, 위도경도, 키워드 (한글로 처리), 리뷰개수(address table) 리뷰 정보
    public List<Map> getReviewsWithDetailedInformation(){
        List<Map> items = new ArrayList<>();
        List<review_article> review_articleList = reviewRepository.findAll();
        review_articleList.forEach( review ->{
            // 각 게시글 사진 가져오기
            Long articleNo = review.getArticleNo();
            List<PhotoFile> photoFiles = fileRepository.findByReviewIdAndArticleType(articleNo,"review");
            List<String> img_list = new ArrayList<>();
            photoFiles.forEach(photoFile -> {
                img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            });
            // 각 게시글 위도경도 가져오기
            Long addressId = review.getAddressId();
            Address address = addressRepository.findByAddressId(addressId);

            Map item = new Map();
            item.setImg_url(img_list);
            item.setReview_article(review);
            if(address == null){
                item.setLatitude(0);
                item.setLongitude(0);
                item.setReviewCount(0);
                item.setKeyword(new KeywordsToString());
                items.add(item);
                return;
            }

            // 각 게시글 키워드 가져오기
            Keyword keywords = keywordRepository.findByReviewId(articleNo);
            KeywordsToString keyToString = new KeywordsToString();

            // 키워드 한글로 처리
            keyToString.setConvenience(processKeyword(keywords.getConvenience()));
            keyToString.setSafety(processKeyword(keywords.getSafety()));
            keyToString.setSmell(processKeyword(keywords.getSmell()));
            keyToString.setInsect(processKeyword(keywords.getInsect()));
            keyToString.setNoise(processKeyword(keywords.getNoise()));
            keyToString.setTrash(processKeyword(keywords.getTrash()));
            keyToString.setOptionQuality(processKeyword(keywords.getOptionQuality()));
            keyToString.setSunlight(processKeyword(keywords.getSunlight()));

            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keyToString);
            items.add(item);
        });
        return items;
    }

    private String processKeyword(double keyword){
        if(keyword <= 2){
            return "문제 없음";
        }else if(keyword > 2 && keyword <= 5){
            return "주의";
        }else if(keyword > 5 && keyword <= 8){
            return "경계";
        }
        return "심각";
    }
}

class __ReviewComparator implements Comparator<ReviewAndImgOut> {
    @Override
    public int compare(ReviewAndImgOut o1, ReviewAndImgOut o2) {
        return o1.getReview_article().getRegdate().compareTo(o2.getReview_article().getRegdate());
    }
}