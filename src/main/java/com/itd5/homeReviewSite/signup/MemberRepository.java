package com.itd5.homeReviewSite.signup;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<SocialAuth, Long> {
    public Optional<SocialAuth> findByProviderId(String providerId);
    public Optional<SocialAuth> findByName(String username);
    public Optional<SocialAuth> findByEmail(String email);
    boolean existsByEmail(String email);
}
