import React from "react";
import warningSign1 from "../../image/warning_1.png";
import warningSign2 from "../../image/warning_2.png";
import warningSign3 from "../../image/warning_3.png";
import warningSign4 from "../../image/warning_4.png";
import "./SideInfo.css";
import Separator from "../Separator";

export default function SideInfo({ item }) {
  return (
    <div className="sideInfo">
      <div className="infoItem1">
        <div className="infoItemTitle">주소</div>
        <Separator height={"12px"} />
        <div className="infoText">{item.address}</div>
      </div>
      <div className="infoItem1">
        <div className="infoItemTitle">방구조</div>
        <Separator height={"8px"} />
        <div className="infoText">{item.houseType}</div>
      </div>
      <div className="infoItem1">
        <div className="infoItemTitle">거래 정보</div>
        <Separator height={"8px"} />
        <div className="infoText">{item.payment}</div>
      </div>
      <div className="infoItem1">
        <div className="infoItemTitle">건물 정보</div>
        <Separator height={"8px"} />
        <div className="feeContainer">
          <div className="infoCategory">관리비</div>
          <div className="infoAnswer">{item.management_fee}</div>
        </div>
        <Separator height={"8px"} />
        <div className="feeContainer">
          <div className="infoCategory">금액</div>
          <div className="infoAnswer">
            {item.deposit}/{item.price}
          </div>
        </div>
      </div>
      <div className="infoItem2">
        <div className="infoItemTitle">건물 정보</div>
        <div>
          <div className="warningSign_1">
            <img src={warningSign1} alt="level1" className="warningIcon" />
            <span className="levelText"> 심각 </span>
            {item.condition_1.map((item, index) => {
              return (
                <span className="tag" key={index}>
                  {item.tag}
                </span>
              );
            })}
          </div>
          <div className="warningSign_1">
            <img src={warningSign2} alt="level1" className="warningIcon" />
            <span className="levelText"> 경계 </span>
            {item.condition_2.map((item, index) => {
              return (
                <span className="tag" key={index}>
                  {item.tag}
                </span>
              );
            })}
          </div>
          <div className="warningSign_1">
            <img src={warningSign3} alt="level1" className="warningIcon" />
            <span className="levelText"> 주의 </span>
            {item.condition_3.map((item, index) => {
              return (
                <span className="tag" key={index}>
                  {item.tag}
                </span>
              );
            })}
          </div>
          <div className="warningSign_1">
            <img src={warningSign4} alt="level1" className="warningIcon" />
            <span className="levelText"> 문제없음 </span>
            {item.condition_4.map((item, index) => {
              return (
                <span className="tag" key={index}>
                  {item.tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
