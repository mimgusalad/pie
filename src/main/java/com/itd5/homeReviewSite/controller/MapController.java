package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.Service.MapService;
import com.itd5.homeReviewSite.model.Address;
import com.itd5.homeReviewSite.model.Map;
import com.itd5.homeReviewSite.model.Search;
import com.itd5.homeReviewSite.model.review_article;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/map")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class MapController {
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    MapService mapService;
    @Autowired
    public MapController(
            AddressRepository addressRepository,
            ReviewRepository reviewRepository,
            MapService mapService) {
        this.addressRepository = addressRepository;
        this.reviewRepository = reviewRepository;
        this.mapService = mapService;
    }

    @ResponseBody
    @GetMapping("")
    public List<Map> getAllMap(){
        return mapService.getReviewsWithDetailedInformation();
    }

    @ResponseBody
    @GetMapping("distinct")
    public List<Map> getDistinctMap(){
        return mapService.getDistinctAddressReviews();
    }

    @ResponseBody
    @GetMapping("{addressId}")
    public List<Map> getMapByAddressId(@PathVariable Long addressId){
        return mapService.getDetailedReviewByAddressId(addressId);
    }

    @ResponseBody
    @GetMapping("list")
    public List<Address> list() throws IOException, InterruptedException {
        return addressRepository.findAll();
    }

    @ResponseBody
    @GetMapping("detail/{addressId}")
    public List<review_article> getReviewArticle(@PathVariable Long addressId) throws IOException, InterruptedException {
        return reviewRepository.findByAddressId(addressId);
    }

//    @ResponseBody
//    @PostMapping("match")
//    public void match(HttpServletResponse res, @RequestBody Search search) throws IOException {
//        res.sendRedirect("http:localhost:3000/map/searchQuery?"
//                +"firstKeyword="+mapService.korToEng(search.getFirstKeyword())
//                +"&secondKeyword="+mapService.korToEng(search.getSecondKeyword())
//                +"&thirdKeyword="+mapService.korToEng(search.getThirdKeyword()));
//    }
    @ResponseBody
    @PostMapping("match")
    public ResponseEntity<Object> handleReq(@RequestBody Search search) throws IOException {
        String queryString = "firstKeyword="+mapService.korToEng(search.getFirstKeyword())
                +"&secondKeyword="+mapService.korToEng(search.getSecondKeyword())
                +"&thirdKeyword="+mapService.korToEng(search.getThirdKeyword());
        //String redirectUrl = "/map/searchQuery?"+queryString;
        String redirectUrl = "http://localhost:3000/map";
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.add("Access-Control-Allow-Methods", "POST");
        headers.add("Access-Control-Allow-Headers", "Content-Type");
        headers.add("Access-Control-Allow-Credentials", "true");
        return ResponseEntity.ok().headers(headers).build();
    }

    @ResponseBody
    @GetMapping("searchQuery")
    public List<Map> searchQuery(@RequestParam(value = "firstKeyword", required = false) String firstKeyword,
                                 @RequestParam(value = "secondKeyword", required = false) String secondKeyword,
                                 @RequestParam(value = "thirdKeyword", required = false) String thirdKeyword) {
        return mapService.getSearchQuery(firstKeyword, secondKeyword, thirdKeyword);
    }



}
