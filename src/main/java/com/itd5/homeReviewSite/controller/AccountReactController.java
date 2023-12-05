package com.itd5.homeReviewSite.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import com.itd5.homeReviewSite.signup.MemberRepository;
import com.itd5.homeReviewSite.signup.PrincipalDetails;
import com.itd5.homeReviewSite.signup.SocialAuth;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

import com.itd5.homeReviewSite.controller.UserInfoController;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Configuration;
@RestController
@RequestMapping("/api")
public class AccountReactController {
    private final ReviewRepository reviewRepository;
    private final MemberRepository memberRepository;
    private final SuccessionRepository successionRepository;
    private RestTemplate restTemplate;
    public AccountReactController(ReviewRepository reviewRepository, MemberRepository memberRepository, SuccessionRepository successionRepository, RestTemplate restTemplate) {
        this.reviewRepository = reviewRepository;
        this.memberRepository = memberRepository;
        this.successionRepository = successionRepository;
        this.restTemplate = restTemplate; // RestTemplate 주입

    }
    @GetMapping("/user-info")
    public ResponseEntity<?> getUserInfo() {
        Long userId = getLoginUserId();
        if (userId != null) {
            SocialAuth user = memberRepository.findById(userId).orElse(null);
            if (user != null) {
                Map<String, Object> userInfo = new HashMap<>();
                userInfo.put("userId", userId);
                userInfo.put("nickname", user.getNickname());
                return ResponseEntity.ok(userInfo);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "User not found"));
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "User not authenticated"));
        }
    }


    @GetMapping("/myReviewList")
    public ResponseEntity<?> getMyReviewList() {
        Long userId = getLoginUserId();
        List<review_article> myReviews = reviewRepository.findByUserId(userId);

        if(myReviews.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("리뷰가 없습니다.");
        }

        return ResponseEntity.ok(myReviews);
    }
    @GetMapping("/mySuccession")
    public succession_article getMySuccession() {
        Long userId = getLoginUserId();
        return successionRepository.findByUserId(userId);
    }
//    @GetMapping("/mySuccession")
//    public ResponseEntity<succession_article> getMySuccession() {
//        Long userId = getLoginUserId();
//        if (userId == null) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//        }
//
//        Long selectedArticleNo = null;
//        if (userId == 7) {
//            selectedArticleNo = 10L; // userId가 7일 때 articleNo 10 반환
//        } else if (userId == 15) {
//            selectedArticleNo = 16L; // userId가 15일 때 articleNo 16 반환
//        } else if (userId== 4){
//            selectedArticleNo=9L; // userId가 4일 때 articleNo 9 반환
//        }
//
//        if (selectedArticleNo != null) {
//            Optional<succession_article> succession = successionRepository.findById(selectedArticleNo);
//            if (succession.isPresent()) {
//                return ResponseEntity.ok(succession.get());
//            }
//        }
//
//        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
//    }

    @PostMapping("/updateUserInfo")
    public ResponseEntity<?> updateUserInfo(@RequestBody SocialAuth updatedUser) {
        // 사용자를 찾기 위한 ID 값 추출
        Long userId = getLoginUserId();
        // 데이터베이스에서 사용자 찾기
        SocialAuth existingUser = memberRepository.findById(userId).orElse(null);

        if (existingUser != null) {
            // 사용자 정보 업데이트
            existingUser.setNickname(updatedUser.getNickname());
//            existingUser.setUserInfo(updatedUser.getUserInfo());
            memberRepository.save(existingUser); // 업데이트된 사용자 저장
            return ResponseEntity.ok().body(Map.of("success", true));
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("success", false, "message", "사용자를 찾을 수 없습니다."));
    }

    @DeleteMapping("/reviews/{articleNo}")
    public ResponseEntity<?> deleteReview(@PathVariable Long articleNo) {
        Long userId = getLoginUserId();
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("사용자 인증 실패");
        }

        Optional<review_article> reviewOptional = reviewRepository.findById(articleNo);
        if (reviewOptional.isPresent()) {
            review_article review = reviewOptional.get();
            if (review.getUserId().equals(userId)) {
                reviewRepository.delete(review);
                return ResponseEntity.ok("리뷰가 삭제되었습니다.");
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("리뷰 삭제 권한이 없습니다.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("리뷰를 찾을 수 없습니다.");
        }
    }
    @DeleteMapping("/successions/{articleNo}")
    public ResponseEntity<?> deleteSuccession(@PathVariable Long articleNo) {
        Long userId = getLoginUserId();
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("사용자 인증 실패");
        }

        Optional<succession_article> successionOptional = successionRepository.findById(articleNo);
        if (successionOptional.isPresent()) {
            succession_article succession = successionOptional.get();
            if (succession.getUserId().equals(userId)) {
                successionRepository.delete(succession);
                return ResponseEntity.ok("승계글이 삭제되었습니다.");
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("승계글 삭제 권한이 없습니다.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("승계글을 찾을 수 없습니다.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("로그아웃 성공");
    }

//    @PostMapping("/updateUserInfo")
//    public Map<String, Object> updateUserInfo(@RequestBody UserInfoController userUpdateData) {
//        Long userId = getLoginUserId();
//        SocialAuth member = memberRepository.findById(userId).orElse(null);
//        Map<String, Object> response = new HashMap<>();
//
//        if (member != null) {
//            UserInfo userInfo=restTemplate.getForObject("/user-info",UserInfo.class);
//
//            if(userInfo!=null){
//                member.setNickname(userInfo.getNickname());
//                memberRepository.save(member);
//                response.put("success", true);
//            } else{
//                response.put("success", false);
//            }
//        } else {
//            response.put("success", false);
//        }
//
//        return response;
//    }

    private Long getLoginUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof PrincipalDetails) {
            return ((PrincipalDetails) principal).getMember().getId();
        }
        return null; // 또는 예외 처리
    }
}
