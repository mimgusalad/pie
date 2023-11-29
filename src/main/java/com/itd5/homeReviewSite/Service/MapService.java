package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MapService {
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
    ReviewService reviewService;
    @Autowired
    public MapService(
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
            keyToString.setConvenience(reviewService.processKeyword(keywords.getConvenience()));
            keyToString.setSafety(reviewService.processKeyword(keywords.getSafety()));
            keyToString.setSmell(reviewService.processKeyword(keywords.getSmell()));
            keyToString.setInsect(reviewService.processKeyword(keywords.getInsect()));
            keyToString.setNoise(reviewService.processKeyword(keywords.getNoise()));
            keyToString.setTrash(reviewService.processKeyword(keywords.getTrash()));
            keyToString.setOptionQuality(reviewService.processKeyword(keywords.getOptionQuality()));
            keyToString.setSunlight(reviewService.processKeyword(keywords.getSunlight()));

            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keyToString);
            items.add(item);
        });
        return items;
    }

    public List<Map> getDistinctAddressReviews(){
        List<Map> items = new ArrayList<>();
        List<review_article> review_articleList = reviewRepository.findDistinctByAddressId();
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
            keyToString.setConvenience(reviewService.processKeyword(keywords.getConvenience()));
            keyToString.setSafety(reviewService.processKeyword(keywords.getSafety()));
            keyToString.setSmell(reviewService.processKeyword(keywords.getSmell()));
            keyToString.setInsect(reviewService.processKeyword(keywords.getInsect()));
            keyToString.setNoise(reviewService.processKeyword(keywords.getNoise()));
            keyToString.setTrash(reviewService.processKeyword(keywords.getTrash()));
            keyToString.setOptionQuality(reviewService.processKeyword(keywords.getOptionQuality()));
            keyToString.setSunlight(reviewService.processKeyword(keywords.getSunlight()));

            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keyToString);
            items.add(item);
        });
        return items;
    }
}
