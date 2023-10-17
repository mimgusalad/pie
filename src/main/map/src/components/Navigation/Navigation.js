import React from "react";
import "./Navigation.css";

export default function Navigation({ mainMenus }) {
  <nav className="navigation">
    <div className="navigation__navitems">
      <h1 className="navitem__logo">단비집</h1>
      <div className="navitem__main-menus">
        {mainMenus.map((menu, index) => {
          return (
            <a className="main-menus__item" href={menu.path}>
              <div key={index}>{menu.label}</div>
            </a>
          );
        })}
      </div>
      <div className="navitem__user_menus">
        <a className="user_menus__item user_msg" href="">
          <span>메시지</span>
        </a>
        <div className="user_menus__item user_profile">
          <div className="user_profile__user_name">넨도님</div>
          <div className="user_profile__user_img"></div>
        </div>
        <a className="user_menus__item user_write" href="">
          <span>
            글쓰기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrow-down"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </nav>;
}
