// 이전 버전의 RoomList.jsx 파일입니다.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RoomList.css";
import Separator from "./components/Separator";
import ToggleBtn_1 from "./components/ToggleBtnFilled/ToggleBtn_1";
import ToggleBtn_2 from "./components/ToggleBtnFilled/ToggleBtn_2";
import ToggleBtn from "./components/ToggleBtnFilled/ToggleBtn";
import RoomListCard from "./components/RoomListCard/RoomListCard";
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
    city: ["강남구", "강동구", "강북구", "강서구", "관악구"],
  },
  {
    id: 1,
    state: "경기",
    city: ["수원시", "성남시 분당구", "용인시", "부천시", "안산시"],
  },
  {
    id: 2,
    state: "대구",
    city: ["중구", "동구", "서구", "남구", "북구"],
  },
  {
    id: 3,
    state: "경북",
    city: ["경산시", "경주시", "구미시", "김천시", "문경시"],
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
const priceList = ["10~20", "20~30", "30~40", "40~50"];
//

function ListItem({ item }) {
  return (
    <div className="itemGrid" style={{ fontSize: "14px" }}>
      <div>{item.address}</div>
      <div>{item.contextTitle}</div>
      <div>
        {item.deposit}/{item.fee}
      </div>
      <div>
        {item.startDate}~{item.finishDate}
      </div>
      <div>{item.regdate}</div>
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
  const [filteredData, setFilteredData] = useState(succData);

  useEffect(() => {
    const newData = succData.filter(
      (item) =>
        item.address.includes(selectedCity) &&
        item.houseType.includes(selectedStructure) &&
        selectedPrice.min <= item.fee &&
        item.fee <= selectedPrice.max
    );
    setFilteredData(newData);
    console.log(selectedPrice);
  }, [selectedCity, selectedStructure, selectedPrice]);

  // 현재 페이지에 따라 게시물을 필터링
  const currentData = succData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 지역 데이터를 기본 데이터에서 가져옵니다. 만약 지역 데이터를 새로 만든다면 참고
  // 새로운 DB를 만드는 것을 추천
  // function getAreaData(data) {
  //   const parts = data.split(" ");
  //   const siDo = parts[0];
  //   const subAddress = parts.slice(1).join(" ");

  //   return {
  //     siDo: siDo,
  //     subAddress: subAddress,
  //   };
  // }

  // const uniqueAddresses = new Set(succData.map((item) => item.address));

  // const uniqueSuccData = succData.filter((item) => {
  //   if (uniqueAddresses.has(item.address)) {
  //     uniqueAddresses.delete(item.address);
  //     return true;
  //   }
  //   return false;
  // });

  // const areaData = uniqueSuccData.map((item) => getAreaData(item.address));
  // const siDo = areaData.map((item) => item.siDo);
  // const subAddress = areaData.map((item) => item.subAddress);

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
          <div className="title-wrapper__title">전체</div>
          <div className="subText" style={{ marginLeft: "8px" }}>
            {succData.length}개
          </div>
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
            <ToggleBtn items={["최신순", "인기순"]} filled={true} />
          </div>
          <div className="listWithImage__list">
            <RoomListCard RoomList={filteredData} />
          </div>
        </div>
        <Separator height={"20px"} />
        <div className="listWithImage__top">
          <div style={{ fontSize: "20px", fontWeight: "700" }}>승계 목록</div>
          <ToggleBtn items={["최신순", "인기순"]} filled={true} />
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
              <Link to={`/succDetail/${item.id}`}>
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
