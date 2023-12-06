import React, { useState } from "react";
import { useLocation,NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

import FormNavbar  from "../components/WriteForm/formNavbar";
import Alterimg from "../img/reviewUploadImg/altRoomPicture.png";
import "./WritableReview.css";


export default function WritableReview(){
    const location = useLocation();
    const reviewList = {...location.state};
    
    return (
        <div>
            <FormNavbar siteRoute="review" />
            <div className="container">
                <div className="content_review_area">
                {
                reviewList.myReviewList.map(function(review, index){
                    const myReviewImgSrc = reviewList.myReviewImgSrc;
                    return(<Review oneReview = {review} myReviewImgSrc={reviewList.myReviewImgSrc[index]} userId={reviewList.userId}></Review>)
                })
                }
                </div>
            </div>      
        </div>
    )
}

function Review(props){
    const navigate = useNavigate();

    return(
        <div className="content_each_review" >
            { props.myReviewImgSrc == "/img/reviewUploadImg/altRoomPicture.png" ? 
            <img className="img_reviewPreview" src={Alterimg} onClick={(e) => {
                navigate(`/detail/review/${props.oneReview.articleNo}/${props.userId}`,{
                    state: {
                        eleReview : props.oneReview,
                    },})
            }} /> 
            : <img className="img_reviewPreview" src={props.myReviewImgSrc} onClick={(e) => {
                navigate(`/detail/review/${props.oneReview.articleNo}/${props.userId}`,{
                    state: {
                        eleReview : props.oneReview,
                    },})
            }} />}
            <h1 className="text_address">{props.oneReview.address}</h1>
            <div className="bottom_info">
                <div className="content_rating_area">
                    <span className="rating">
                    ★★★★★
                    <span className="rating_star" style={{width : `${props.oneReview.rating * 10}%`}}>★★★★★</span>
                    <input className="rating_input" id="rating" name="rating"  type="range" value={props.oneReview.rating} step="1" min="0" max="10" />
                    </span>
                </div>
                <h1 className="text_regdate">{props.oneReview.regdate}</h1>
            </div>
        </div>
    )
}