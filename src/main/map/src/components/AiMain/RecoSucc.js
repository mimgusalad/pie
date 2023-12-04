import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RecoSucc.css";

import houseReplaceImg from "../../img/reviewUploadImg/aiReplaceImg.png";
export default function RecoSucc(props) {

    return (
        <div id="conResult">
            <h1 class="content_result_title">이런 집은 어때요?</h1>
            <div class="content_result_area" style={{width: "1380px", height: "850px"}} >
            {
                props.recommendSuccList.map(function(succession){
                    return(<EleRecoSucc succession={succession}></EleRecoSucc>)
                })
            }
            </div>
        </div>
    );
}

function EleRecoSucc(props){
    const navigate = useNavigate();
    return(
        <div class="content_result_one" >
            <a> <img src={houseReplaceImg} onClick={(e) => {
                navigate(`/ai/homeDetail/${props.succession.addressName}`,{
                    state: {
                        eleSuccession : props.succession,
                    },})
            }} /></a>
            <div class="result_address_area">
            </div>
            <div class="result_address_text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 6.90909C13 10.7273 8 14 8 14C8 14 3 10.7273 3 6.90909C3 5.60712 3.52678 4.35847 4.46447 3.43784C5.40215 2.51721 6.67392 2 8 2C9.32608 2 10.5979 2.51721 11.5355 3.43784C12.4732 4.35847 13 5.60712 13 6.90909Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00163 8.54568C8.9221 8.54568 9.66829 7.81305 9.66829 6.90931C9.66829 6.00557 8.9221 5.27295 8.00163 5.27295C7.08115 5.27295 6.33496 6.00557 6.33496 6.90931C6.33496 7.81305 7.08115 8.54568 8.00163 8.54568Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="result_address">{props.succession.addressName}</span>
            </div>
        </div>
    )
}