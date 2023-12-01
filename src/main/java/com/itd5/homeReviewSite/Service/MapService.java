package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.signup.MemberRepository;
import org.eclipse.sisu.Dynamic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
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
    MemberRepository memberRepository;
    @Autowired
    public MapService(
            ReviewRepository reviewRepository,
            FileRepository fileRepository,
            S3UploadService s3UploadService,
            AddressRepository addressRepository,
            KeywordRepository keywordRepository,
            ReviewService reviewService,
            MemberRepository memberRepository) {
        this.reviewRepository = reviewRepository;
        this.fileRepository = fileRepository;
        this.s3UploadService = s3UploadService;
        this.addressRepository = addressRepository;
        this.keywordRepository = keywordRepository;
        this.reviewService = reviewService;
        this.memberRepository = memberRepository;
    }


    public List<Map> getReviewsWithDetailedInformation(){
        List<Map> items = new ArrayList<>();
        List<review_article> review_articleList = reviewRepository.findAll();
        return getMaps(items, review_articleList);
    }

    public List<Map> getDistinctAddressReviews(){
        List<Map> items = new ArrayList<>();
        List<review_article> review_articleList = reviewRepository.findDistinctByAddressId();
        return getMaps(items, review_articleList);
    }

    public List<Map> getDetailedReviewByAddressId(long addressId){
        List<Map> items = new ArrayList<>();
        List<review_article> review_articleList = reviewRepository.findByAddressId(addressId);
        review_articleList.forEach( review ->{
            // 각 게시글 사진 가져오기
            Long articleNo = review.getArticleNo();
            List<PhotoFile> photoFiles = fileRepository.findByReviewIdAndArticleType(articleNo,"review");
            List<String> img_list = new ArrayList<>();
            photoFiles.forEach(photoFile -> {
                img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            });
            // 각 게시글 위도경도 가져오기
            Address address = addressRepository.findByAddressId(addressId);

            Map item = new Map();
            item.setImg_url(img_list);
            item.setReview_article(review);
            if(address == null){
                item.setLatitude(0);
                item.setLongitude(0);
                item.setReviewCount(0);
                item.setKeyword(new HashMap<>());
                items.add(item);
                return;
            }

            // 각 게시글 키워드 가져오기
            Keyword keywords = keywordRepository.findByReviewId(articleNo);
            // 키워드 난이도에 따른 배열로 처리
            HashMap<String, List<String>> keywordMap = new HashMap<>(4);
            // 주의, 경계, 심각, 문제 없음 = [][][][]
            KeywordProcessor keywordProcessor = new KeywordProcessor(reviewService);
            keywordMap = keywordProcessor.processKeywords(keywords);

            // 게시글 작성자 정보 가져오기
            long userId = review.getUserId();
            UserInfo userInfo = memberRepository.findWriter(userId);

            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keywordMap);
            item.setUserInfo(userInfo);
            items.add(item);
        });
        return items;
    }

    public List<Map> getSearchQuery(String firstKeyword, String secondKeyword, String thirdKeyword) {
        List<Map> items = new ArrayList<>();
        List<review_article> review_articleList = reviewRepository.findByAddressKeywordAndFirstKeywordAndSecondKeywordAndThirdKeyword(firstKeyword, secondKeyword, thirdKeyword);
        return getMaps(items, review_articleList);
    }

    private List<Map> getMaps(List<Map> items, List<review_article> review_articleList) {
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
                item.setKeyword(new HashMap<>());
                items.add(item);
                return;
            }

            // 각 게시글 키워드 가져오기
            Keyword keywords = keywordRepository.findByReviewId(articleNo);

            // 키워드 한글로 처리
            HashMap<String, List<String>> keywordMap = new HashMap<>(4);
            // 주의, 경계, 심각, 문제 없음 = [][][][]
            KeywordProcessor keywordProcessor = new KeywordProcessor(reviewService);
            keywordMap = keywordProcessor.processKeywords(keywords);

            long userId = review.getUserId();
            UserInfo userInfo = memberRepository.findWriter(userId);

            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keywordMap);
            item.setUserInfo(userInfo);
            items.add(item);
        });
        return items;
    }

    public String korToEng(String keyword){
        // kor to eng
        return switch (keyword) {
            case "소음" -> "k.noise";
            case "냄새" -> "k.smell";
            case "치안" -> "k.safety";
            case "편의시설" -> "k.convenience";
            case "벌레" -> "k.insect";
            case "옵션 상태" -> "k.optionQuality";
            case "쓰레기 처리" -> "k.trash";
            case "일조량" -> "k.sunlight";
            default -> "error";
        };
    }

    //eng to kor
    public String EngToKor(String keyword){
        return switch (keyword) {
            case "noise" -> "소음";
            case "smell" -> "냄새";
            case "safety" -> "치안";
            case "convenience" -> "편의시설";
            case "insect" -> "벌레";
            case "optionQuality" -> "옵션 상태";
            case "trash" -> "쓰레기 처리";
            case "sunlight" -> "일조량";
            default -> "error";
        };
    }

}

