import React, { useState,useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import redMark from "../img/disadvantageMark/redMark.png";
import orangeMark from "../img/disadvantageMark/orangeMark.png";
import yellowMark from "../img/disadvantageMark/yellowMark.png";
import noneMark from "../img/disadvantageMark/noneMark.png";

import KakaoMap from "../components/AiMain/KakaoMap";

import "./AiRecoSuccDetail.css";


export default function AIRecoSuccDetial(){
    
    let [addressObj, setAddressObj] = useState();
    let [reviewList, setReviewList] = useState(new Array);
    const navigate = useNavigate();
    const { articleNo } = useParams();

    const handleGoBack = () => {
        navigate(-1);
      };

    const GetData = async() => {
        await axios.get(`http://localhost:8080/ai/homeDetail/${articleNo}`).then((res)=>{
            console.log(res.data)
            // keywordList = res.data.keywordList;
            setAddressObj(res.data.address);
            setReviewList([...res.data.reviewList]);
            console.log(res.data.imgUrlList)
        })
    }
    useEffect(() => {
        GetData()
      }, []);

      return(
        <div style={{margin: "0px 200px"}}>
        <div className="content_subTop">
            <a onClick={handleGoBack}>{"<"} </a>
            <span className="text_site_route">AI 추천 {">"} 추천 집 상세보기</span>
            <button type="button">
                {/* <img src="/img/shareIcon.png" alt="공유" /> */}
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="20" fill="white"/>
                    <path d="M27 29L20 24L13 29V13C13 12.4696 13.2107 11.9609 13.5858 11.5858C13.9609 11.2107 14.4696 11 15 11H25C25.5304 11 26.0391 11.2107 26.4142 11.5858C26.7893 11.9609 27 12.4696 27 13V29Z" stroke="#26282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div className="content_home_picture">
            
        </div>
        <div className="content_first_info_area">
            <div className="content_home_address">
                <h1 className="text_home_title" />건물 주소
                <h4 className="text_home_address" > {addressObj?.roadAddress} </h4>
                <span className="text_home_stNum_title" >지번 </span>
                <span className="text_home_stNum" > {addressObj?.address}</span>
                <KakaoMap latitude={addressObj?.latitude} longitude={addressObj?.longitude}/>
            </div>

            <div className="content_home_disInfo">
                <h1 className="text_home_title">건물 정보</h1>
                <div className="home_disInfo_area">
                    <ShowKeyword></ShowKeyword>
                </div>
            </div>
        </div>

        <div className="content_home_review">
            <div className="home_review_top">
                <h1 className="text_home_title">거주민 리뷰 </h1>
                <a className="href_more_review" > 더보기</a>
            </div>

            <ShowReview reviewList={reviewList}></ShowReview>
        </div>
        <div className="content_home_detail_info">
            <h1 className="text_home_title">건물 상세 정보 </h1>
            <div>
                <ShowAddressDetail address={addressObj}></ShowAddressDetail>
            </div>

        </div>

    </div>
      );

}

function ShowKeyword(){
    var keywordList = ['심각', '주의','경계', '문제없음'];
    var colorList = [redMark, orangeMark, yellowMark, noneMark];

    return(
        keywordList.map(function(keyword, index){
            return(
                <div className="home_eachDis_area">
                    <img src={colorList[index]} />
                    <span className="text_dis_title">{keyword} </span>
                    <div className="home_disInfo_text_area">
                    </div>
                </div>
            )
        })
    )
}

function ShowReview(props){
    return(
        props.reviewList.map(function(review){
            return(
                <div className="home_review_area" >
                <div className="home_eachReivew_area" >
                    <div className="review_top_area">
                        <div className="writer_profile_area">
                            <img className="writer_profile" />
                        </div>
                        <span className="writer_nickname">닉네임</span>
                        <span className="review_livingYear">{`${review.livingYear}년까지 거주`}</span>
                        <span className="rating_star">★</span>
                        <span>{review.rating/2}</span>
                    </div>
                    <div className="review_content_area">
                        <img />
                        <div>
                            <span className="content_title">상세 리뷰</span>
                            <p className="content_detail" >{review.contentText}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    )
}

function ShowAddressDetail(props){
    const detailContent_kor = ["빌딩 이름", "우편 번호", "건물 용도", "건물 구조", "주차 대수","세대 수", "방향", "공급면적", "층 수"];
    const detailContent_eng = ["buildingName", "zone_no", "household","","","household","","",""];

    return(
        <table>
            {
                detailContent_kor.map(function(title, index){
                    return(
                        <tr>
                            <th className="table_column_title">{title}</th>
                            {index == 0 ? <td className="table_content">{props.address?.buildingName}</td> : 
                            (index == 1 ? <td className="table_content">{props.address?.zone_no}</td> : 
                            (index == 2 ? <td className="table_content">{props.address?.household}</td> :<td className="table_content"></td> ))}
                        </tr>
                    )
                })
            }
        </table>
    )

}