import React, { useState } from "react";
import nextArrow from "../image/next.png";
import prevArrow from "../image/back.png";
import succImage from "../image/succ_1.png";

export default function ImageCard({ imageItem, height, width }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imageItem.images.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < imageItem.img_url.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
    display: "flex",
    // width: `${imageItem.images.length * 100}%`,
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
        {imageItem.img_url.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={item}
              alt={succImage}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
