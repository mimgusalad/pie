import React from "react";
import "./ReviewHeader.css";

export default function ReviewHeader({ user }) {
  return (
    <div className="reviewHeader">
      <div className="userID">
        <div className="reviewOwner">{user.review_article.userId}</div>
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
