package com.itd5.homeReviewSite.controller;
import com.itd5.homeReviewSite.Service.FavoriteService;
import com.itd5.homeReviewSite.Service.ReviewService;
import com.itd5.homeReviewSite.Service.SuccBoardService;
import com.itd5.homeReviewSite.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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


//    // flutter에서 테스트했음
//    // 이미지만 받아옴
//    @ResponseBody
//    @PostMapping("checkpost2")
//    public List<review_article> checkPost2(@RequestParam("images") List<MultipartFile> review){
//        review.forEach(
//                img -> System.out.println(img.getOriginalFilename())
//        );
//        return reviewService.getAllReviewArticle();
//    }

    // 전체 리뷰글 최신순으로 가져오기
    @ResponseBody
    @GetMapping("reviews")
    public List<ReviewAndImgOut> getAllReviewArticle(){
        return reviewService.getAllReviewArticle();
    }

    // 리뷰글 삭제하기
    @ResponseBody
    @DeleteMapping("reviews/{articleNo}")
    public List<ReviewAndImgOut> deleteArticle(@PathVariable Long articleNo){
        reviewService.deleteArticle(articleNo);
        return reviewService.getAllReviewArticle();
    }

    // 리뷰글 1개 조회하기
    @ResponseBody
    @GetMapping("reviews/{articleNo}")
    public ReviewAndImgOut getOneArticle(@PathVariable Long articleNo){
        return reviewService.getOneArticle(articleNo);
    }

    // 리뷰글 수정하기
    @ResponseBody
    @PutMapping("reviews/{articleNo}")
    public void updateArticle(@PathVariable Long articleNo, @ModelAttribute ReviewAndImgIn reviewAndImgIn){
        reviewService.updateArticle(articleNo, reviewAndImgIn);
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
    public List<SuccArticle> getAllSuccArticle(){
        return succBoardService.getAllSuccArticle();
    }

    // 승계글 1개 조회하기
    @ResponseBody
    @GetMapping("articles/{articleNo}")
    public SuccArticle getSuccArticle(@PathVariable Long articleNo){
        return succBoardService.getSuccArticleAndWriter(articleNo);
    }

    // 즐겨찾기 핸들러
    @ResponseBody
    @PostMapping("favorite")
    public List<Favorite> favoriteHandler(@RequestBody FavoritePK favoritePK){
        System.out.println("favoritePK = " + favoritePK);
        return favoriteService.favoriteHandler(favoritePK);
    }

    // 즐겨찾기 날짜순으로 가져오기
    @ResponseBody
    @GetMapping("favorite")
    public List<ReviewAndImgOut> getFavorite(@RequestParam("userId") int userId){
        return favoriteService.getFavorites(userId);
    }

    @ResponseBody
    @GetMapping("reviews/favorite")
    public boolean checkFavorite(@RequestParam("userId") int userId, @RequestParam("articleNo") int articleNo){
        return favoriteService.checkFavorite(new FavoritePK(userId, articleNo));
    }

}
