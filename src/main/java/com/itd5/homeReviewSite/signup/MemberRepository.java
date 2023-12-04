package com.itd5.homeReviewSite.signup;

import com.itd5.homeReviewSite.model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<SocialAuth, Long> {
    public Optional<SocialAuth> findByProviderId(String providerId);
    public Optional<SocialAuth> findByName(String username);
    public Optional<SocialAuth> findByEmail(String email);
    boolean existsByEmail(String email);
    @Query(value="select new com.itd5.homeReviewSite.model.UserInfo(name, email, nickname, id) from SocialAuth where id = :userId")
    UserInfo findWriter(Long userId);
}
