import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import FormNavbar  from "../components/WriteForm/formNavbar";
import DaumPost from "../components/WriteForm/DaumPost";
import UploadPhotoIcon from "../img/writeForm/uploadPhoto.png";

import "./ReviewFormSidebar.css";
import "./WriteForm.css";
import "./WriteFormInputBox.css";


export default function ReviewForm(){
    let [sidebarInnerTextList,setSidebarInnerText]=useState(["","","","",""]);
    let [sidebarElseTextList, setSidebarElse] = useState(["","","","","",""]);
    let [keywordValueList, setKeywordValueList] = useState([0,0,0,0,0,0,0,0]);
    let [imgPreviewSrc,setImgPreviewSrc] = useState([]);
    let [imgPreivewName, setImgPreviewName] = useState([]);
    let [addressObj,setAddressObj] = useState("");
    let [locationObj, setLocationObj] = useState("");

    var houseTypeList = ['원룸', '투룸', '쓰리룸', '오피스텔','아파트'];
    var payTypeList=['월세','전세'];
    var keywordList = ["소음","치안","쓰레기 처리", "냄새","옵션 상태", "일조량", "벌레","편의시설"]
    const navigate = useNavigate();

    function submitReview(){
        const sendData = {
            "houseType": sidebarInnerTextList[0],
            "payment": sidebarInnerTextList[1],
            "managementFee" : sidebarInnerTextList[2],
            "addressName" : addressObj,
            'addressDetail' : sidebarInnerTextList[4],
            "deposit" : sidebarElseTextList[0],
            "fee" : sidebarElseTextList[1],
            "livingYear" : sidebarElseTextList[2],
            "contentTitle" : sidebarElseTextList[3],
            "contentText" : sidebarElseTextList[4],
            "rating" : sidebarElseTextList[5],
            "noise" : keywordValueList[0],
            "safety" : keywordValueList[1],
            "trash" : keywordValueList[2],
            "smell" : keywordValueList[3],
            "optionQuality" : keywordValueList[4],
            "sunlight" : keywordValueList[5],
            "insect" : keywordValueList[6],
            "convenience" : keywordValueList[7],
            "certification" : 0,
            "files" :0 
        }
        console.log(sendData)
        axios.post('http://localhost:8080/review/form',sendData).then((response) =>{
            console.log(response.data)
            navigate(`/review/detail/${response.data.reviewId}`,{
                state: {
                    eleReview : response.data.reviewForm,
                },})
        }
        )
    }
    

    function insertSidebarInnerText(e){
        let copy = [...sidebarInnerTextList];
        var inputName = e.target.name;
        if (inputName == "payment"){
            copy[2] =  e.target.value;
        } else if (inputName == "addressName"){
            copy[3] = e.target.value;
        } else{
            copy[4] = e.target.value;
        }
        setSidebarInnerText(copy);
    }

    function insertElseData(e){
        let copy = [...sidebarElseTextList];
        var inputName = e.target.name;
        if (inputName == "deposit"){
            copy[0] = e.target.value;
        } else if (inputName == "fee"){
            copy[1] = e.target.value;
        } else if (inputName == "livingYear"){
            copy[2] = e.target.value;
        }else if (inputName == "contentTitle"){
            copy[3] = e.target.value;
        }else if (inputName == "contentText"){
            copy[4] = e.target.value;
        }else if (inputName == "rating"){
            copy[5] = e.target.value;
        }

        setSidebarElse(copy);
    }

    function uploadPhoto(e){
        if (window.File && window.FileList && window.FileReader) {
            let plusName = [];
            let plusSrc = [];
            var files = e.target.files; //FileList object
            var output = files.length;
            var classCnt = imgPreviewSrc.length;
            
            if((classCnt + output) > 4){
                alert("이미지는 최대 4장까지 업로드 가능합니다.")
                return;
            }
    
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                //Only pics
                if (!file.type.match('image')) {
                    continue;
                }
                plusName.push(file.name);
                var picReader = new FileReader();
                picReader.addEventListener("load", function (event) {
                    var picFile = event.target;
                    setImgPreviewSrc([...imgPreviewSrc, picFile.result]);
                });
                //Read the image
                picReader.readAsDataURL(file);
            }
            console.log(plusSrc)
            setImgPreviewName([...imgPreivewName,plusName]);
        } else {
            console.log("fail")
        }
    }

    const showYear = () =>{
        const result = [];
        for (let i = 2023; i > 2000; i--){
            result.push(<option value={i} key={i}>
                {i+"년"}
              </option>)
        }
        return result;
    };


    return(
        <div>
            <FormNavbar siteRoute="review" />
            <section className="container">
                <div className="writeFormContent">
                    <div className="content_form" id="conHouseType" data-ke-size="size26" style={{height:"190px"}}>
                        <h3 className="content_form_title">방구조</h3>
                        <p className="content_form_subtitle">리뷰를 작성할 집의 구조 형태를 선택해주세요.</p>
                        <RadioBtn ValueList={houseTypeList} NameValue="houseType" sidebarInnerTextList={sidebarInnerTextList} setSidebarInnerText={setSidebarInnerText} ></RadioBtn>
                    </div>

                    <div className="content_form" id="conPayType" data-ke-size="size26" style={{height: "190px"}}>
                        <h3 className="content_form_title">거래 정보</h3>
                        <p className="content_form_subtitle">리뷰를 작성할 집의 정보를 선택해주세요</p>
                        <RadioBtn ValueList={payTypeList} NameValue="payType" sidebarInnerTextList={sidebarInnerTextList} setSidebarInnerText={setSidebarInnerText}></RadioBtn>
                    </div>
                    
                    <div className="content_form" id="conBasicInfo" data-ke-size="size26" style={{height: "240px"}}>
                        <h3 className="content_form_title">기본 정보</h3>
                        <p className="content_form_subtitle">리뷰를 작성할 집의 정보를 선택해주세요.</p>
                        <div className="content_input_fee">
                            <label className="content_input_fee_title" for="payment">관리비</label>
                            <input type="text" name="payment" id="payment" placeholder="예)5만원" required onInput={ (e) => insertSidebarInnerText(e)} />
                        </div>
                        <div className="content_input_fee">
                            <label className="content_input_fee_title">금액</label>
                            <label className="content_input_fee_subtitle" for="deposit">보증금</label>
                            <input type="text" id="deposit" placeholder="가격(단위:만원)" name="deposit" required onInput={ (e) => insertElseData(e)}/>
                            <label className="content_input_fee_subtitle" for="fee">월세</label>
                            <input type="text" id="fee"  placeholder="가격(단위:만원)" name="fee" onInput={ (e) => insertElseData(e) }/>
                        </div>
                    </div>

                    <div className="content_form" id="conLocationInfo" data-ke-size="size26" style={{height:"240px"}}>
                        <h3 className="content_form_title">위치정보</h3>
                        <p className="content_form_subtitle">주소와 거주년도를 입력해주세요.</p>
                        <label for="address"></label>
                        <form className="content_form_location" method="post">
                            <input className="content_form_addressInput" type="text" placeholder="도로명, 건물명 지번 입력" id="address" name="addressName" 
                            value={addressObj} required onInput={ (e) => insertSidebarInnerText(e)} />
                            <DaumPost setAddressObj={setAddressObj} setLocationObj={setLocationObj}></DaumPost>
                            
                            <select name="livingYear" id="year" title="거주년도" className="select_year" required onChange={ (e) => insertElseData(e) }>
                                <option value="">거주년도</option>
                                {showYear()}
                            </select>
                           
                        </form>
                        <input className="content_form_addressInput" type="text" placeholder="상세 주소를 입력해주세요." id="addressDetail"  required onInput={ (e) => insertSidebarInnerText(e)} />
                    </div>

                    <div className="content_form" id="conWeakKeyword" data-ke-size="size26" style={{height:"619px"}}>
                        <h3 className="content_form_title">단점 키워드</h3>
                        <p className="content_form_subtitle">심각, 경계, 주의 순으로 단점 키워드를 선택해주세요.</p>
                        <div style={{border: "none"}}className="content_cons_header">
                            <h4 className="content_cons_title" style={{borderBottom: "1px solid #fc453a"}}>심각</h4>
                            <h4 className="content_cons_title" style={{borderBottom: "1px solid #ff8b72"}}>경계</h4>
                            <h4 className="content_cons_title" style={{borderBottom: "1px solid #ffc34e"}}>주의</h4>
                            <h4 className="content_cons_title" style={{borderBottom: "1px solid #c9cdd2"}}>문제없음</h4>
                        </div>
                        <div className="content_cons_form" style={{border: "none"}}>
                            {
                                keywordList.map((keywordName) => {
                                    return(
                                        <KeywordRadioBtn NameValue={keywordName} keywordValueList={keywordValueList} setKeywordValueList={setKeywordValueList}></KeywordRadioBtn>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="content_form" id="conText" data-ke-size="size26" style={{height: "417px"}}>
                        <h3 className="content_form_title" for="content">상세 설명</h3>
                        <p className="content_form_subtitle">집에 대한 정보를 상세하게 적어주세요.</p>
                        <div className="content_input_text">
                            <input type="text" id="contentTitle" name="contentTitle" placeholder="제목을 작성해주세요." onInput={ (e) => insertElseData(e)} />
                            <br />
                            <textarea className="form-control" id="contentText" name="contentText" rows="10" placeholder="내용을 입력해주세요" onInput={ (e) => insertElseData(e)} ></textarea>
                        </div>

                        <div className="content_input_star">
                            <span className="content_input_star_title">별점</span>
                            <span className="rating">
                            ★★★★★
                            <span className="rating_star">★★★★★</span>
                            <input className="rating_input" id="rating" name="rating"  type="range" step="1" min="0" max="10" onInput={(e)=>{
                                const rating_star = document.querySelector('.rating_star');
                                rating_star.style.width = `${e.target.value * 10}%`;
                                insertElseData(e);
                            }}/>
                            </span>
                        </div>
                    </div>

                    <div className="content_form" id="conPhoto" data-ke-size="size26" style={{height:"311px" ,marginBottom: "200px"}}>
                        <h3 className="content_form_title">사진 첨부하기</h3>
                        <p className="content_form_subtitle">방 리뷰할 사진을 등록해주세요.</p>
                        <div className="content_photo">
                            <input className="content_photo_input" type="file" name="files" multiple="multiple" accept="image/*" onChange={ uploadPhoto}/>
                            <div className="content_photo_imgarea" onClick={ () => {
                                const realUpload = document.querySelector('.content_photo_input');
                                realUpload.click();
                            }}>
                                <img src={UploadPhotoIcon} alt="사진올리기" />
                            </div>
                            <output id="content_photo_preview" class="content_photo_preview">
                                {
                                    imgPreviewSrc.map( (imgSrc, idx) => {
                                        console.log(idx)
                                        return(
                                        <div>
                                            <img className="thumbnail" src={imgSrc} name={imgPreivewName[idx]}></img>
                                        </div>
                                        )
                                    })
                                }
                            </output>
                        </div>
                    </div>
                </div>
                <Sidebar sidebarInnerTextList={sidebarInnerTextList} submitReview={submitReview} addressObj={addressObj}></Sidebar>
            </section>
        </div>
    );
}

function RadioBtn(props){
    return (    
        props.ValueList.map(function(value){
            return(
                <div className="content_writeform_radioBtn">
                    <input id={ value } type="radio" name={ props.NameValue } value={ value } onClick={ (e) => {
                        var inputName = e.target.name;
                        var innerValue = e.target.value;
                        let copy = [...props.sidebarInnerTextList];

                        inputName == "houseType" ? copy[0] = innerValue : copy[1] = innerValue;
                        props.setSidebarInnerText(copy);
                    }} />
                    <label for={ value }>{ value }</label>
                </div>
            )
        })        
    );
}

function KeywordRadioBtn(props){
    var keywordColorList=['red','orange','yellow','grey'];
    return(
        <div className="content_cons_form_keyword">
            <label className="content_cons_form_keyword_title">{props.NameValue}</label>
            {
                keywordColorList.map(function(color,idx){
                    return(
                        <input className={`content_cons_form_radiobtn_${color}`} name={props.NameValue} value={idx+1} type="radio" onClick={(e) =>{
                            const inputName = e.target.name;
                            let copy = [...props.keywordValueList];
                            if(inputName == "소음"){copy[0] = e.target.value;}
                            else if (inputName=="치안") {copy[1] = e.target.value;}
                            else if (inputName == "쓰레기 처리") {copy[2] = e.target.value;}
                            else if (inputName == "냄새") {copy[3] = e.target.value;}
                            else if (inputName == "옵션 상태") {copy[4] = e.target.value;}
                            else if (inputName == "일조량") {copy[5] = e.target.value;}
                            else if (inputName == "벌레") {copy[6] = e.target.value;}
                            else if (inputName == "편의시설") {copy[0] = e.target.value;}
                            props.setKeywordValueList(copy);
                        }}/>
                    )
                })
            }
        </div>   
    )
}

function Sidebar(props){
    return (
        <aside className="sidebar" id="sidebar">
            <div className="sidebar_content">
                <p className="sidebar_title" >리뷰 항목</p>
                <ul>
                    <li><a className="sidebar_content_title" href="#conHouseType">방구조</a></li>
                    <li><p className="text_select_result">{props.sidebarInnerTextList[0]}</p></li>
                    <li><a className="sidebar_content_title" href="#conPayType">거래 정보</a></li>
                    <li><p className="text_select_result">{props.sidebarInnerTextList[1]}</p></li>
                    <li><a className="sidebar_content_title" href="#conBasicInfo">기본정보</a></li>
                    <li><p className="text_select_result">{`관리비 : ${props.sidebarInnerTextList[2]}만원`}</p></li>
                    <li><a className="sidebar_content_title" href="#conLocationInfo">위치정보</a></li>
                    <li><p className="text_select_result">{props.addressObj}</p></li>
                    <li><p className="text_select_result">{props.sidebarInnerTextList[4]}</p></li>
                    <li><a className="sidebar_content_title" href="#conWeakKeyword">단점 키워드</a></li>
                    <li><a className="sidebar_content_title" href="#conText">내용 / 별점</a></li>
                    <li><a className="sidebar_content_title" href="#conPhoto">사진</a></li>
                    <li><input id="sidebar_btn_submit" type="submit" value="제출하기" onClick={props.submitReview} /></li>
                    <li><input id="sidebar_btn_return" type="button" value="뒤로가기" /></li>
                    <li><h2 className="sidebar_btn_certificatation"/>입주민 인증하기</li>
                </ul>
            </div>
        </aside>
    );
}

