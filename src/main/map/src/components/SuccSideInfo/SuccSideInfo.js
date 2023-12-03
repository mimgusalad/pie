import React from "react";
import warningSign1 from "../../image/warning_1.png";
import warningSign2 from "../../image/warning_2.png";
import warningSign3 from "../../image/warning_3.png";
import warningSign4 from "../../image/warning_4.png";
import "./SuccSideInfo.css";
import Separator from "../Separator";

export default function SuccSideInfo({ item }) {
  return (
      <div className="sideInfo">
        <div className="infoItem1">
          <div className="infoItemTitle">주소 및 계약기간</div>
          <Separator height={"12px"} />
          <div className="infoText">{item.succession_article.address} {item.succession_article.addressDetail}</div>
          <Separator height={"8px"} />
          <div className="infoText">{item.succession_article.periodDay}~{item.succession_article.periodYear}</div>
        </div>
        <div className="infoItem1">
          <div className="infoItemTitle">방구조</div>
          <Separator height={"8px"} />
          <div className="infoText">{item.succession_article.houseType}</div>
        </div>
        <div className="infoItem1">
          <div className="infoItemTitle">거래 정보</div>
          <Separator height={"8px"} />
          <div className="infoText">{item.succession_article.payType}</div>
        </div>
        <div className="infoItem2">
          <div className="infoItemTitle">건물 정보</div>
          <Separator height={"12px"} />
          <div className="feeContainer">
            <div className="infoCategory">관리비</div>
            <div className="infoAnswer">{item.succession_article.payment}</div>
          </div>
          <Separator height={"12px"} />
          <div className="feeContainer">
            <div className="infoCategory">금액</div>
            <div className="infoAnswer">
              {item.succession_article.deposit}/{item.succession_article.fee}
            </div>
          </div>
          <Separator height={"12px"} />
          <div className="feeContainer">
            {/* <div className="infoCategory">옵션 항목</div> */}
            <div className="infoCategory">옵션<br/>항목</div>
            <div className="infoGrid">
                 <div className="grid-item">
                      {item.succession_article.optionQuality}
                 </div>
            </div>
          </div>
          <Separator height={"12px"} />
          <div className="feeContainer">
            {/* <div className="infoCategory">승계 물품</div> */}
            <div className="infoCategory">승계<br/>물품</div>
            <div className="infoGrid">
                    <div className="grid-item">
                      {item.succession_article.successionQuality}
                    </div>
            </div>
          </div>
        </div>
      </div>
  );
}