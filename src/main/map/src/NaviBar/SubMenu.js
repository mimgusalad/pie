import React from "react";
import { useState } from "react";

const leftSubMenus = [
  {
    label: "방 찾기",
    path: "",
  },
  {
    label: "즐겨찾기",
    path: "",
  },
];

export default function SubMenu() {
  let [inputText, setInputText] = useState("");
  let [curPrice, setCurPrice] = useState("전월세 금액");
  let [place, setPlace] = useState("");
  let [price, setPrice] = useState(0);
  let [curHouseType, setCurHouseType] = useState("방 구조");
  let [houseType, setHouseType] = useState("");
  let [store, setStore] = useState("");

  const changeHouseType = (type) => {
    setHouseType(type);
    if (type === "") {
      setCurHouseType("방 구조");
    } else if (type === "오픈형") {
      setCurHouseType("오픈형");
    } else if (type === "분리형") {
      setCurHouseType("분리형");
    } else if (type === "복층형") {
      setCurHouseType("복층형");
    } else if (type === "지상층") {
      setCurHouseType("반지하");
    } else if (type === "옥탑") {
      setCurHouseType("옥탑");
    }
  };

  const convenience = (name) => {
    //e.preventDefault();
    setStore(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const housePrice = (price) => {
    setPrice(price);
    if (price === 0) {
      setCurPrice("전월세 금액");
    } else if (price === 10) {
      setCurPrice("10만~");
    } else if (price === 20) {
      setCurPrice("20만~");
    } else if (price === 30) {
      setCurPrice("30만~");
    } else if (price === 40) {
      setCurPrice("40만~");
    } else if (price === 50) {
      setCurPrice("50만~");
    }
  };

  return (
    <div className="sub-menus">
      <div className="sub-menus__wrapper">
        <div className="left_sub_menu_button">
          {leftSubMenus.map((leftSubMenu, index) => {
            return (
              <div className="left_sub_menu__item" key={index}>
                <button className="left_sub_menu__item">
                  {leftSubMenu.label}
                </button>
                {/* {leftSubMenu.label} */}
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            gap: "40px",
          }}
        >
          <div className="left_sub_menu__item left_sub_menu__search">
            <form className="inputForm" onSubmit={handleSubmit}>
              <input
                className="search__input"
                type="text"
                placeholder="원하시는 지역명, 지하철역, 단지명을 입력해주세요"
                onChange={onChange}
                value={inputText}
              />
            </form>
            <div className="search__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className="right_sub_menus">
            <div className="sub_menus_filter filter_1">
              <button className="sub_menus_filter filter_1">{curPrice}</button>
              {/* <button className="filter__label">전월세 금액</button> */}
              <div className="filter__details-wrapper">
                <a href="#" onClick={() => housePrice(0)}>
                  없음
                </a>
                <a href="#" onClick={() => housePrice(10)}>
                  10만~
                </a>
                <a href="#" onClick={() => housePrice(20)}>
                  20만~
                </a>
                <a href="#" onClick={() => housePrice(30)}>
                  30만~
                </a>
                <a href="#" onClick={() => housePrice(40)}>
                  40만~
                </a>
                <a href="#" onClick={() => housePrice(50)}>
                  50만~
                </a>
              </div>
            </div>
            <div className="sub_menus_filter filter_2">
              <button className="sub_menus_filter filter_2">
                {curHouseType}
              </button>
              <div className="filter__details-wrapper">
                <a href="#" onClick={() => changeHouseType("")}>
                  없음
                </a>
                <a href="#" onClick={() => changeHouseType("오픈형")}>
                  오픈형
                </a>
                <a href="#" onClick={() => changeHouseType("분리형")}>
                  분리형
                </a>
                <a href="#" onClick={() => changeHouseType("복층형")}>
                  복층형
                </a>
                <a href="#" onClick={() => changeHouseType("지상층")}>
                  지상층
                </a>
                <a href="#" onClick={() => changeHouseType("반지하")}>
                  반지하
                </a>
                <a href="#" onClick={() => changeHouseType("옥탑")}>
                  옥탑
                </a>
              </div>
            </div>
            <div className="sub_menus_filter filter_3">
              <button className="sub_menus_filter filter_3">편의시설</button>
              <div className="filter__details-wrapper">
                <a href="#" onClick={() => convenience("CS2")}>
                  편의점
                </a>
                <a href="#" onClick={() => convenience("PM9")}>
                  약국
                </a>
                <a href="#" onClick={() => convenience("HP8")}>
                  병원
                </a>
                <a href="#" onClick={() => convenience("SW8")}>
                  지하철역
                </a>
                <a href="#" onClick={() => convenience("OL7")}>
                  주유소
                </a>
                <a href="#" onClick={() => convenience("BK9")}>
                  은행
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
