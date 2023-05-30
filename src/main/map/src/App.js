import "./style.css";
import NaviBar from "./NaviBar/NaviBar";
import NavUnder from "./NaviBar/NavUnder";
import SideBar from "./page/SideBar";
import MapContainer from "./NaviBar/Components/MapContainer";

export default function TempPage() {
  return (
    <div className="layout_root">
      <NaviBar />
      <NavUnder />
      <div className="content">
        <SideBar />
        <MapContainer />
      </div>
    </div>
  );
}
