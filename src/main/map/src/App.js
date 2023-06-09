import "./style.css";
import NaviBar from "./NaviBar/NaviBar";
import MapContainer from "./NaviBar/Components/MapContainer";
import { useEffect } from "react";
import NavUnderSide from "./NaviBar/NavUnderSide";


export default function TempPage() {

  return (
    <div className="layout_root">
      <NaviBar />
      <NavUnderSide />
      <div className="content">
        <MapContainer />
      </div>
    </div>
  );
}
