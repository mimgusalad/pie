import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import RoomCard2 from "./RoomCard2";
import "./RoomListCard.css";
import backIcon from "../../image/back.png";
import nextIcon from "../../image/next.png";
import { Link } from "react-router-dom";

export default function RoomListCard2({ RoomList }) {
  const len = RoomList.length;
  const [index, setIndex] = useState(0);
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onClickBack = () => {
    if (index > 0) {
      setIsAnimating(true);
      setIndex(index - 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // 300ms는 애니메이션 지속 시간과 일치해야 합니다.
    }
  };

  const onClickNext = () => {
    if (index + 4 < len) {
      setIsAnimating(true);
      setIndex(index + 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // 300ms는 애니메이션 지속 시간과 일치해야 합니다.
    }
  };

  // const onClickBack = () => {
  //   setIndex(index - 1);
  // };
  // const onClickNext = () => {
  //   setIndex(index + 1);
  // };
  useEffect(() => {
    if (index === 0) {
      setIsBackDisabled(true);
    } else {
      setIsBackDisabled(false);
    }
    if (index + 4 >= len) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [index]);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button
        onClick={onClickBack}
        style={{ width: "5%", backgroundColor: "white", border: "none" }}
        disabled={isBackDisabled ? true : false}
      >
        <img
          src={backIcon}
          alt="backIcon"
          style={{ width: "20px" }}
          className={isBackDisabled ? "button_off" : "button_on"}
        />
      </button>
      <div className="roomListContainer">
        <div
          className="slideContent"
          style={{
            transform: `translateX(-${
              index * ((windowWidth * 0.5) / 4 + 16)
            }px)`,
          }}
        >
          {RoomList.map((item, idx) => (
            <Link to={`/succDetail/${item.succession_article.articleNo}`}>
              <RoomCard2 key={idx} item={item} />
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={onClickNext}
        style={{ width: "5%", backgroundColor: "white", border: "none" }}
        disabled={isNextDisabled ? true : false}
      >
        <img
          src={nextIcon}
          alt="nextIcon"
          style={{ width: "20px" }}
          className={isNextDisabled ? "button_off" : "button_on"}
        />
      </button>
    </div>
  );
}
