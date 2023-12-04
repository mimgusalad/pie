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
        <div className="infoText">{item.review_article.address}</div>
      </div>
      <div className="infoItem1">
        <div className="infoItemTitle">방구조</div>
        <Separator height={"8px"} />
        <div className="infoText">{item.review_article.houseType}</div>
      </div>
      <div className="infoItem1">
        <div className="infoItemTitle">거래 정보</div>
        <Separator height={"8px"} />
        <div className="infoText">{item.review_article.payment}</div>
      </div>
      <div className="infoItem1">
        <div className="infoItemTitle">건물 정보</div>
        <Separator height={"8px"} />
        <div className="feeContainer">
          <div className="infoCategory">관리비</div>
          <div className="infoAnswer">{item.review_article.utility}</div>
        </div>
        <Separator height={"8px"} />
        <div className="feeContainer">
          <div className="infoCategory">금액</div>
          <div className="infoAnswer">
            {item.review_article.deposit}/{item.review_article.fee}
          </div>
        </div>
      </div>
      <div className="infoItem2">
        <div className="infoItemTitle">건물 정보</div>
        <div>
          <div className="warningSign_1">
            <img src={warningSign1} alt="level1" className="warningIcon" />
            <span className="levelText"> 심각 </span>
                <span className="tag" >
                  {item.keyword.심각[0]} {item.keyword.심각[1]}
                </span>
          </div>
          <div className="warningSign_1">
            <img src={warningSign2} alt="level1" className="warningIcon" />
            <span className="levelText"> 경계 </span>
                 <span className="tag" >
                   {item.keyword.경계[0]} {item.keyword.경계[1]}
                 </span>
          </div>
          <div className="warningSign_1">
            <img src={warningSign3} alt="level1" className="warningIcon" />
            <span className="levelText"> 주의 </span>
                <span className="tag" >
                  {item.keyword.주의[0]} {item.keyword.주의[1]}
                </span>
          </div>
          <div className="warningSign_1">
            <img src={warningSign4} alt="level1" className="warningIcon" />
            <span className="levelText"> 문제없음 </span>
                <span className="tag" >
                  {item.keyword.문제없음[0]} {item.keyword.문제없음[1]}
                </span>
          </div>
        </div>
      </div>
    </div>
  );
}
