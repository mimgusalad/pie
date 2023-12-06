import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import WritableReview from "../../pages/WritableReview";

let NaviBar = styled.nav`
    width: 100%;
    height: 52px;

    background: var(--text-white, #FFF);
`

let UnitList = styled.ul`
    margin:0;
    padding-left:320px;
    list-style:none;
`

let ComList = styled.li`
    padding:14px;
    display: inline-block;
`
let LinkText = styled.a`
    color: var(--text-tertiary, #A4A4A4);
    text-decoration:none;

    /* Title 2/SemiBold */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
    &:hover{
        color: var(--primary-normal, #459830);
    }
    &:hover:after{
        content: "";
        display: block;
        border-bottom: 1px solid #459830;
        margin: 14px auto;
    }
`
export default function FormNavbar(props){
    const navigate = useNavigate();

    const NavigateToMyReview = () => {
        axios.get('http://localhost:8080/review/myReview')
        .then(response => {
            console.log(response.data)
            navigate("/review/my/writable-review", { 
                state: {
                    myReviewList : response.data.myReviewList,
                    myReviewImgSrc : response.data.previewImgUrlList,
                },});
            //<WritableReview myReviewList={response.data.myReviewList}  myReviewImgSrc={response.data.previewImgUrlList}/>
        })
    };
    const NavigateToReviewForm = () => {
        navigate("/review/form");
    };
    const NavigateToSuccessionForm = () => {
        navigate("/succession/form");
    };
    
    
    return (
        <NaviBar>
            <UnitList>
                {
                    props.siteRoute == "review" 
                    ? (
                        <>
                            <ComList><LinkText onClick={NavigateToReviewForm}>리뷰쓰기</LinkText></ComList>
                            <ComList><LinkText onClick={NavigateToMyReview}>내가 작성한 리뷰</LinkText></ComList>
                        </>
                    )
                    : (
                        <>
                            <ComList><LinkText onClick={NavigateToSuccessionForm}>승계글 쓰기</LinkText></ComList>
                        </>
                    )
                }
                
            </UnitList>
        </NaviBar>
        
    );
}