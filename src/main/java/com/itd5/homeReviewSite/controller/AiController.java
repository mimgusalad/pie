package com.itd5.homeReviewSite.controller;

import com.itd5.homeReviewSite.model.*;
import com.itd5.homeReviewSite.repository.AddressRepository;
import com.itd5.homeReviewSite.repository.ReviewRepository;
import com.itd5.homeReviewSite.repository.RoomRepository;
import com.itd5.homeReviewSite.repository.SuccessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("ai")
public class AiController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    SuccessionRepository successionRepository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    RoomRepository roomRepository;
    List<Long> list;
    @GetMapping("list")
    public String list(Model model, RoomServiceCriteria roomInput){
        model.addAttribute("searchCheck", null);
        model.addAttribute("roomInput", roomInput);
        return "ai/list";
    }
    @PostMapping("list")
    //ai 화면에서 검색을 했을 시 처리하는 함수
    public String processSearch(Model model, RoomServiceCriteria roomInput){
        System.out.println(model);
        System.out.println(roomInput);
        String keyword = roomInput.getKeyword();
        if (keyword.equals("소음")) roomInput.setKeyword("k.noise");
        if (keyword.equals("옵션 상태")) roomInput.setKeyword("k.optionQuality");
        if (keyword.equals("치안")) roomInput.setKeyword("k.safety");
        if (keyword.equals("일조량")) roomInput.setKeyword("k.sunlight");
        if (keyword.equals("벌레")) roomInput.setKeyword("k.insect");
        if (keyword.equals("냄새")) roomInput.setKeyword("k.smell");
        if (keyword.equals("쓰레기 처리")) roomInput.setKeyword("k.trash");
        if (keyword.equals("편의시설")) roomInput.setKeyword("k.convenience");
        roomInput.setAddress("대구");
        String priceOption = roomInput.getPriceOption();
        String modifiedPriceOption = priceOption.trim().replace(",", "");
        roomInput.setPriceOption(modifiedPriceOption);
        roomInput.setMaxDeposit(5000);
        roomInput.setMaxMonthlyRent(5000);

        list = roomRepository.getAllRooms(
                roomInput.getMinDeposit(),
                roomInput.getMaxDeposit(),
                roomInput.getMinMonthlyRent(),
                roomInput.getMaxMonthlyRent(),
                roomInput.getStructure(),
                roomInput.getAddress(),
                roomInput.getKeyword()
        );

        System.out.println(list);
        List<review_article> recommendReviewList = reviewRepository.getAllByAddressIdIn(list);
        List<succession_article> recommendSuccessionList = successionRepository.getAllByAddressIdIn(list);

        model.addAttribute("recommendReviewPreList",recommendReviewList);
        model.addAttribute("searchCheck", "check");
        model.addAttribute("recommendSuccessionList", recommendSuccessionList);
        model.addAttribute("roomInput", roomInput);

        return "ai/list";
    }
    @GetMapping("homeDetail")
    public String homeDetail(Model model, @RequestParam(required = false)Long addressId){
        Address address = addressRepository.findByAddressId(addressId);
        List<review_article> reviewList = reviewRepository.findTop4ByAddressId(addressId);

        model.addAttribute("homeInfo", address);
        model.addAttribute("home_review_list", reviewList);

        return "ai/recommendHomeDetail";
    }

    @GetMapping("reviewMore")
    public String moreReview(Model model){
        List<review_article> reviewList = reviewRepository.getAllByAddressIdIn(list);
        model.addAttribute("reviewList", reviewList);
        return "ai/recommendReviewMore";
    }


    // 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
    private String showMessageAndRedirect(final Message params, Model model) {
        model.addAttribute("params", params);
        return "messageRedirect";
    }

}
