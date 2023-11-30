import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../ReviewDetail.css";
import backButton from "../image/backward.png";
import ImageCard from "../components/ImageCard";
import Separator from "../components/Separator";
import shareIcon from "../image/share.png";
import ReviewHeader from "../components/ReviewHeader/ReviewHeader";
import SideInfo from "../components/SideInfo/SideInfo";
import { Data } from "../data/Data";

export default function ReviewDetailPage(){
    const location = useLocation();
    const getData = {...location.state};
    const review = getData.eleReview;
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
                  {/* <ImageCard imageItem="null" height={"400px"} /> */}
                  <ReviewHeader user={review} />
                  <hr style={{ marginTop: "16px", color: "lightgray" }} />
                  <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                    {/* {Data[roomId].reviews[reviewId].reviewComment} */}
                  </div>
                  <Separator height={"40px"} />
                  <div className="etcContainer">
                    <div className="etcText">
                      {/* {review.regData} */}
                    </div>
                    <div className="etcText">
                      조회 {}
                    </div>
                    <img
                      src={shareIcon}
                      alt="shareIcon"
                      style={{ width: "12px", height: "12px" }}
                    />
                  </div>
                </div>
                <div className="detailInfoContainer">
                  {/* <SideInfo item={Data[roomId]} /> */}
                </div>
              </div>
              <Separator height={"80px"} />
            </div>
          </div>
        </div>
      );
}