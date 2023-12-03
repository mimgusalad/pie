import React from "react";
import "./DetailInfo.css";

export default function DetailInfo({ item }) {
  return (
    <div className="detailGrid">
      <div>건물용도</div>
      <div>오픈형</div>
      <div>건물구조</div>
      <div>철근콘크리트구조</div>
      <div>주차장</div>
      <div>총 4대</div>
      <div>세대 수</div>
      <div>20세대</div>
      <div>방향</div>
      <div>동향</div>
      <div>공급면적</div>
      <div>100m2</div>
      <div>층 수</div>
      <div>4층</div>
    </div>
  );
}
