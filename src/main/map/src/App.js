import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import NavUnderSide from "./NaviBar/NavUnderSide";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Detail from "./NaviBar/Detail";
import MapPage from "./NaviBar/MapPage";
import MapPrac from "./NaviBar/MapPrac";
import RoomList from "./RoomList";
import SuccDetail from "./succDetail";
import ReviewDetail from "./ReviewDetail";
import NavUnder from "./NaviBar/NavUnder";
import MapPage2 from "./NaviBar/MapPage2";

export default function TempPage() {
  // useEffect(()=>{
  //   axios.get('/api/review')
  //     .then(res => console.log(res))
  //     .catch()
  // })

  return (
    <Routes>
      {/* NavUnder, NavUnderSide 바꿀때 MapPage수정 */}
      <Route path="/" element={<NavUnder />} />
      <Route path="/detail/:roomId" element={<MapPage2 />} />
      {/* <Route path="/" element={<NavUnderSide />} /> */}
      {/* <Route path="/detail/:roomId" element={<MapPage />} /> */}
      <Route path="/succDetail/:succId" element={<SuccDetail />} />
      <Route path="/승계방" element={<RoomList />} />
      <Route
        path="detail/:roomId/review/:reviewId"
        element={<ReviewDetail />}
      />
    </Routes>
  );
}
