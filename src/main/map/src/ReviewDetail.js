import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ReviewDetail.css";
import backButton from "./image/backward.png";
import ImageCard from "./components/ImageCard";
import Separator from "./components/Separator";
import shareIcon from "./image/share.png";
import ReviewHeader from "./components/ReviewHeader/ReviewHeader";
import SideInfo from "./components/SideInfo/SideInfo";
import { Data } from "./data/Data";

const mainMenus = [
  {
    label: "지도",
    path: "",
  },
  {
    label: "AI 추천",
    path: "",
  },
  {
    label: "승계방",
    path: "",
  },
  {
    label: "혜택",
    path: "",
  },
];

export default function ReviewDetail() {
  const { roomId, reviewId } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="layout_root">
      <div className="containerWrapper">
        <div className="container">
          <div className="header">
            <button onClick={handleGoBack} className="custom-button-with-icon">
              <img src={backButton} alt="backButton" />
              뒤로가기
            </button>
            <Separator height={"12px"} />
            <div className="subHeader">방 정보 {">"} 거주민리뷰</div>
          </div>
          <div className="reviewContent">
            <div className="userReviewContainer">
              <ImageCard imageItem={Data[roomId]} height={"400px"} />
              <ReviewHeader user={Data[roomId].reviews[reviewId]} />
              <hr style={{ marginTop: "16px", color: "lightgray" }} />
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                {Data[roomId].reviews[reviewId].reviewComment}
              </div>
              <Separator height={"40px"} />
              <div className="etcContainer">
                <div className="etcText">
                  {Data[roomId].reviews[reviewId].updatedAt}
                </div>
                <div className="etcText">
                  조회 {Data[roomId].reviews[reviewId].view}
                </div>
                <img
                  src={shareIcon}
                  alt="shareIcon"
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>
            <div className="detailInfoContainer">
              <SideInfo item={Data[roomId]} />
            </div>
          </div>
          <Separator height={"80px"} />
        </div>
      </div>
    </div>
  );
}
