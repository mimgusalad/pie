package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query(value = "SELECT r.addressId, r.address, r.addressDetail, r.deposit, r.fee, r.houseType, k.* " +
            "FROM review_article r, keyword k " +
            "WHERE r.articleNo = k.review_id " +
            "AND r.deposit BETWEEN(:room.minDeposit, :room.maxDeposit) " +
            "AND r.fee BETWEEN(:room.minMonthlyRent, :room.maxMonthlyRent)" +
            "AND r.houseType = :room.structure " +
            "AND k.keyword >= 4"+
            "AND r.address LIKE CONCAT('%', :room.address, '%')", nativeQuery = true)
    List<Long> getAllRooms(Model room);
}
