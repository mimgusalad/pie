import React from "react";
import "./ReviewHeader.css";
import userImage from "../../image/kakaoimg_1.png"

export default function ReviewHeader({ user }) {
  return (
    <div className="reviewHeader">
      <div className="userID">
        <img
          src= {userImage}
          alt="userImage"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "100%",
          }}
        />
        <div className="reviewOwner">{user.userInfo.name}</div>
      </div>
      <div className="userInfo">
        <div style={{ fontSize: "12px", marginRight: "8px" }}>
          <span style={{ color: "#fff100", marginRight: "8px" }}>★</span>
          <span style={{ color: "black" }}>{user.review_article.rating}</span>
        </div>
        <div className="grayText">{user.review_article.livingYear}</div>
      </div>
    </div>
  );
}
