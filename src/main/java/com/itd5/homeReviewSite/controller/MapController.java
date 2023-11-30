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
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

@Controller
@RequestMapping("/map")
@RequiredArgsConstructor
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

    @ResponseBody
    @PostMapping("match")
    public void match(HttpServletResponse res, @RequestParam Search search) throws IOException {
        res.sendRedirect("/map/searchQuery?addressKeyword="+search.getAddressKeyword()
                +"&firstKeyword="+search.getFirstKeyword()
                +"&secondKeyword="+search.getSecondKeyword()
                +"&thirdKeyword="+search.getThirdKeyword());
    }

    @ResponseBody
    @GetMapping("searchQuery")
    public List<Map> searchQuery(@RequestParam(value = "addressKeyword", required = false) String addressKeyword,
                                 @RequestParam(value = "firstKeyword", required = false) String firstKeyword,
                                 @RequestParam(value = "secondKeyword", required = false) String secondKeyword,
                                 @RequestParam(value = "thirdKeyword", required = false) String thirdKeyword,
                                 Model model) {
        return mapService.getSearchQuery(addressKeyword, firstKeyword, secondKeyword, thirdKeyword);
    }



}
