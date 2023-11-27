package com.itd5.homeReviewSite.controller;
import com.itd5.homeReviewSite.Service.FavoriteService;
import com.itd5.homeReviewSite.Service.ReviewService;
import com.itd5.homeReviewSite.Service.SuccBoardService;
import com.itd5.homeReviewSite.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
public class MainController {
    @GetMapping("main")
    public String mainPage(){
        return "mainPage";
    }

    private final ReviewService reviewService;
    private final SuccBoardService succBoardService;
    private final FavoriteService favoriteService;
    @Autowired
    public MainController(ReviewService reviewService, SuccBoardService succBoardService, FavoriteService favoriteService) {
        this.reviewService = reviewService;
        this.succBoardService = succBoardService;
        this.favoriteService = favoriteService;
    }

    // 이미지, 리뷰글 저장 테스트용 api
    // postman에서 테스트햇음
    @ResponseBody
    @PostMapping("checkpost")
    public List<review_article> checkPost(@ModelAttribute Review review){
        reviewService.saveArticle(review);
        return reviewService.getAllReviewArticle();
    }

    // flutter에서 테스트했음
    // 이미지만 받아옴
    @ResponseBody
    @PostMapping("checkpost2")
    public List<review_article> checkPost2(@RequestParam("images") List<MultipartFile> review){
        review.forEach(
                img -> System.out.println(img.getOriginalFilename())
        );
        return reviewService.getAllReviewArticle();
    }

    // 전체 리뷰글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("reviews")
    public List<review_article> getAllReviewArticle(){
        return reviewService.getAllReviewArticle();
    }

    // 리뷰글 삭제하기
    @ResponseBody
    @DeleteMapping("reviews/{articleNo}")
    public List<review_article> deleteArticle(@PathVariable Long articleNo){
        reviewService.deleteArticle(articleNo);
        return reviewService.getAllReviewArticle();
    }

    // 리뷰글 1개 조회하기
    @ResponseBody
    @GetMapping("reviews/{articleNo}")
    public review_article getArticle(@PathVariable Long articleNo){
        return reviewService.getArticle(articleNo);
    }

    // 리뷰글 수정하기
    @ResponseBody
    @PutMapping("reviews/{articleNo}")
    public void updateArticle(@PathVariable Long articleNo, @ModelAttribute Review review){
        reviewService.updateArticle(articleNo, review);
    }

    // 내가 쓴 리뷰글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("reviews/my")
    public List<review_article> getMyArticle(@RequestParam("userId") long userId){
       return reviewService.getArticleByUserId(userId);
    }

    // 여기서부턴 승계글 관련 api

    // 전체 승계글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("articles")
    public List<succession_article> getAllSuccArticle(){
        return succBoardService.getAllSuccArticle();
    }

    @ResponseBody
    @GetMapping("articles/{articleNo}")
    public SuccArticle getSuccArticle(@PathVariable Long articleNo){
        return succBoardService.getSuccArticleAndWriter(articleNo);
    }

    // 즐겨찾기 핸들러
    @ResponseBody
    @PostMapping("favorite")
    public List<Favorite> favoriteHandler(@ModelAttribute Favorite favorite){
        return favoriteService.favoriteHandler(favorite.getUserId(), favorite.getArticleNo());
    }

    // 즐겨찾기 날짜순으로 가져오기
    @ResponseBody
    @GetMapping("favorite")
    public List<review_article> getFavorite(@RequestParam("userId") long userId){
        return favoriteService.getFavorite(userId);
    }

}
