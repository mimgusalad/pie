import kakaoimg_1 from "../image/kakaoimg_1.png";
import kakaoimg_2 from "../image/kakaoimg_2.png";
import kakaoimg_3 from "../image/kakaoimg_3.png";
import kakaoimg_4 from "../image/kakaoimg_4.png";
import userImage from "../image/userImageSample.jpg";

import roomdetail_1 from "../image/roomdetail_1.png";
import roomdetail_2 from "../image/roomdetail_2.png";
import roomdetail_3 from "../image/roomdetail_3.png";

import succdetail_1 from "../image/succdetail_1.png";
import succdetail_2 from "../image/succdetail_2.png";
import succdetail_3 from "../image/succdetail_3.png";
import succdetail_4 from "../image/succdetail_4.png";
import succdetail_5 from "../image/succdetail_5.png";
import succdetail_6 from "../image/succdetail_6.png";
import succdetail_7 from "../image/succdetail_7.png";
import succdetail_8 from "../image/succdetail_8.png";
import succdetail_9 from "../image/succdetail_9.png";

// 승계방 페이지 빨간줄에 해당하는 드롭다운에 들어갈 항목
// 시/도 : 서울, 경기, 경북
// 시/군/구 : 시/도에서 '서울'을 선택하면 '강남구' 가 나타나야 함
//            시/도에서 '경기'를 선택하면 '성남시 분당구' 가 나타나야 함
//            시/도에서 '경북'을 선택하면 '경산시'가 나타나야 함

// 구조 : 전체, 오픈형, 분리형, 복층형, 지상층, 반지하, 옥탑

// 가격 : 10~20, 20~30, 30~40, 40~50

