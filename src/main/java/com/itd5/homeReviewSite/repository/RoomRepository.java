package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.RoomServiceCriteria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;

import java.util.List;

public interface RoomRepository extends JpaRepository<RoomServiceCriteria, Long> {
    @Query(value = "SELECT r.addressId, r.address, r.addressDetail, r.deposit, r.fee, r.houseType, k.* " +
            "FROM review_article r, keyword k " +
            "WHERE r.articleNo = k.review_id " +
            "AND r.deposit BETWEEN(:minDeposit, :maxDeposit) " +
            "AND r.fee BETWEEN(:minMonthlyRent, :maxMonthlyRent)" +
            "AND r.houseType = :structure " +
            "AND k.keyword >= 4"+
            "AND r.address LIKE CONCAT('%', :address, '%')", nativeQuery = true)
    List<Long> getAllRooms(
            @Param("minDeposit") int minDeposit,
            @Param("maxDeposit") int maxDeposit,
            @Param("minMonthlyRent") int minMonthlyRent,
            @Param("maxMonthlyRent") int maxMonthlyRent,
            @Param("structure") String structure,
            @Param("address") String address
    );
}
