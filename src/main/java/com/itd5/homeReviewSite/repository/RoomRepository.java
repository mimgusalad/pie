package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.RoomServiceCriteria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;

import java.util.List;

public interface RoomRepository extends JpaRepository<RoomServiceCriteria, Long> {
//    하드코딩한거. 쿼리 결과 addressId = 3254
//    @Query(value = "SELECT r.addressId " +
//            "FROM review_article r, keyword k " +
//            "WHERE r.articleNo = k.review_id " +
//            "AND r.deposit >= 0 and r.deposit <= 5000 " +
//            "AND r.fee >= 0 and r.fee <= 5000 " +
//            "AND r.houseType = '오피스텔' " +
//            "AND k.noise >= 0 "+
//            "AND r.address LIKE CONCAT('%', '대구', '%')", nativeQuery = true)
    @Query(value = "SELECT r.addressId " +
            "FROM review_article r, keyword k " +
            "WHERE r.articleNo = k.reviewId " +
            "AND r.deposit >= :minDeposit and r.deposit <= :maxDeposit " +
            "AND r.fee >= :minMonthlyRent and r.fee <= :maxMonthlyRent " +
            "AND r.houseType = :structure " +
            "AND :keyword >= 0 "+ // keyword >= 4 이상으로 해야 되는데 데이터가 없어서 임의로 0 함
            "AND r.address LIKE CONCAT('%', :address, '%')", nativeQuery = true)
    List<Long> getAllRooms(
            @Param("minDeposit") int minDeposit,
            @Param("maxDeposit") int maxDeposit,
            @Param("minMonthlyRent") int minMonthlyRent,
            @Param("maxMonthlyRent") int maxMonthlyRent,
            @Param("structure") String structure,
            @Param("address") String address,
            @Param("keyword") String keyword
    );
}
