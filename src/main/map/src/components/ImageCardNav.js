import React, { useState } from "react";
import nextArrow from "../image/next.png";
import prevArrow from "../image/back.png";
import succImage from "../image/succ_1.png";
//import {imageData} from "../data/imageData.js"
import roomdetail_1 from "../image/roomdetail_1.png";
import roomdetail_2 from "../image/roomdetail_2.png";
import roomdetail_3 from "../image/roomdetail_3.png";

const imageData = [
  {
    images: [
      {
        image: roomdetail_1,
      },
      {
        image: roomdetail_2,
      },
      {
        image: roomdetail_3,
      },
    ],
   }
]


export default function ImageCardNav({ imageItem, height, width }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  var substring = imageItem.img_url.split(" ")
  console.log(substring[0])
  //split이 잘못됐을수도 object-array 변환 찾아봐

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imageData.images.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < imageData.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
    display: "flex",
//    width: `${imageData.images.length * 100}%`,
    height: "100%",
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: width,
        height: height,
      }}
    >
      <button
        type="button"
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <img
          src={prevArrow}
          alt="Previous"
          style={{ width: "15px", height: "15px" }}
        />
      </button>
      <button
        type="button"
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <img
          src={nextArrow}
          alt="Next"
          style={{ width: "15px", height: "15px" }}
        />
      </button>
      <div style={sliderStyle}>
        {
            substring[0] ? (
                <img
                   src= {substring[0]}
                   alt="sample"
                   style={{ width: "100%", height: "100%" }}
                />
               ) : (
                <img
                   src={roomdetail_1}
                   alt="sample"
                   style={{ width: "100%", height: "100%" }}
                 />
               )
        }
      </div>
    </div>
  );
}