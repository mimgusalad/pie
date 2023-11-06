import sampleImage1 from "../image/sample1.png";
import sampleImage2 from "../image/sample2.png";
import sampleImage3 from "../image/sample3.png";
import userImage from "../image/userImageSample.jpg";
import succ_1 from "../image/succ_1.png";
import succ_2 from "../image/succ_2.png";
import succ_3 from "../image/succ_3.png";
import roomdetail_1 from "../image/roomdetail_1.png";
import roomdetail_2 from "../image/roomdetail_2.png";
import roomdetail_3 from "../image/roomdetail_3.png";
import room_1 from "../image/room_1.png";
import room_2 from "../image/room_2.png";
import room_3 from "../image/room_3.png";
import room_4 from "../image/room_4.png";

export const Data = [
  {
    id: 0,
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    mainimg: room_1,
    address: "경북 경산시 대학로 48길 24-3",
    addressDetail: "(지번) 조영동 213-7",
    deposit: 100, // 보증금
    price: 26, // 가격
    houseType: "오픈형",
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023-10-05 18:40:23", // 작성날짜
    tags: [
      {
        label: "소음", // keyword1
        key: "sound",
      },
      {
        label: "냄새", // keyord2
        key: "smell",
      },
      {
        label: "편의시설", // keyword3
        key: "convenience",
      },
    ],
    rating: 3.7,
    // 여기서 부터 DB에 필요한 정보
    reviewCount: 4,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
    // 여기까지
  },
  {
    id: 1,
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    mainimg: room_2,
    address: "경북 경산시 대학로 61길 12-3",
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    price: 18, // 가격
    houseType: "오픈형",
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58", // 작성날짜
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.7,
    // 여기서 부터 DB에 필요한 정보
    reviewCount: 4,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
    // 여기까지
  },
  {
    id: 2,
    lat: 35.8385346227947,
    lng: 128.75462516976845,
    mainimg: room_3,
    address: "경북 경산시 조영동 581-8",
    addressDetail: "(지번) 청운로37",
    deposit: 300,
    price: 37,
    houseType: "분리형",
    reviewCount: 4,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "치안",
        key: "security",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
    ],
    rating: 4.1,
    // 여기서 부터 DB에 필요한 정보
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
    // 여기까지
  },
  {
    id: 3,
    lat: 35.83877226487758,
    lng: 128.7543957881146,
    mainimg: room_4,
    address: "경북 경산시 대학로 61길 11",
    addressDetail: "(지번) 조영동 581-5",
    deposit: 100,
    price: 24,
    houseType: "복층형",
    reviewCount: 3,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 3.4,
    // 여기서 부터 DB에 필요한 정보
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
    // 여기까지
  },
  {
    id: 4,
    lat: 35.840142938647,
    lng: 128.753928516271,
    mainimg: room_1,
    address: "경북 경산시 대학로61길 28-8",
    addressDetail: "(지번) 조영동 576-2",
    deposit: 200,
    price: 40,
    houseType: "지상층",
    reviewCount: 3,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 4.5,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 5,
    lat: 35.8413977299625,
    lng: 128.757001279906,
    mainimg: room_2,
    address: "경북 경산시 압량읍 청운1로 74-2",
    addressDetail: "(지번) 압량읍 부적리 483-19",
    deposit: 400,
    price: 41,
    houseType: "반지하",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "치안",
        key: "security",
      },
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.0,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 6,
    lat: 35.83923507309398,
    lng: 128.7525688803007,
    mainimg: room_3,
    address: "경북 경산시 조영동 578-3",
    addressDetail: "(지번) 청운1로 27-9",
    deposit: 500,
    houseType: "옥탑",
    price: 51,
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 4.7,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 7,
    lat: 35.83925843139003,
    lng: 128.75096690986445,
    mainimg: room_4,
    address: "경북 경산시 대동 8",
    addressDetail: "(지번) 청운2로 13",
    deposit: 300,
    price: 40,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "소음",
        key: "sound",
      },
    ],
    rating: 4.1,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 8,
    lat: 35.8396532943038,
    lng: 128.750806819053,
    mainimg: room_1,
    address: "경북 경산시 청운2로 15-5",
    addressDetail: "(지번) 대동 2-1",
    deposit: 100,
    price: 27,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "치안",
        key: "security",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.2,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },

  // 여기부터 새로운 데이터
  {
    id: 9,
    lat: 35.8385390712315,
    lng: 128.752764721136,
    mainimg: room_2,
    address: "경북 경산시 대학로59길 17",
    addressDetail: "(지번) 대동 29-8",
    deposit: 200,
    price: 30,
    houseType: "복층형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 3.7,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 10,
    lat: 35.8406097633223,
    lng: 128.756929005376,
    mainimg: room_3,
    address: "경북 경산시 청운로 69-3",
    addressDetail: "(지번) 조영동 239-38",
    deposit: 200,
    price: 33,
    houseType: "지상층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "치안",
        key: "security",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
    ],
    rating: 3.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 11,
    lat: 35.8404871495344,
    lng: 128.757475336698,
    mainimg: room_4,
    address: "경북 경산시 압량읍 대학로69길 5",
    addressDetail: "(지번) 압량읍 부적리 486-14",
    deposit: 200,
    price: 23,
    houseType: "반지하",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 3.5,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
      {
        tag: "벌레",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 12,
    lat: 35.8421390755284,
    lng: 128.757913529602,
    mainimg: room_1,
    address: "경북 경산시 압량읍 청운1로 84",
    addressDetail: "(지번) 압량읍 부적리 386-3",
    deposit: 400,
    price: 50,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "소음",
        key: "sound",
      },
    ],
    rating: 4.2,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 13,
    lat: 35.8408438733379,
    lng: 128.757458970895,
    mainimg: room_2,
    address: "경북 경산시 압량읍 대학로69길 10",
    addressDetail: "(지번) 압량읍 부적리 486-5",
    deposit: 150,
    price: 19,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "쓰레기 처리",
        key: "garbage",
      },
    ],
    rating: 2.7,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 14,
    lat: 35.8415357163308,
    lng: 128.753805020298,
    mainimg: room_3,
    address: "경북 경산시 청운2로 49",
    addressDetail: "(지번) 조영동 563-7",
    deposit: 150,
    price: 25,
    houseType: "지상층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "치안",
        key: "security",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.4,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 15,
    lat: 35.8424730756769,
    lng: 128.7544584906123,
    mainimg: room_4,
    address: "경북 경산시 청운2로11길 6",
    addressDetail: "(지번) 조영동 566-8",
    deposit: 200,
    price: 30,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "치안",
        key: "security",
      },
      {
        label: "옵션상태",
        key: "options",
      },
    ],
    rating: 3.0,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 16,
    lat: 35.842036673838,
    lng: 128.751833240042,
    mainimg: room_1,
    address: "경북 경산시 둥지로 55",
    addressDetail: "(지번) 임당동 647-6",
    deposit: 200,
    price: 31,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 2.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 17,
    lat: 35.8396532943038,
    lng: 128.750806819053,
    mainimg: room_2,
    address: "경북 경산시 청운2로 15-5",
    addressDetail: "(지번) 대동 2-1",
    deposit: 100,
    price: 27,
    houseType: "지상층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "치안",
        key: "security",
      },
    ],
    rating: 3.2,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 18,
    lat: 35.8431000555209,
    lng: 128.752805550074,
    mainimg: room_3,
    address: "경북 경산시 청운2로 11길 20",
    addressDetail: "(지번) 임당동 649-9",
    deposit: 300,
    price: 31,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "치안",
        key: "security",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 19,
    lat: 35.8435034266188,
    lng: 128.754963951201,
    mainimg: room_4,
    address: "경북 경산시 청운2로9길 26",
    addressDetail: "(지번) 조영동 568-1",
    deposit: 200,
    price: 26,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 3.4,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 20,
    lat: 35.8384081504613,
    lng: 128.75723624076,
    mainimg: room_1,
    address: "경북 경산시 조영길 7-2",
    addressDetail: "(지번) 조영동 346",
    deposit: 200,
    price: 30,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 3.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 21,
    lat: 35.8375504650421,
    lng: 128.756422514833,
    mainimg: room_2,
    address: "경북 경산시 대학로 312-10",
    addressDetail: "(지번) 조영동 323-1",
    deposit: 300,
    price: 33,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 4.2,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 22,
    lat: 35.8386989941918,
    lng: 128.757590043484,
    mainimg: room_3,
    address: "경북 경산시 조영1길 10",
    addressDetail: "(지번) 조영동 349-1",
    deposit: 150,
    price: 24,
    houseType: "옥탑",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "치안",
        key: "security",
      },
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.1,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 23,
    lat: 35.838752552344,
    lng: 128.757994388738,
    mainimg: room_4,
    address: "경북 경산시 조영1길 14",
    addressDetail: "(지번) 조영동 349-5",
    deposit: 200,
    price: 26,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "소음",
        key: "sound",
      },
    ],
    rating: 3.7,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 24,
    lat: 35.8385219755679,
    lng: 128.758639472469,
    mainimg: room_1,
    address: "경북 경산시 조영1길 16-5",
    addressDetail: "(지번) 조영동 349-5",
    deposit: 300,
    price: 37,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "치안",
        key: "security",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
    ],
    rating: 4.6,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 25,
    lat: 35.8384726220085,
    lng: 128.759240746502,
    mainimg: room_2,
    address: "경북 경산시 조영길 29-2",
    addressDetail: "(지번) 조영동 357-2",
    deposit: 100,
    price: 18,
    houseType: "반지하",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 2.4,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 26,
    lat: 35.8388649897794,
    lng: 128.759971632304,
    mainimg: room_3,
    address: "경북 경산시 압량읍 화랑로59길 29",
    addressDetail: "(지번) 압량읍 부적리 525-30",
    deposit: 100,
    price: 19,
    houseType: "반지하",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 2.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 27,
    lat: 35.8430769842981,
    lng: 128.756526015109,
    mainimg: room_4,
    address: "경북 경산시 압량읍 고분길 38",
    addressDetail: "(지번) 압량읍 부적리 410-3",
    deposit: 300,
    price: 40,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "치안",
        key: "security",
      },
    ],
    rating: 4.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 28,
    lat: 35.8444006234629,
    lng: 128.756909482421,
    mainimg: room_4,
    address: "경북 경산시 압량읍 청운2로17길 4-1",
    addressDetail: "(지번) 압량읍 부적리 339-15",
    deposit: 300,
    price: 40,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 4.5,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 29,
    lat: 35.8445701314675,
    lng: 128.756890533339,
    mainimg: room_1,
    address: "경상북도 경산시 압량읍 청운2로17길 8-4",
    addressDetail: "(지번) 경산시 압량읍 부적리 339-6",
    deposit: 300,
    price: 21,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "치안",
        key: "security",
      },
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 3.5,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 30,
    lat: 35.8447167767007,
    lng: 128.757307255129,
    mainimg: room_2,
    address: "경북 경산시 압량읍 청운2로17길 4-9",
    addressDetail: "(지번) 압량읍 부적리 339-11",
    deposit: 200,
    price: 25,
    houseType: "옥탑",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 3.1,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 31,
    lat: 35.8447167767007,
    lng: 128.757307255129,
    mainimg: room_3,
    address: "경북 경산시 압량읍 청운2로17길 4-9",
    addressDetail: "(지번) 압량읍 부적리 339-11",
    deposit: 200,
    price: 25,
    houseType: "옥탑",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "소음",
        key: "sound",
      },
    ],
    rating: 3.1,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 32,
    lat: 35.8431000555209,
    lng: 128.752805550074,
    mainimg: room_4,
    address: "경북 경산시 청운2로11길 20",
    addressDetail: "(지번) 임당동 649-9",
    deposit: 300,
    price: 30,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "치안",
        key: "security",
      },
    ],
    rating: 3.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 33,
    lat: 35.8437348102846,
    lng: 128.753015304269,
    mainimg: room_1,
    address: "경북 경산시 둥지로10길 18-3",
    addressDetail: "(지번) 조영동 557-4",
    deposit: 300,
    price: 33,
    houseType: "지상층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "옵션상태",
        key: "options",
      },
    ],
    rating: 4.1,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 34,
    lat: 35.8433535761848,
    lng: 128.751771453455,
    mainimg: room_2,
    address: "경북 경산시 둥지로10길 27-4",
    addressDetail: "(지번) 임당동 617",
    deposit: 200,
    price: 27,
    houseType: "분리형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "치안",
        key: "security",
      },
      {
        label: "벌레",
        key: "bug",
      },
    ],
    rating: 3.9,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 35,
    lat: 35.8433256535941,
    lng: 128.751288519938,
    mainimg: room_3,
    address: "경북 경산시 청운2로11길 36",
    addressDetail: "(지번) 임당동 605",
    deposit: 100,
    price: 17,
    houseType: "반지하",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "옵션상태",
        key: "options",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "쓰레기처리",
        key: "garbage",
      },
    ],
    rating: 3.0,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 36,
    lat: 35.8439000941965,
    lng: 128.751451006057,
    mainimg: room_4,
    address: "경북 경산시 궁당로12길 14",
    addressDetail: "(지번) 임당동 206-8",
    deposit: 200,
    price: 24,
    houseType: "오픈형",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "치안",
        key: "security",
      },
    ],
    rating: 3.4,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 37,
    lat: 35.8437681170534,
    lng: 128.75065091092,
    mainimg: room_1,
    address: "경상북도 경산시 궁당로 54-4",
    addressDetail: "(지번) 경산시 임당동 599-8",
    deposit: 200,
    price: 28,
    houseType: "옥탑",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "소음",
        key: "sound",
      },
    ],
    rating: 2.9,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 38,
    lat: 35.8441741738335,
    lng: 128.750396650114,
    mainimg: room_2,
    address: "경북 경산시 궁당로 56",
    addressDetail: "(지번) 임당동 206-1",
    deposit: 300,
    price: 41,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "편의시설",
        key: "convenience",
      },
    ],
    rating: 4.2,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 39,
    lat: 35.8427709231761,
    lng: 128.75130078079,
    mainimg: room_3,
    address: "경북 경산시 청운2로11길 35-5",
    addressDetail: "(지번) 임당동 206-1",
    deposit: 300,
    price: 45,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "냄새",
        key: "smell",
      },
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "옵션상태",
        key: "options",
      },
    ],
    rating: 4.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 40,
    lat: 35.8430511806584,
    lng: 128.750329469776,
    mainimg: room_4,
    address: "경북 경산시 궁당로 44-5",
    addressDetail: "(지번) 임당동 568-3",
    deposit: 500,
    price: 51,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "편의시설",
        key: "convenience",
      },
      {
        label: "쓰레기처리",
        key: "garbage",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 4.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 41,
    lat: 35.8434867411195,
    lng: 128.749825179523,
    mainimg: room_1,
    address: "경북 경산시 궁당로 49",
    addressDetail: "(지번) 임당동 563-8",
    deposit: 300,
    price: 32,
    houseType: "오픈형",
    reviewCount: 1,
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "벌레",
        key: "bug",
      },
      {
        label: "치안",
        key: "security",
      },
    ],
    rating: 3.8,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
  {
    id: 42,
    lat: 35.8431676024857,
    lng: 128.748665162932,
    mainimg: room_2,
    address: "경북 경산시 둥지로 86",
    addressDetail: "(지번) 임당동 571-9",
    deposit: 300,
    price: 40,
    houseType: "복층",
    reviewCount: 1,
    likedCnt: 1,
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    livingYear: "2023",
    payment: "월세",
    regdate: "2023.05.29 11:58",
    tags: [
      {
        label: "소음",
        key: "sound",
      },
      {
        label: "일조량",
        key: "light_insulation",
      },
      {
        label: "냄새",
        key: "smell",
      },
    ],
    rating: 4.0,
    reviews: [
      {
        id: 0,
        owner: "조영동 주민",
        userImage: userImage,
        grade: 4.1,
        reviewComment:
          "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 1,
        owner: "빈빈",
        userImage: userImage,
        grade: 4.2,
        reviewComment:
          "지하철역이 가깝고 조용해서 좋습니다~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 편의점이 가깝고 지하철역이 가까워서 좋아요~",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 2,
        owner: "영남대 학생",
        userImage: userImage,
        grade: 3.8,
        reviewComment:
          "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다. 편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
      {
        id: 3,
        owner: "취준생",
        userImage: userImage,
        grade: 3.9,
        reviewComment:
          "편의점이 가깝고 지하철역이 가까워서 좋아요~ 방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ 근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        view: 10,
      },
    ],
    similarItems: [
      {
        image: succ_1,
        address: "경북 경산시 조영동 278-2",
        text: "깨끗하고 좋아요.",
      },
      {
        image: succ_2,
        address: "경북 경산시 조영동 215-8",
        text: "편의시설이 많아요.",
      },
      {
        image: succ_3,
        address: "경북 경산시 조영동 215-8",
        text: "주변이 쾌적해요.",
      },
    ],
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    management_fee: "5만원",
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
  },
];
