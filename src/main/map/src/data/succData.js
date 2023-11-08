import kakaoimg_1 from "../image/kakaoimg_1.png";
import kakaoimg_2 from "../image/kakaoimg_2.png";
import kakaoimg_3 from "../image/kakaoimg_3.png";
import kakaoimg_4 from "../image/kakaoimg_4.png";
import sampleImage1 from "../image/sample1.png";
import sampleImage2 from "../image/sample2.png";
import sampleImage3 from "../image/sample3.png";

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
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
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
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
    startDate: "2023년 7월 7일", // 계약기간 시작일
    finishDate: "2024년 1월 6일", // 계약기간 종료일
    livingTime: "2023", // 별점 옆 2023년까지 거주
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
    //필요
    userImage: kakaoimg_1,
  },
  {
    id: 1,
    userId: 2,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 200, // 보증금
    fee: 20, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
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
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_3,
  },
  {
    id: 3,
    userId: 4,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
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
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_4,
  },
  {
    id: 4,
    userId: 5,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
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
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_1,
  },
  {
    id: 5,
    userId: 6,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
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
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    id: 6,
    userId: 7,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
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
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_3,
  },
  {
    id: 7,
    userId: 8,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_4,
  },
  {
    id: 8,
    userId: 9,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_1,
  },
  {
    id: 9,
    userId: 10,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 24, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    id: 10,
    userId: 11,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 42, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_3,
  },
  {
    id: 11,
    userId: 12,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 34, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_4,
  },
  {
    id: 12,
    userId: 13,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "서울 강남구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 27, // 가격
    houseType: "복층형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    rating: 3.7,
    userImage: kakaoimg_1,
  },
  {
    id: 13,
    userId: 14,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 23, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_3,
  },
  {
    id: 15,
    userId: 16,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "지상층", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_4,
  },
  {
    id: 16,
    userId: 17,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_1,
  },
  {
    id: 17,
    userId: 18,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    id: 18,
    userId: 19,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 21, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_3,
  },
  {
    id: 19,
    userId: 20,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 22, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_4,
  },
  {
    id: 20,
    userId: 21,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 32, // 가격
    houseType: "분리형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_1,
  },
  {
    id: 21,
    userId: 22,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    id: 22,
    userId: 23,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_3,
  },
  {
    id: 23,
    userId: 24,
    owner: "아무개",
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    lat: 35.839330830962844,
    lng: 128.75465156206272,
    address: "경기 성남시 분당구", // 리스트에서 보이는 지역
    addressDetail: "(지번) 조영동 278-4",
    deposit: 100, // 보증금
    fee: 18, // 가격
    houseType: "오픈형", // 방 구조
    likedCnt: 1,
    contextTitle: "원룸 승계합니다~", // 리스트에서 보이는 제목
    contentText:
      "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
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
    userImage: kakaoimg_4,
  },
];
