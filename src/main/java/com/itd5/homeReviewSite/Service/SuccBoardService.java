package com.itd5.homeReviewSite.Service;

import com.itd5.homeReviewSite.model.PhotoFile;
import com.itd5.homeReviewSite.model.SuccArticle;
import com.itd5.homeReviewSite.model.succession_article;
import com.itd5.homeReviewSite.repository.FileRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import com.itd5.homeReviewSite.signup.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SuccBoardService {
    @Autowired
    SuccessionRepository successionRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    FileRepository fileRepository;
    @Autowired
    S3UploadService s3UploadService;

    public SuccBoardService(
            SuccessionRepository successionRepository,
            MemberRepository memberRepository,
            FileRepository fileRepository) {
        this.successionRepository = successionRepository;
        this.memberRepository = memberRepository;
        this.fileRepository = fileRepository;
    }

    //전체 승계글 조회하기
    public List<SuccArticle> getAllSuccArticle(){
        List<SuccArticle> allSuccArticle = new ArrayList<>();
        List<succession_article> allSuccession_article = successionRepository.findAll();
        allSuccession_article.forEach(succession_article -> {
            Long articleNo = succession_article.getArticleNo();
            List<PhotoFile> photoFiles = fileRepository.findBySuccessionIdAndArticleType(articleNo,"succession");
            List<String> img_list = new ArrayList<>();
            photoFiles.forEach(photoFile -> {
                img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
            });
            SuccArticle succArticle = new SuccArticle();
            succArticle.setSuccession_article(succession_article);
            succArticle.setImg_list(img_list);
            succArticle.setUserInfo(memberRepository.findWriter(succession_article.getUserId()));
            // 닉네임이 없으면 이름으로 대체
            if(succArticle.getUserInfo().getNickname() == null){
                succArticle.getUserInfo().setNickname(succArticle.getUserInfo().getName());
            }
            allSuccArticle.add(succArticle);
        });
        return allSuccArticle;
    }

    // 승계글과 작성자 정보 가져오기
    public SuccArticle getSuccArticleAndWriter(Long articleNo){
        SuccArticle succArticle = new SuccArticle();
        // 승계글 정보 가져오기
        succArticle.setSuccession_article(successionRepository.findByArticleNo(articleNo));
        // 승계글 이미지 가져오기
        List<PhotoFile> photoFiles = fileRepository.findBySuccessionIdAndArticleType(articleNo,"succession");
        List<String> img_list = new ArrayList<>();
        photoFiles.forEach(photoFile -> {
            img_list.add(s3UploadService.getImgUrl(photoFile.getSaveFileName()));
        });
        succArticle.setImg_list(img_list);
        // 작성자 정보 가져오기
        succArticle.setUserInfo(memberRepository.findWriter(succArticle.getSuccession_article().getUserId()));
        // 닉네임이 없으면 이름으로 대체
        if(succArticle.getUserInfo().getNickname() == null){
            succArticle.getUserInfo().setNickname(succArticle.getUserInfo().getName());
        }
        return succArticle;
    }

}
