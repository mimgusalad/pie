import React from "react";
import "./ReviewHeader.css";
import userImage from "../../image/kakaoimg_1.png"
import chatimg from "../../image/chat.png"

export default function SuccHeader({ user }) {

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
        <div className="reviewOwner">{user.userInfo.nickname}</div>
        <img
          src={chatimg}
          alt="chatImage"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
          }}
             // onClick={(1)} 채팅으로
          />
      </div>
      <div className="userInfo">
        <div style={{ fontSize: "12px", marginRight: "8px" }}>
{/*           <span style={{ color: "#fff100", marginRight: "8px" }}>★</span> */}
{/*           <span style={{ color: "black" }}>{user.grade}</span> */}
        </div>
        <div className="grayText">{user.periodYear}</div>
      </div>
    </div>
  );
}
