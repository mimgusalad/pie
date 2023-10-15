import React from "react";
import "./ReviewHeader.css";

export default function ReviewHeader({ user }) {
  return (
    <div className="reviewHeader">
      <div className="userID">
        <img
          src={user.userImage}
          alt="userImage"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "100%",
          }}
        />
        <div className="reviewOwner">{user.owner}</div>
      </div>
      <div className="userInfo">
        <div style={{ fontSize: "12px", marginRight: "8px" }}>
          <span style={{ color: "#fff100", marginRight: "8px" }}>★</span>
          <span style={{ color: "black" }}>{user.grade}</span>
        </div>
        <div className="grayText">{user.livingTime}</div>
      </div>
    </div>
  );
}
