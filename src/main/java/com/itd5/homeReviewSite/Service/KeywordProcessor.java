package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.Keyword;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class KeywordProcessor {
    @Autowired
    private final ReviewService reviewService;
    public KeywordProcessor(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    public HashMap<String, List<String>> processKeywords(Keyword keywords) {
        HashMap<String, List<String>> keywordMap = new HashMap<>(4);

        initializeKeywordMap(keywordMap);

        processKeyword(reviewService.processKeyword(keywords.getConvenience()), keywordMap, "편의시설");
        processKeyword(reviewService.processKeyword(keywords.getSafety()), keywordMap, "치안");
        processKeyword(reviewService.processKeyword(keywords.getSmell()), keywordMap, "냄새");
        processKeyword(reviewService.processKeyword(keywords.getInsect()), keywordMap, "벌레");
        processKeyword(reviewService.processKeyword(keywords.getNoise()), keywordMap, "소음");
        processKeyword(reviewService.processKeyword(keywords.getTrash()), keywordMap, "쓰레기 처리");
        processKeyword(reviewService.processKeyword(keywords.getOptionQuality()), keywordMap, "옵션 상태");
        processKeyword(reviewService.processKeyword(keywords.getSunlight()), keywordMap, "일조량");

        return keywordMap;
    }

    private void initializeKeywordMap(HashMap<String, List<String>> keywordMap) {
        keywordMap.put("주의", new ArrayList<>());
        keywordMap.put("경계", new ArrayList<>());
        keywordMap.put("심각", new ArrayList<>());
        keywordMap.put("문제 없음", new ArrayList<>());
    }

    private void processKeyword(String level, HashMap<String, List<String>> keywordMap, String keyword) {
        switch (level) {
            case "주의" -> keywordMap.get("주의").add(keyword);
            case "경계" -> keywordMap.get("경계").add(keyword);
            case "심각" -> keywordMap.get("심각").add(keyword);
            default -> keywordMap.get("문제 없음").add(keyword);
        }
    }

}
