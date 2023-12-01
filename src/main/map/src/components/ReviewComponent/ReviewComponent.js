import React from "react";
import "./ReviewComponent.css";
import { Link } from "react-router-dom";

export default function ReviewComponent({ review }) {
  return (
    <Link to={`/detail/review/${review.articleNo}`}>
      <div className="reviewBox">
        <div className="reviewHeader">
          <div className="userID">
            <img
              src={review.userImage}
              alt="userImage"
              style={{ width: "20px", height: "20px", borderRadius: "100%" }}
            />
            <div className="reviewOwner">차라라</div>
          </div>
          <div className="grayText">{review.livingYear}</div>
        </div>
        <div className="reviewContent">
          <img
            src={review.objectImage}
            alt="objectImage"
            style={{ width: "120px", height: "80px" }}
          />
          <div className="reviewText">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <span className="reviewTitle">상세 리뷰</span>
              <div style={{ fontSize: "8px" }}>
                <span style={{ color: "#fff100" }}>★</span>
                <span style={{ color: "black" }}>{review.rating}</span>
              </div>
            </div>
            <div className="detailContainer">
              <div className="detailText">{review.contentText}</div>
            </div>
            <div style={{ width: "100%", textAlign: "end" }}>
              <span className="grayText">{review.regdate}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
