package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Nickname;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface NicknameRepository extends JpaRepository<Nickname, Long> {
    @Query(value = "SELECT * FROM Nickname WHERE taken = 0 ORDER BY RAND() LIMIT 1;", nativeQuery = true)
    Nickname getRandomNickname();

    @Modifying
    @Query("UPDATE Nickname SET taken = 1 WHERE nickname = :nickname")
    void setNicknameTaken(@Param("nickname") String nickname);
}
