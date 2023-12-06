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

//async function getData(){
//console.log("요청 들어옴")
//var res = await axios.get('localhost:8080/articles/18');
//console.log(res.data);
//}
export default function SuccDetail() {
//getData();
  let { succId } = useParams();
  let succIdtoLong = parseInt(succId);
  console.log(succIdtoLong)
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState(null);
  const [filterData, setFilterData] = useState([]);
  //setNewData(getData(18));
       useEffect(()=>{
    		const fetchData = async() => {
//              const res = await axios.get(`http://localhost:8080/articles/succId`);
            const res = await axios.get("http://localhost:8080/articles/"+`${succIdtoLong}`);
              return res.data;
            }
            fetchData().then(res => setNewData(res));
       },[])

      console.log(newData)

  if(newData == null){
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
}
