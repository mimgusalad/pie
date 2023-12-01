package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.KeywordRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
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
            // 키워드 한글로 처리
            HashMap<String, List<String>> keywordMap = new HashMap<>(4);
            // 주의, 경계, 심각, 문제 없음 = [][][][]

            keywordMap.put("주의", new ArrayList<>());
            keywordMap.put("경계", new ArrayList<>());
            keywordMap.put("심각", new ArrayList<>());
            keywordMap.put("문제 없음", new ArrayList<>());

            if(reviewService.processKeyword(keywords.getConvenience()).equals("주의")) {
                keywordMap.get("주의").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("주의")) {
                keywordMap.get("주의").add("치안");
            }
            if(reviewService.processKeyword(keywords.getSmell()).equals("주의")) {
                keywordMap.get("주의").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("주의")) {
                keywordMap.get("주의").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("주의")) {
                keywordMap.get("주의").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("주의")) {
                keywordMap.get("주의").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("주의")) {
                keywordMap.get("주의").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("주의")) {
                keywordMap.get("주의").add("일조량");
            }
            if(reviewService.processKeyword(keywords.getConvenience()).equals("경계")) {
                keywordMap.get("경계").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("경계")) {
                keywordMap.get("경계").add("치안");
            }
            if(reviewService.processKeyword(keywords.getSmell()).equals("경계")) {
                keywordMap.get("경계").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("경계")) {
                keywordMap.get("경계").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("경계")) {
                keywordMap.get("경계").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("경계")) {
                keywordMap.get("경계").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("경계")) {
                keywordMap.get("경계").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("경계")) {
                keywordMap.get("경계").add("일조량");
            }
            if(reviewService.processKeyword(keywords.getConvenience()).equals("심각")) {
                keywordMap.get("심각").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("심각")) {
                keywordMap.get("심각").add("치안");
            }
            if(reviewService.processKeyword(keywords.getSmell()).equals("심각")) {
                keywordMap.get("심각").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("심각")) {
                keywordMap.get("심각").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("심각")) {
                keywordMap.get("심각").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("심각")) {
                keywordMap.get("심각").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("심각")) {
                keywordMap.get("심각").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("심각")) {
                keywordMap.get("심각").add("일조량");
            }
            if(reviewService.processKeyword(keywords.getConvenience()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("치안");
            }

            if(reviewService.processKeyword(keywords.getSmell()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("일조량");
            }


            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keywordMap);
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

            keywordMap.put("주의", new ArrayList<>());
            keywordMap.put("경계", new ArrayList<>());
            keywordMap.put("심각", new ArrayList<>());
            keywordMap.put("문제 없음", new ArrayList<>());

            if(reviewService.processKeyword(keywords.getConvenience()).equals("주의")) {
                keywordMap.get("주의").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("주의")) {
                keywordMap.get("주의").add("치안");
            }
            if(reviewService.processKeyword(keywords.getSmell()).equals("주의")) {
                keywordMap.get("주의").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("주의")) {
                keywordMap.get("주의").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("주의")) {
                keywordMap.get("주의").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("주의")) {
                keywordMap.get("주의").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("주의")) {
                keywordMap.get("주의").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("주의")) {
                keywordMap.get("주의").add("일조량");
            }
            if(reviewService.processKeyword(keywords.getConvenience()).equals("경계")) {
                keywordMap.get("경계").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("경계")) {
                keywordMap.get("경계").add("치안");
            }
            if(reviewService.processKeyword(keywords.getSmell()).equals("경계")) {
                keywordMap.get("경계").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("경계")) {
                keywordMap.get("경계").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("경계")) {
                keywordMap.get("경계").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("경계")) {
                keywordMap.get("경계").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("경계")) {
                keywordMap.get("경계").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("경계")) {
                keywordMap.get("경계").add("일조량");
            }
            if(reviewService.processKeyword(keywords.getConvenience()).equals("심각")) {
                keywordMap.get("심각").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("심각")) {
                keywordMap.get("심각").add("치안");
            }
            if(reviewService.processKeyword(keywords.getSmell()).equals("심각")) {
                keywordMap.get("심각").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("심각")) {
                keywordMap.get("심각").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("심각")) {
                keywordMap.get("심각").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("심각")) {
                keywordMap.get("심각").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("심각")) {
                keywordMap.get("심각").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("심각")) {
                keywordMap.get("심각").add("일조량");
            }
            if(reviewService.processKeyword(keywords.getConvenience()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("편의시설");
            }
            if(reviewService.processKeyword(keywords.getSafety()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("치안");
            }

            if(reviewService.processKeyword(keywords.getSmell()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("냄새");
            }
            if(reviewService.processKeyword(keywords.getInsect()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("벌레");
            }
            if(reviewService.processKeyword(keywords.getNoise()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("소음");
            }
            if(reviewService.processKeyword(keywords.getTrash()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("쓰레기 처리");
            }
            if(reviewService.processKeyword(keywords.getOptionQuality()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("옵션 상태");
            }
            if(reviewService.processKeyword(keywords.getSunlight()).equals("문제 없음")) {
                keywordMap.get("문제 없음").add("일조량");
            }

            item.setLatitude(address.getLatitude());
            item.setLongitude(address.getLongitude());
            item.setReviewCount(address.getReviewCount());
            item.setKeyword(keywordMap);
            items.add(item);
        });
        return items;
    }

    public String korToEng(String keyword){
        // kor to eng
        if(keyword.equals("소음")){
            return "k.noise";
        }else if(keyword.equals("냄새")){
            return "k.smell";
        }else if(keyword.equals("치안")){
            return "k.safety";
        }else if(keyword.equals("편의시설")){
            return "k.convenience";
        }else if(keyword.equals("벌레")){
            return "k.insect";
        }else if(keyword.equals("옵션 상태")){
            return "k.optionQuality";
        }else if(keyword.equals("쓰레기 처리")){
            return "k.trash";
        }else if(keyword.equals("일조량")){
            return "k.sunlight";
        }else{
            return "error";
        }
    }
}
