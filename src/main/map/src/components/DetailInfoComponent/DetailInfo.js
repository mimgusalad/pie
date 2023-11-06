import React from "react";
import "./DetailInfo.css";

export default function DetailInfo({ item }) {
  return (
    <div className="detailGrid">
      <div>건물 용도</div>
      <div>{item.houseType}</div>
      <div>건물 구조</div>
      <div>{item.structure}</div>
      <div>주차 대수</div>
      <div>{item.parkingLot}</div>
      <div>세대 수</div>
      <div>{item.householdNum}</div>
      <div>방향</div>
      <div>{item.side}</div>
      <div>공급면적</div>
      <div>{item.area}</div>
      <div>층 수</div>
      <div>{item.floor}</div>
    </div>
  );
}
