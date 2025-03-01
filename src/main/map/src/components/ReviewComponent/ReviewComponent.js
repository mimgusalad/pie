import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import "./ReviewComponent.css";
import { Link } from "react-router-dom";
import userImage from "../../image/kakaoimg_1.png"
import roomImage from "../../image/roomdetail_2.png"

export default function ReviewComponent({ review }) {


    const[imageData, setImageData] = useState(null);
       useEffect(()=>{
       	    const fetchData = async() => {
                 const res = await axios.get("http://localhost:8080/reviews/" + `${review.articleNo}`);
                 return res.data;
               }

               fetchData().then(res => setImageData(res));
       },[])


       const [userData, setUserData] = useState([]);
           useEffect(()=>{
                const fetchData = async() => {
                     const res = await axios.get('http://localhost:8080/user-info');
                          return res.data;
                }
                fetchData().then(res => setUserData(res));
           },[])

           console.log(userData)

if(imageData == null){
    return "Loading"
}else{
  return (
    <Link to={`/detail/review/${review.articleNo}/${userData.userId}`}>
      <div className="reviewBox">
        <div className="reviewHeader">
          <div className="userID">
            <img
              src={userImage}
              alt={userImage}
              style={{ width: "20px", height: "20px", borderRadius: "100%" }}
            />
            <div className="reviewOwner">{review.name}</div>
          </div>
          <div className="grayText">{review.livingYear}</div>
        </div>
        <div className="reviewContent">
          {imageData.img_url[0] ?
            (<img src={imageData.img_url[0]} style={{ width: "120px", height: "120px" }} />)
              : (<img src={roomImage} style={{ width: "120px", height: "120px" }} />)
            }
          <div className="reviewText">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <span className="reviewTitle">상세 리뷰</span>
              <div style={{ fontSize: "8px" }}>
                <span style={{ color: "#fff100" }}>★</span>
                <span style={{ color: "black" }}>{review.rating}</span>
              </div>
            </div>
            <div className="detailContainer">
              <div className="detailText">{review.contentText}</div>
            </div>
            <div style={{ width: "100%", textAlign: "end" }}>
              <span className="grayText">{review.regdate}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
  }
}
