package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.PhotoFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FileRepository extends JpaRepository<PhotoFile, Long> {
    List<PhotoFile> findByReviewIdAndArticleType(Long reviewId, String articleType);
    List<PhotoFile> findBySuccessionIdAndArticleType(Long successionId, String articleType);

    // 이미지 preview를 위한 join sql
    @Query(value = "select PF.fileId, PF.articleType, PF.reviewId, PF.successionId, PF.saveFileName, PF.oriFileName "+
            "from review_article as RA left join PhotoFile as PF " +
            "on RA.articleNo = PF.reviewId " +
            "where RA.userId = :userId "+
            "group by RA.articleNo", nativeQuery = true)
    List<PhotoFile> findPhotoFile(@Param("userId") Long currentUserId);

}

