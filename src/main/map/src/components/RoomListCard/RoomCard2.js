import React, { useState, useEffect } from "react";
import "./RoomListCard.css";
import tagIcon from "../../image/tag.png";
import { Link } from "react-router-dom";
import roomImage from "../../image/succ_1.png"
import userImage from "../../image/kakaoimg_1.png"

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

  if(item.img_url[0] == null){
  return (
        <div
          style={{
            backgroundImage: `url(${roomImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
          <div style={{ paddingLeft: "12px" }}>{item.succession_article.address}</div>
        </div>
      </div>
//    <div
//      style={{
//        backgroundImage: `url(${roomImage})`,
//        backgroundSize: "cover",
//        backgroundPosition: "center",
//        position: "relative",
//        width: `${(windowWidth * 0.51 - 16) / 4}px`,
//        height: "240px",
//        borderRadius: "10px",
//      }}
//    >
//      <div
//        style={{
//          position: "absolute",
//          bottom: "0",
//          left: "0",
//          right: "0",
//          background: "rgba(0,0,0,0.5)",
//          color: "white",
//          padding: "10px 0",
//          borderRadius: "0 0 10px 10px",
//        }}
//      >
//        <div style={{ paddingLeft: "12px" }}>{item.succession_article.address}</div>
//      </div>
//    </div>
  );
  }
  else {
      return(
       <div
         style={{
           backgroundImage: `url(${item.img_url[0]})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
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
         <div style={{ paddingLeft: "12px" }}>{item.succession_article.address}</div>
       </div>
     </div>
    );
  }
}



export default function RoomCard2({ item }) {
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
      <div className="infoContainer">
        <div className="listUserInfo">
          <img src={userImage} alt="userImage" className="userImage" />
          <div>{item.userInfo.nickname}</div>
        </div>
        <div style={{ fontSize: "12px" }}>{item.succession_article.fee}</div>
      </div>
    </div>
  );
}
