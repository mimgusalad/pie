import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./SuccDetail.css";
import backButton from "./image/back.png";
import ImageCard from "./components/ImageCard";
import Separator from "./components/Separator";
import shareIcon from "./image/share.png";
import ReviewHeader from "./components/ReviewHeader/ReviewHeader";
import SuccHeader from "./components/ReviewHeader/SuccHeader";
import { Data } from "./data/Data";
import SuccSideInfo from "./components/SuccSideInfo/SuccSideInfo";
import { succData } from "./data/succData";
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

export default function SuccDetail() {
  let { succId } = useParams();
  console.log(succId)
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState([]);
 // useEffect 렌더링 후에 값이 return 값에 들어가야함
       useEffect(()=>{
            setLoading(true)
    		const fetchData = async() => {
              const res = await axios.get("http://localhost:8080/articles/18");
              return res.data;
            }

            fetchData().then(setLoading(false),res => setNewData(res));
       },[])

      console.log(newData)
      if(loading) return(
        <div>로딩중...</div>
      )

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
            <div className="subHeader">승계방 {">"} 승계글 자세히 보기</div>
          </div>
          <div className="reviewContent">
            <div className="userReviewContainer">
              <ImageCard imageItem={newData} height={"400px"} />
              {/* reviewheader에 맞게 succData 수정 */}
              <SuccHeader user={newData} />
              <hr style={{ marginTop: "16px", color: "lightgray" }} />
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                {newData.succession_article.contentText}
              </div>
              <Separator height={"40px"} />
              <div className="etcContainer">
                <div className="etcText">
                  {newData.succession_article.regDate}
                </div>
                <div className="etcText">
                  조회 {newData.succession_article.viewCnt}
                </div>
                <img
                  src={shareIcon}
                  alt="shareIcon"
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>
            <div className="detailInfoContainer">
              <SuccSideInfo item={newData} />
            </div>
          </div>
          <Separator height={"80px"} />
        </div>
      </div>
    </div>
  );
}
