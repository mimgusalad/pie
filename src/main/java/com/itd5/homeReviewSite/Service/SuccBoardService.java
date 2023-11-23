package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.SuccArticle;
import com.itd5.homeReviewSite.model.succession_article;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import com.itd5.homeReviewSite.signup.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuccBoardService {
    @Autowired
    SuccessionRepository successionRepository;
    @Autowired
    MemberRepository memberRepository;

    public SuccBoardService(SuccessionRepository successionRepository) {
        this.successionRepository = successionRepository;
    }

    //전체 승계글 조회하기
    public List<succession_article> getAllSuccArticle(){
        return successionRepository.findAllByOrderByRegDateDesc();
    }

    // 승계글과 작성자 정보 가져오기
    public SuccArticle getSuccArticleAndWriter(Long articleNo){
        SuccArticle succArticle = new SuccArticle();
        // 승계글 정보 가져오기
        succArticle.setSuccession_article(successionRepository.findByArticleNo(articleNo));
        // 작성자 정보 가져오기
        succArticle.setUserInfo(memberRepository.findWriter(succArticle.getSuccession_article().getUserId()));
        // 닉네임이 없으면 이름으로 대체
        if(succArticle.getUserInfo().getNickname() == null){
            succArticle.getUserInfo().setNickname(succArticle.getUserInfo().getName());
        }
        return succArticle;
    }

}
