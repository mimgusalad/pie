import React from "react";
import {useParams, useNavigate, Link } from "react-router-dom";
import "./ReviewDetail.css";
import backButton from "./image/backward.png";
import tagIcon from "./image/tag.png";
import aftertagIcon from "./image/tag_after.png";
import ImageCard from "./components/ImageCard";
import ImageCardReview from "./components/ImageCardReview";
import Separator from "./components/Separator";
import shareIcon from "./image/share.png";
import ReviewHeader from "./components/ReviewHeader/ReviewHeader";
import SideInfo from "./components/SideInfo/SideInfo";
import { Data } from "./data/Data";
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

const mainMenus = [
  {
    label: "지도",
    path: "",
  },
  {
    label: "AI 추천",
    path: "",
  },
  {
    label: "승계방",
    path: "",
  },
  {
    label: "혜택",
    path: "",
  },
];

export default function ReviewDetail() {
  const { roomId} = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const [newData, setNewData] = useState(null);
         useEffect(()=>{
      		const fetchData = async() => {
              const res = await axios.get("http://localhost:8080/reviews/"+`${roomId}`);
                return res.data;
              }
              fetchData().then(res => setNewData(res));
         },[])

  console.log(newData)

    // userData
   const [userData, setUserData] = useState([]);
    useEffect(()=>{
         const fetchData = async() => {
              const res = await axios.get('http://localhost:8080/user-info');
                   return res.data;
         }
         fetchData().then(res => setUserData(res));
    },[])

  console.log('user data :', userData)
  const [imageSrc, setImageSrc] = useState(tagIcon)
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부

       const handleClick = () => {
         if (isClicked) {
           setImageSrc(tagIcon);
             setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
             // 북마크 해제하면 db에서도 삭제
             axios
                 .post("http://localhost:8080/favorite", {
                     userId: userData.userId,
                     articleNo: newData.review_article.articleNo
                 })
                 .then((response) => {
                     console.log("200", response.data);

                     if (response.status === 200) {
                         console.log("즐찾 해제");
                     }
                 })
                 .catch((error) => console.log(error.response));
           } else {
             setImageSrc(aftertagIcon);
             setIsClicked(true); // true일 땐 변경될 이미지 src
             // 북마크 클릭했으니까 addressId를 db에 업데이트
             axios
                 .post("http://localhost:8080/favorite", {
                     userId: userData.userId,
                     articleNo: newData.review_article.articleNo
                 })
                 .then((response) => {
                     console.log("200", response.data);

                     if (response.status === 200) {
                         console.log("즐찾 성공");
                     }
                 })
                 .catch((error) => console.log(error.response));
           }
       };


  if(newData == null || userData == null){
    return "Loading";
  } else{
  return (
    <div className="layout_root">
      <div className="containerWrapper">
        <div className="container">
          <div className="header">
            <button onClick={handleGoBack} className="custom-button-with-icon">
              <img src={backButton} alt="backButton" />
              뒤로가기
            </button>
            <Separator height={"12px"} />
            <div className="subHeader">방 정보 {">"} 거주민리뷰</div>
          </div>
          <div className="reviewContent">
            <div className="userReviewContainer">
              <ImageCardReview imageItem={newData} height={"400px"} />
              <ReviewHeader user={newData} />
              <hr style={{ marginTop: "16px", color: "lightgray" }} />
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                {newData.review_article.contentText}
              </div>
              <Separator height={"40px"} />
              <div className="etcContainer">
                <div className="etcText">
                  {newData.review_article.regDate}
                </div>
                <div className="etcText">
                  조회 {newData.review_article.viewCnt}
                </div>
                <img
                   src={imageSrc}
                   alt="tagIcon"
                     style={{
                       width: "16px",
                       height: "16px",
                       strokeWidth: "10px",
                     }}
                       onClick={handleClick}
                />
              </div>
            </div>
            <div className="detailInfoContainer">
              <SideInfo item={newData} />
            </div>
          </div>
          <Separator height={"80px"} />
        </div>
      </div>
    </div>
  );
  }
}
