// 이전 버전의 RoomList.jsx 파일입니다.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./RoomList.css";
import Separator from "./components/Separator";
import ToggleBtn_1 from "./components/ToggleBtnFilled/ToggleBtn_1";
import ToggleBtn_2 from "./components/ToggleBtnFilled/ToggleBtn_2";
import ToggleBtn from "./components/ToggleBtnFilled/ToggleBtn";
import RoomListCard from "./components/RoomListCard/RoomListCard";
import RoomListCard2 from "./components/RoomListCard/RoomListCard2";
import { succData } from "./data/succData";
import BigToggleBtn from "./components/ToggleBtnFilled/BigToggleBtn";

const mainMenus = [
  {
    label: "지도",
    path: "",
  },
  {
    label: "AI 추천",
    path: "",
  },
  {
    label: "승계방",
    path: "",
  },
  {
    label: "혜택",
    path: "",
  },
];

// 승계 DB 에 추가 필요
const cityItems = [
  {
    id: 0,
    state: "서울",
    city: ["강남구", "강동구", "강북구", "강서구", "관악구", "구로구", "금천구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구",]
  },
  {
    id: 1,
    state: "경기",
    city: ["수원시", "성남시 분당구", "용인시", "부천시", "안산시", "고양시", "과천시", "광명시", "구리시", "군포시",],
  },
  {
    id: 2,
    state: "대구",
    city: ["중구", "동구", "서구", "남구", "북구", "달성군", "수성수", "달서구",],
  },
  {
    id: 3,
    state: "경북",
    city: ["경산시", "경주시", "고령군", "구미시", "군위군", "김천시", "문경시", "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시",],
  },
  {
    id: 4,
    state: "인천",
    city: ["강화군", "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "웅진군", "중구"],
  },
  {
    id: 5,
    state: "강원",
    city: ["강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군", "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시",],
  },
  {
    id: 6,
    state: "충남",
    city: ["계룡시", "공주시", "금산군", "논산시", "당진시", "보령시", "부여군", "서산시", "서천군", "아산시", "연기군", "예산군", "천안시", "청양군",],
  },
  {
    id: 7,
    state: "대전",
    city: ["대덕구", "동구", "서구", "유성구", "중구"],
  },
  {
    id: 8,
    state: "충북",
    city: ["괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "증평군", "진천군", "청주시", "충주시"],
  },
  {
    id: 9,
    state: "세종",
    city: ["전체"],
  },
  {
    id: 10,
    state: "부산",
    city: ["강서구", "금정구", "기장군", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "사구", "수영구", "연제구", "영도구",],
  },
  {
    id: 11,
    state: "울산",
    city: ["남구", "동구", "북구", "울주군", "중구"],
  },
  {
    id: 12,
    state: "경남",
    city: ["거제시", "거창군", "고성군", "김해시", "남해군", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "창녕군", "창원시", "통영시",],
  },
  {
    id: 13,
    state: "전남",
    city: ["거제시", "거창군", "고성군", "김해시", "남해군", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "창녕군", "창원시", "통영시",],
  },
  {
    id: 14,
    state: "전국",
    city: ["전체",],
  },
];
const structureList = [
  "전체",
  "오픈형",
  "분리형",
  "복층형",
  "지상층",
  "반지하",
  "옥탑",
];
const priceList = ["0~100", "10~20", "20~30", "30~40", "40~50"];

function ListItem({ item }) {

  return (
      <div className="itemGrid" style={{ fontSize: "14px" }}>
        <div>{item.succession_article.address}</div>
        <div>{item.succession_article.contentTitle}</div>
        <div>
          {item.succession_article.deposit}/{item.succession_article.fee}
        </div>
        <div>
          {item.succession_article.startDate}~{item.succession_article.endDate}
        </div>
        <div>{item.succession_article.regDate}</div>
      </div>
  );
}

const ITEMS_PER_PAGE = 13; // 한 페이지당 게시물 수

export default function RoomList() {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [currentArea, setCurrentArea] = useState("경상북도 경산시"); // 현재 지역
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStructure, setSelectedStructure] = useState("");
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: 1000 });
//  const [filteredData, setFilteredData] = useState(succData);
  const [selectFilter, setSelectFilter] = useState("최신순");

    const [dbData, setdbNewData] = useState([]);

     useEffect(()=>{
  		const fetchData = async() => {
            const res = await axios.get("http://localhost:8080/articles");
            return res.data;
          }

          fetchData().then(res => setdbNewData(res));
     },[])

    const [filteredData, setFilteredData] = useState(dbData);
    console.log(filteredData)


  console.log(selectFilter)

  useEffect(() => {
    if (selectedCity == "전국 전체" && selectedStructure != "" && selectedPrice.min != 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.houseType.includes(selectedStructure) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity == "전국 전체" && selectedStructure == "전체" && selectedPrice.min == 0) {
      const newData = dbData.filter(
          (item) =>
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity == "전국 전체" && selectedStructure == "" && selectedPrice.min == 0) {
      setFilteredData(dbData);
    }
    else if (selectedCity == "전국 전체" && selectedStructure != "" && selectedPrice.min == 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.houseType.includes(selectedStructure) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity != "" && selectedStructure == "전체" && selectedPrice.min == 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.address.includes(selectedCity) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity != "" && selectedStructure == "전체" && selectedPrice.min != 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.address.includes(selectedCity) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity != "" && selectedStructure != "" && selectedPrice.min != 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.address.includes(selectedCity) &&
              item.succession_article.houseType.includes(selectedStructure) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity != "" && selectedStructure == "" && selectedPrice.min == 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.address.includes(selectedCity) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }
    else if (selectedCity != "" && selectedStructure != "" && selectedPrice.min == 0) {
      const newData = dbData.filter(
          (item) =>
              item.succession_article.address.includes(selectedCity) &&
              item.succession_article.houseType.includes(selectedStructure) &&
              selectedPrice.min <= item.succession_article.fee &&
              item.succession_article.fee <= selectedPrice.max
      );
      setFilteredData(newData);
    }

  }, [selectedCity, selectedStructure, selectedPrice]);

  // 현재 페이지에 따라 게시물을 필터링
  const currentData = filteredData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  // 페이지네이션 컴포넌트
  const Pagination = () => {
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const maxVisiblePages = Math.min(5, totalPages); // 최대 페이지 수와 5 중 작은 값을 선택

    let startPage = currentPage - Math.floor(maxVisiblePages / 2);
    startPage = Math.max(startPage, 1);

    let endPage = startPage + maxVisiblePages - 1;
    endPage = Math.min(endPage, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1); // startPage가 음수가 되지 않도록 보장
    }

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => i + startPage
    );

    return (
        <div className="pagination">
          {currentPage !== 1 && (
              <>
                <button onClick={() => setCurrentPage(1)}>&laquo;&laquo;</button>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  &laquo;
                </button>
              </>
          )}
          {pages.map((page) => (
              <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "active" : ""}
              >
                {page}
              </button>
          ))}
          {currentPage !== totalPages && (
              <>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                >
                  &raquo;
                </button>
                <button onClick={() => setCurrentPage(totalPages)}>
                  &raquo;&raquo;
                </button>
              </>
          )}
        </div>
    );
  };

  return (
      <div className="layout_root">
        <div className="roomContainer">
          <div className="roomHeader">
            <div className="title-wrapper__title">전체 {filteredData.length}개</div>
          </div>
          <Separator height={"8px"} />
          <div className="listWithImage">
            <div className="listWithImage__top">
              <div className="listWithImage__category">
                <BigToggleBtn
                    cityItems={cityItems}
                    filled={false}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                />
                <ToggleBtn_1
                    items={structureList}
                    filled={false}
                    selectedStructure={selectedStructure}
                    setSelectedStructure={setSelectedStructure}
                />
                <ToggleBtn_2
                    items={priceList}
                    filled={false}
                    selectedPrice={selectedPrice}
                    setSelectedPrice={setSelectedPrice}
                />
              </div>
            </div>
            <div className="listWithImage__list">
              <RoomListCard2 RoomList={filteredData} />
            </div>
          </div>
          <Separator height={"20px"} />
          <div className="listWithImage__top">
            <div style={{ fontSize: "20px", fontWeight: "700" }}>승계 목록</div>
          </div>
          <div className="textList">
            <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 2fr 1fr 2fr 1fr",
                  marginTop: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #e0e0e0",
                }}
            >
              <div>지역</div>
              <div>제목</div>
              <div>금액</div>
              <div>계약 기간</div>
              <div>등록일</div>
            </div>
            {filteredData
                .slice(
                    (currentPage - 1) * ITEMS_PER_PAGE,
                    currentPage * ITEMS_PER_PAGE
                )
                .map((item) => (
                    <Link to={`/succDetail/${item.succession_article.articleNo}`}>
                      <ListItem item={item} />
                    </Link>
                ))}
          </div>
          <Pagination />
        </div>
        <Separator height={"80px"} />
      </div>
  );
}