import React, { useState, useEffect } from "react";
import "./RoomListCard.css";
import tagIcon from "../../image/tag.png";
import { Link } from "react-router-dom";

function RoomImage({ item, icon }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${item.images[0].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "240px",
        position: "relative",
        width: `${(windowWidth * 0.51 - 16) / 4}px`,
        height: "240px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px 0",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <div style={{ paddingLeft: "12px" }}>{item.address}</div>
      </div>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        {/* <img src={icon} alt="icon" style={{ width: "16px" }} /> */}
      </div>
    </div>
  );
}

export default function RoomCard({ item }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <RoomImage item={item} icon={tagIcon} />
      {/* <img
        src={item.image}
        alt="itemImage"
        style={{ width: (windowWidth * 0.5) / 4, height: "240px" }}
      /> */}
      <div className="infoContainer">
        <div className="listUserInfo">
          <img src={item.userImage} alt="userImage" className="userImage" />
          <div>{item.owner}</div>
        </div>
        <div style={{ fontSize: "12px" }}>{item.price}</div>
      </div>
    </div>
  );
}