// 지역, 구조, 가격을 각각 선택하면 해당 지역, 구조, 가격에 해당하는 승계방 정보만 승계방 페이지에 나타나야 함.
export const succData = [
  {
    id: 0,
    userId: 1,
    owner: "취준생",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경북 경산시", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다! 지하철역이 가깝고 조용해서 좋습니다~ ",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingTime: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-03-09", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    //필요
    userImage: kakaoimg_1,
  },
  {
    id: 1,
    userId: 2,
    owner: "빅파이",
    images: [
      {
        image: succdetail_1,
      },
      {
        image: succdetail_2,
      },
      {
        image: succdetail_3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 200, // 보증금
    fee: 20, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "좋은 방 승계해요~", // 리스트에서 보이는 제목
    contentText:
      "편의점이 가깝고 지하철역이 가까워서 좋아요~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-05-29", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_2,
  },
  {
    id: 2,
    userId: 3,
    owner: "칙촉",
    images: [
      {
        image: succdetail_4,
      },
      {
        image: succdetail_5,
      },
      {
        image: succdetail_6,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경북 경산시", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 31, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "깨끗하게 쓴 방 승계할 분!", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-07-11", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
  {
    id: 3,
    userId: 4,
    owner: "빼빼로",
    images: [
      {
        image: succdetail_7,
      },
      {
        image: succdetail_8,
      },
      {
        image: succdetail_9,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경북 경산시", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 200, // 보증금
    fee: 41, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "사용감 없는 깨끗한 방입니다!", // 리스트에서 보이는 제목
    contentText:
      "지하철역이 가깝고 조용해서 좋습니다~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-02-29", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_4,
  },
  {
    id: 4,
    userId: 5,
    owner: "오예스",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_1,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경북 경산시", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 24, // 가격
    houseType: "지상층", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-08-12", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_1,
  },
  {
    id: 5,
    userId: 6,
    owner: "자가비",
    images: [
      {
        image: succdetail_2,
      },
      {
        image: succdetail_1,
      },
      {
        image: succdetail_3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경북 경산시", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 19, // 가격
    houseType: "옥탑", // 방 구조
    likedCnt: 1,
    contextTitle: "위치 좋은 방 승계해요~", // 리스트에서 보이는 제목
    contentText:
      "편의점이 가깝고 지하철역이 가까워서 좋아요~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-12-25", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_2,
  },
  {
    id: 6,
    userId: 7,
    owner: "새우깡",
    images: [
      {
        image: succdetail_5,
      },
      {
        image: succdetail_4,
      },
      {
        image: succdetail_6,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경북 경산시", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 33, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "지하철 역 10분거리 방입니다!", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-01-07", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
  {
    id: 7,
    userId: 8,
    owner: "눈을감자",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "상태 좋은 방입니다", // 리스트에서 보이는 제목
    contentText:
      "지하철역이 가깝고 조용해서 좋습니다~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주 // PeriodYear
    payType: "월세",
    regdate: "2023-02-21", // 등록일
    management_fee: 5, // 관리비
    view : 12, // viewCnt
    options: [ // optionQuality
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"], //successionQuality
    grade: 3.7,
    userImage: kakaoimg_4,
  },
  {
    id: 8,
    userId: 9,
    owner: "초코파이",
    images: [
      {
        image: succdetail_8,
      },
      {
        image: succdetail_7,
      },
      {
        image: succdetail_9,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "방 넓고 좋습니다!", // 리스트에서 보이는 제목
    contentText:
      "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-04-11", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_1,
  },
  {
    id: 9,
    userId: 10,
    owner: "몽쉘",
    images: [
      {
        image: succdetail_3,
      },
      {
        image: succdetail_1,
      },
      {
        image: succdetail_2,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 100, // 보증금
    fee: 24, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "편의점 위 승계방 넘겨요~", // 리스트에서 보이는 제목
    contentText:
      "편의점이 가깝고 지하철역이 가까워서 좋아요~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-03-19", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_2,
  },
  {
    id: 10,
    userId: 11,
    owner: "카스타드",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_1,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 100, // 보증금
    fee: 42, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "넓은 집 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-01-11", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
  {
    id: 11,
    userId: 12,
    owner: "요맘때",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 100, // 보증금
    fee: 34, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "학교 10분거리 방 넘겨요~", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-05-19", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_4,
  },
  {
    id: 12,
    userId: 13,
    owner: "월드콘",
    images: [
      {
        image: succdetail_6,
      },
      {
        image: succdetail_5,
      },
      {
        image: succdetail_4,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 강남구 278-4",
    deposit: 100, // 보증금
    fee: 27, // 가격
    houseType: "복층형", // 방 구조
    likedCnt: 1,
    contextTitle: "리모델링 신축입니다", // 리스트에서 보이는 제목
    contentText:
      "지하철역이 가깝고 조용해서 좋습니다~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-08-11", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    rating: 3.7,
    userImage: kakaoimg_1,
  },
  {
    id: 13,
    userId: 14,
    owner: "바밤바",
    images: [
      {
        image: succdetail_9,
      },
      {
        image: succdetail_8,
      },
      {
        image: succdetail_7,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "판교역 5분거리 방입니다!", // 리스트에서 보이는 제목
    contentText:
      "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-05-29", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_2,
  },
  {
    id: 14,
    userId: 15,
    owner: "비비빅",
    images: [
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
      {
        image: roomdetail_1,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 23, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "깨끗하고 조용한 원룸입니다", // 리스트에서 보이는 제목
    contentText:
      "편의점이 가깝고 지하철역이 가까워서 좋아요~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-05-07", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
  {
    id: 15,
    userId: 16,
    owner: "누가바",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "지상층", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 싸게 승계해요~", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-06-02", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_4,
  },
  {
    id: 16,
    userId: 17,
    owner: "스크류바",
    images: [
      {
        image: succdetail_1,
      },
      {
        image: succdetail_3,
      },
      {
        image: succdetail_2,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "월세 지원해드립니다~", // 리스트에서 보이는 제목
    contentText:
      "지하철역이 가깝고 조용해서 좋습니다~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-11-18", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_1,
  },
  {
    id: 17,
    userId: 18,
    owner: "오미자",
    images: [
      {
        image: succdetail_4,
      },
      {
        image: succdetail_6,
      },
      {
        image: succdetail_5,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "깨끗하게 쓰실 분 구해요!", // 리스트에서 보이는 제목
    contentText:
      "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-06-16", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_2,
  },
  {
    id: 18,
    userId: 19,
    owner: "자갈치",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 21, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "주변에 놀거리 많은 방입니다!", // 리스트에서 보이는 제목
    contentText:
      "편의점이 가깝고 지하철역이 가까워서 좋아요~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-02-10", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
  {
    id: 19,
    userId: 20,
    owner: "뽕잎",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 22, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "역이랑 가까운 방 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-07-17", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_4,
  },
  {
    id: 20,
    userId: 21,
    owner: "오땅",
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
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "지하철역이 가깝고 조용해서 좋습니다~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-03-08", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_1,
  },
  {
    id: 21,
    userId: 22,
    owner: "신라면",
    images: [
      {
        image: succdetail_7,
      },
      {
        image: succdetail_8,
      },
      {
        image: succdetail_9,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "조용한 신축 원룸입니다!", // 리스트에서 보이는 제목
    contentText:
      "근처에 공원이 있어서 산책하기 좋습니다. 주변에 쓰레기가 조금 있습니다.",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-01-22", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_2,
  },
  {
    id: 22,
    userId: 23,
    owner: "짜파게티",
    images: [
      {
        image: succdetail_1,
      },
      {
        image: succdetail_2,
      },
      {
        image: succdetail_3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "깨끗한 방 승계해요~", // 리스트에서 보이는 제목
    contentText:
      "편의점이 가깝고 지하철역이 가까워서 좋아요~",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-04-12", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
  {
    id: 23,
    userId: 24,
    owner: "불닭",
    images: [
      {
        image: succdetail_4,
      },
      {
        image: succdetail_5,
      },
      {
        image: succdetail_6,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 분당구 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "사용감 없는 방 승계해요!", // 리스트에서 보이는 제목
    contentText:
      "방이 깨끗하고 주변에 편의시설이 많아서 좋습니다!",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingYear: "2023", // 별점 옆 2023년까지 거주
    payType: "월세",
    regdate: "2023-06-29", // 등록일
    management_fee: 5, // 관리비
    view : 12,
    options: [
      "싱크대",
      "에어컨",
      "신발장",
      "세탁기",
      "냉장고",
      "가스레인지",
      "옷장",
      "침대",
      "책장",
    ],
    sucProduct: ["책상", "의자", "전신거울", "탁자", "행거", "매트리스"],
    grade: 3.7,
    userImage: kakaoimg_3,
  },
];
