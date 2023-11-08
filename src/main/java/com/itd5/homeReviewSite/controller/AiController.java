//package com.itd5.homeReviewSite.controller;
//
//import com.itd5.homeReviewSite.model.Address;
//import com.itd5.homeReviewSite.model.Message;
//import com.itd5.homeReviewSite.model.review_article;
//import com.itd5.homeReviewSite.model.succession_article;
//import com.itd5.homeReviewSite.repository.AddressRepository;
//import com.itd5.homeReviewSite.repository.ReviewRepository;
//import com.itd5.homeReviewSite.repository.RoomRepository;
//import com.itd5.homeReviewSite.repository.SuccessionRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import java.util.List;
//
//@Controller
//@RequestMapping("ai")
//public class AiController {
//    @Autowired
//    ReviewRepository reviewRepository;
//    @Autowired
//    SuccessionRepository successionRepository;
//    @Autowired
//    AddressRepository addressRepository;
//    @Autowired
//    RoomRepository roomRepository;
//    List<Long> list;
//    @GetMapping("list")
//    public String list(Model model) {
//        model.addAttribute("searchCheck", null);
//        return "ai/list";
//    }
//
//    @PostMapping("list")
//    //ai 화면에서 검색을 했을 시 처리하는 함수
//    public String processSearch(Model model){
//        list = roomRepository.getAllRooms(model);
//        List<review_article> recommendReviewList = reviewRepository.getAllByAddressIdIn(list);
//        List<succession_article> recommendSuccessionList = successionRepository.getAllByAddressIdIn(list);
//
//        model.addAttribute("recommendReviewPreList",recommendReviewList);
//        model.addAttribute("searchCheck", "check");
//        model.addAttribute("recommendSuccessionList", recommendSuccessionList);
//
//        return "ai/list";
//    }
//    @GetMapping("homeDetail")
//    public String homeDetail(Model model, @RequestParam(required = false)Long addressId){
//        Address address = addressRepository.findByAddressId(addressId);
//        List<review_article> reviewList = reviewRepository.findTop4ByAddressId(addressId);
//
//        model.addAttribute("homeInfo", address);
//        model.addAttribute("home_review_list", reviewList);
//
//        return "ai/recommendHomeDetail";
//    }
//
//    @GetMapping("reviewMore")
//    public String moreReview(Model model){
//        List<review_article> reviewList = reviewRepository.getAllByAddressIdIn(list);
//        model.addAttribute("reviewList", reviewList);
//        return "ai/recommendReviewMore";
//    }
//
//
//    // 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
//    private String showMessageAndRedirect(final Message params, Model model) {
//        model.addAttribute("params", params);
//        return "messageRedirect";
//    }
//
//}
