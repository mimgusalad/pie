import "./style.css";
import axios from "axios";
import React, { useEffect } from "react";
import NavUnderSide from "./NaviBar/NavUnderSide";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import RoomList from "./RoomList";
import SuccDetail from "./succDetail";
import ReviewDetail from "./ReviewDetail";
import NavUnder from "./NaviBar/NavUnder";
import MapPage2 from "./NaviBar/MapPage2";
import Chat from "./Chat";

const mainMenus = [
  {
    label: "지도",
    path: "/map",
  },
  {
    label: "AI 추천",
    path: "/searchRoom",
  },
  {
    label: "승계방",
    path: "/successionBoard",
  },
  {
    label: "혜택",
    path: "/benefits",
  },
];
export default function TempPage() {
  return (
      <div>
        <nav className="navigation">
          <div className="navigation__navitems">
            <h1 className="navitem__logo">못난집</h1>
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
              <a className="user_menus__item user_msg" href="/chat">
                <span>메시지</span>
              </a>
              <div className="user_menus__item user_profile">
                <div className="user_profile__user_name">넨도님</div>
              </div>
            </div>
          </div>
        </nav>
<BrowserRouter>
    <Routes>
      <Route path="/map" element={<NavUnder />} />
      <Route path="/detail/:roomId" element={<MapPage2 />} />
      <Route path="/succDetail/:succId" element={<SuccDetail />} />
      <Route path="/successionBoard" element={<RoomList />} />
      <Route
        path="detail/:roomId/review/:reviewId"
        element={<ReviewDetail />}
      />
      <Route path="/chat" element={<Chat/>}/>
     </Routes>
  </BrowserRouter>
      </div>
  )
}
