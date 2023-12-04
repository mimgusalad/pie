package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {

    List<Address> findAll();
    Address findByLatitudeAndLongitude(Double latitude, Double longitude);
    Address findByAddressId(Long addressId);
    Address findByRoadAddress(String roadAddress);
}
