import React, { useState } from "react";
import nextArrow from "../image/next.png";
import prevArrow from "../image/back.png";
import succImage from "../image/succ_1.png";
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

//export default function ImageCardReview({ imageItem, height, width }) {
//  const [currentIndex, setCurrentIndex] = useState(0);
//
//  const handlePrev = () => {
//    if (currentIndex > 0) {
//      setCurrentIndex(currentIndex - 1);
//    } else {
//      setCurrentIndex(imageData.images.length - 1);
//    }
//  };
//
//  const handleNext = () => {
//    if (currentIndex < imageData.images.length - 1) {
//      setCurrentIndex(currentIndex + 1);
//    } else {
//      setCurrentIndex(0);
//    }
//  };
//
//  const sliderStyle = {
//    transform: `translateX(-${currentIndex * 100}%)`,
//    transition: "transform 0.5s ease-in-out",
//    display: "flex",
////    width: `${imageData.images.length * 100}%`,
//    height: "100%",
//  };
//
//  return (
//    <div
//      style={{
//        position: "relative",
//        overflow: "hidden",
//        width: width,
//        height: height,
//      }}
//    >
//      <button
//        type="button"
//        onClick={handlePrev}
//        style={{
//          position: "absolute",
//          top: "50%",
//          left: "0",
//          transform: "translateY(-50%)",
//          backgroundColor: "transparent",
//          border: "none",
//          cursor: "pointer",
//          zIndex: 10,
//        }}
//      >
//        <img
//          src={prevArrow}
//          alt="Previous"
//          style={{ width: "15px", height: "15px" }}
//        />
//      </button>
//      <button
//        type="button"
//        onClick={handleNext}
//        style={{
//          position: "absolute",
//          top: "50%",
//          right: "0",
//          transform: "translateY(-50%)",
//          backgroundColor: "transparent",
//          border: "none",
//          cursor: "pointer",
//          zIndex: 10,
//        }}
//      >
//        <img
//          src={nextArrow}
//          alt="Next"
//          style={{ width: "15px", height: "15px" }}
//        />
//      </button>
//      <div style={sliderStyle}>
//            <img
//              src={roomdetail_1}
//              alt="sample"
//              style={{ width: "100%", height: "100%" }}
//            />
//      </div>
//    </div>
//  );
//}

export default function ImageCardReview({ imageItem, height, width }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(imageItem)

   imageItem.img_url && imageItem.img_url.map((item)=>{
       console.log(item)
   })


  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imageItem.img_url.length - 1);
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
              imageItem.img_url[0] ? (
                  imageItem.img_url.map((item)=>(
                  <div
                    style={{
                      flex: "0 0 auto",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                  <img
                    src= {item}
                    alt="sample"
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
                  )
                 )

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
