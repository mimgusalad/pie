import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RecoReview.css";

import locationMark from "../../img/btnImg/locationMark.png";


export default function RecoReview(props){

    return (
        <div id="content_review_area" className="content_review_area">
            <h1 className="content_review_title">회원님에게 유익한<br />리뷰글을 추천드립니다.</h1>
            <div style={{width: "1380px", height: "230px;"}}>
            {props.recommendReviewList.map(function(review){
                return(
                    <EleRecoReview review={review}></EleRecoReview>
                )
            })}
            </div>
            <a className="review_more_link" >더보기</a>
        </div>
    );
}

function EleRecoReview(props){
    const navigate = useNavigate();
    return(
        <div className="content_review_each">
            <img className="review_location_mark" src={locationMark} />
            <span className="review_address" >{props.review.addressName}</span>
            <p className="review_content" >{props.review.contentText}</p>
            <span className="review_recommend_title">추천</span>
            <span className="review_recommend_cnt" ></span>
            <span className="review_detail_link" ><a onClick={()=>{
                navigate(`/review/detail/${props.review.articleNo}`,{
                    state: {
                        eleReview : props.review,
                    },})
            }}>보러가기</a></span>
        </div>
    )
}