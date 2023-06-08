package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.PhotoFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<PhotoFile, Long> {
    PhotoFile findByFileName(String fileName);
}
