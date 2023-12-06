import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ReviewDetailPage.css";

import Separator from "../components/Separator";
import nextArrow from "../image/next.png";
import prevArrow from "../image/back.png";

import backButton from "../image/backward.png";
import shareIcon from "../img/btnImg/shareIcon.png";
import redMark from "../img/disadvantageMark/redMark.png";
import orangeMark from "../img/disadvantageMark/orangeMark.png";
import yellowMark from "../img/disadvantageMark/yellowMark.png";
import noneMark from "../img/disadvantageMark/noneMark.png";
import replaceImg from "../img/reviewUploadImg/reviewDetailExample.png";
import axios from "axios";


export default function ReviewDetailPage(){
    const location = useLocation();
    const getData = {...location.state};
    const review = getData.eleReview;
    const navigate = useNavigate();
    const { reviewId } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);

    let [keywordList, setKeywordList] = useState(new Array);
    let [imgUrlList, setImgUrlList] = useState(new Array);

    const handleGoBack = () => {
      navigate(-1);
    };
    const sliderStyle = {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: "transform 0.5s ease-in-out",
      display: "flex",
      height: "100%",
    };
    
  const handlePrev = () => {
    // if (currentIndex > 0) {
    //   setCurrentIndex(currentIndex - 1);
    // } else {
    //   setCurrentIndex(imageData.images.length - 1);
    // }
  };

  const handleNext = () => {
    // if (currentIndex < imageData.images.length - 1) {
    //   setCurrentIndex(currentIndex + 1);
    // } else {
    //   setCurrentIndex(0);
    // }
  };

    useEffect(() => {
        axios.get(`http://localhost:8080/review/detail/${reviewId}`).then((res)=>{
                console.log(res.data)
                keywordList = res.data.keywordList;
                setKeywordList({...res.data.keywordList});
                setImgUrlList([...res.data.imgUrlList]);
                console.log(res.data.imgUrlList)
            })
      }, []);

    return (
        <div className="layout_root">
          <div className="containerWrapper">
            <div >
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
                    <div className="slider_content">
                        <div className="slider__img">
                            <div className="slider__inner">
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
                                <div className="imgInfo" >
                                    {
                                        imgUrlList.map(function(imgUrl){
                                            console.log(imgUrl)
                                            return(
                                                imgUrl == "/img/reviewUploadImg/reviewDetailExample.png" ? <img src={replaceImg} /> : <img src={imgUrl} />
                                            )
                                        })
                                    }
                                </div>
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
                            </div>
                        </div>
                            

                    </div>
                    <div className="sucContent">
                        <span className="writerNickname">닉네임</span>
                        <span className="content_livingYear">{`${review.livingYear}년까지 거주`}</span>
                        <span className="starPoint">{review.rating/2}</span>
                        <span className="starImg">★</span>
                        <span className="seContent">{review.contentText}</span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                        <img src={shareIcon}></img>
                    </div>
                </div>
                <div className="detailInfoContainer">
                    <div className="upperInfo">
                        <span>주소</span> <p>{`${review.address}  ${review.addressDetail}`}</p>
                        <span>방구조</span> <p>{review.houseType}</p>
                    </div>
                    <span>건물정보</span>
                    <div className="buildingInfo">
                        <h4>관리비</h4><p>{review.managementFee}</p>

                        <h4>금액</h4> <p>{`${review.deposit}만원 / ${review.fee}만원`}</p>

                        <img src={redMark} /> <h5>심각</h5>                        
                        <h6 className="text_keyword">{keywordList[1]}</h6>
                        <br />
                        <img src={orangeMark} /> <h5>경계</h5>                        
                        <h6 className="text_keyword">{keywordList[2]}</h6>
                        <br />
                        <img src={yellowMark} /> <h5>주의</h5>                        
                        <h6 className="text_keyword">{keywordList[3]}</h6>
                        <br />
                        <img src={noneMark} /> <h5>문제없음</h5>                        
                        <h6 className="text_keyword">{keywordList[4]}</h6>
                    </div>
                </div>
              </div>
              <Separator height={"80px"} />
            </div>
          </div>
        </div>
      );
}