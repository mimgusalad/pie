package com.itd5.homeReviewSite.repository;

import com.itd5.homeReviewSite.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {

    Address findByLatitudeAndLongitude(Double latitude, Double longitude);
    Address findByAddressId(Long addressId);
}
