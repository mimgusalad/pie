import "./style.css";
import NaviBar from "./NaviBar/NaviBar";
import NavUnder from "./NaviBar/NavUnder";
import SideBar from "./page/Components/SideBar";
import MapContainer from "./NaviBar/Components/MapContainer";
import axios from 'axios';
import { useEffect } from "react";
import NavUnderSide from "./NaviBar/NavUnderSide";


export default function TempPage() {

//  useEffect(()=>{
//    axios.get('/api/review')
//      .then(res => console.log(res))
//      .catch()
//  })

  return (
    <div className="layout_root">
      <NaviBar />
      {/* <NavUnder /> */}
      <NavUnderSide />
      <div className="content">
        {/* <SideBar /> */}
        <MapContainer />
      </div>
    </div>
  );
}
