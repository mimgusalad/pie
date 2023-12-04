import React, { useState,useRef }  from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import FormNavbar  from "../components/WriteForm/formNavbar";
import UploadPhotoIcon from "../img/writeForm/uploadPhoto.png";
import DaumPost from "../components/WriteForm/DaumPost";

import "./ReviewFormSidebar.css";
import "./WriteForm.css";
import "./WriteFormInputBox.css";


export default function SuccessionForm(){
    let [sidebarInnerTextList,setSidebarInnerText]=useState(["","","","","","",""]);
    let [sidebarElseTextList,setSidebarElse] = useState(["","","","",""]);
    let [optionCheckItems, setOptionCheckItems] = useState(new Array);
    let [successionCheckItems, setSuccessionCheckItems] = useState(new Array);
    let [imgPreviewSrc,setImgPreviewSrc] = useState([]);
    let [imgPreivewName, setImgPreviewName] = useState([]);
    let [addressObj,setAddressObj] = useState("");
    let [locationObj, setLocationObj] = useState("");
    const inputRef= useRef(null);

    var houseTypeList = ['원룸', '투룸', '쓰리룸', '오피스텔','아파트'];
    var payTypeList=['월세','전세'];
    var optionProductList=['싱크대','에어컨','신발장','세탁기','냉장고','옷장','책상','침대','가스레인지','전자레인지'];
    var successionProductList=['책상','의자','전신거울', '탁자','행거','매트리스'];
    const navigate = useNavigate();
    
    function submitSuccession(){
        const sendData = {
            "houseType": sidebarInnerTextList[0],
            "addressName" : addressObj,
            'addressDetail' : sidebarInnerTextList[2],
            "periodYear" : sidebarInnerTextList[3],
            "periodMonth" : sidebarInnerTextList[4],
            "periodDay" : sidebarInnerTextList[5],
            "payType" : sidebarInnerTextList[6],
            "payment" : sidebarElseTextList[0],
            "deposit" : sidebarElseTextList[2],
            "fee" : sidebarElseTextList[2],
            "contentTitle" : sidebarElseTextList[3],
            "contentText" : sidebarElseTextList[4],
            "optionQuality" : optionCheckItems,
            "successionQuality" : successionCheckItems,
        }
        const formData = new FormData();
        const fileData = inputRef.current.files;

        for(let i=0; i< fileData.length; i++){
            formData.append("file",fileData[i]);
        }

        formData.append("sendData", new Blob([JSON.stringify(sendData)],  { type: "application/json" }));
        axios.post('http://localhost:8080/succession/form',formData).then((response) =>{
            console.log(response.data)
            // <Link to={`/detail/:roomId/review/:reviewId}`>
            navigate(`/succession/detail/${response.data.successionId}`,{
                state: {
                    eleSuccession : response.data.successionForm,
                },})
        }
        )
    }
    function insertSidebarInnerText(e){
        let copy = [...sidebarInnerTextList];
        var inputName = e.target.name;
        if (inputName == "addressName"){
            copy[1] = e.target.value;
        } else if (inputName == "addressDetail"){
            copy[2] = e.target.value;
        } else if (inputName == "periodYear"){
            copy[3] = e.target.value;
        } else if (inputName == "periodMonth"){
            copy[4] = e.target.value;
        } else if (inputName == "periodDay"){
            copy[5] = e.target.value;
        }
        setSidebarInnerText(copy);
    }

    function insertElseData(e){
        let copy = [...sidebarElseTextList];
        var inputName = e.target.name;
        console.log(e.target)
        if (inputName == "payment"){
            copy[0] = e.target.value;
        } else if(inputName == "deposit"){
            copy[1] = e.target.value;
        } else if (inputName == "fee"){
            copy[2] = e.target.value;
        } else if (inputName == "contentTitle"){
            copy[3] = e.target.value;
        } else if (inputName == "contentText"){
            copy[4] = e.target.value;
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
    
    const checkItemHandler = (id, isChecked,name) =>{
        if (isChecked){
            if(name == "optionProduct"){
                optionCheckItems.push(id)
                setOptionCheckItems(optionCheckItems)
                console.log(optionCheckItems)
            } else if(name == "successionProduct"){
                successionCheckItems.push(id)
                setSuccessionCheckItems(successionCheckItems)
                console.log(successionCheckItems)
            }
        } else if (!isChecked){
            if(name == "optionProduct"){
                let filtered  = optionCheckItems.filter((element) => element !== id);
                setOptionCheckItems(filtered)
                console.log(filtered)
            } else if(name == "successionProduct"){
                let filtered = successionCheckItems.filter((element) => element !== id);
                setSuccessionCheckItems(filtered)
                console.log(filtered)
            }
        }
    }
    
    return (
        <div>
            <FormNavbar siteRoute="succession"></FormNavbar>
            <section className="container">
                <div className="writeFormContent">
                    <div className="content_form" id="conHouseType" data-ke-size="size26" style={{height:"190px"}}>
                        <h3 className="content_form_title">방구조</h3>
                        <p className="content_form_subtitle">리뷰를 작성할 집의 구조 형태를 선택해주세요.</p>
                        <RadioBtn ValueList={houseTypeList} NameValue="houseType"  sidebarInnerTextList={sidebarInnerTextList} setSidebarInnerText={setSidebarInnerText}></RadioBtn>
                    </div>

                    <div className="content_form" id="conLocationInfo" data-ke-size="size26" style={{height:"300px"}}>
                        <h3 className="content_form_title">위치정보</h3>
                        <p className="content_form_subtitle">주소와 거주년도를 입력해주세요.</p>
                        <label for="address"></label>
                        <form className="content_form_location" method="post">
                            <input className="content_form_addressInput" type="text" placeholder="도로명, 건물명 지번 입력" id="address" name="addressName" 
                            value={addressObj} required onInput={ (e) => insertSidebarInnerText(e)} />
                            <DaumPost setAddressObj={setAddressObj} setLocationObj={setLocationObj}></DaumPost>
                        </form>
                        <input className="content_form_addressInput" type="text" placeholder="상세 주소를 입력해주세요." id="addressDetail" name="addressDetail" required onInput={ (e) => insertSidebarInnerText(e)} />
                        <div className="content_term">
                            <span className="content_term_title">계약기간</span>
                                <input className="content_term_select" type="text" placeholder="계약년도" id="periodYear" name="periodYear" required readonly onInput={ (e) => insertSidebarInnerText(e)}/>
                                <input className="content_term_select" type="text" placeholder="월" id="periodMonth" name="periodMonth" required readonly onInput={ (e) => insertSidebarInnerText(e)}/>
                                <input className="content_term_select" type="text" placeholder="일" id="periodDay" name="periodDay" required readonly onInput={ (e) => insertSidebarInnerText(e)}/>
                        </div>
                    </div>

                    <div className="content_form" id="conPayType" data-ke-size="size26" style={{height: "190px"}}>
                        <h3 className="content_form_title">거래 정보</h3>
                        <p className="content_form_subtitle">리뷰를 작성할 집의 정보를 선택해주세요</p>
                        <RadioBtn ValueList={payTypeList} NameValue="payType" sidebarInnerTextList={sidebarInnerTextList} setSidebarInnerText={setSidebarInnerText}></RadioBtn>
                    </div>

                    <div className="content_form" id="conBasicInfo" data-ke-size="size26">
                        <h3 className="content_form_title">기본 정보</h3>
                        <p className="content_form_subtitle">승계할 집의 정보를 선택해주세요.</p>
                        <div className="content_input_fee">
                            <label className="content_input_fee_title" for="payment">관리비</label>
                            <input type="text" id="payment" name="payment" placeholder="예)5만원" required onInput={(e)=>insertElseData(e)} />
                        </div>
                        <div className="content_input_fee">
                            <label className="content_input_fee_title">금액</label>
                            <label className="content_input_fee_subtitle" for="deposit">보증금</label>
                            <input type="text" id="deposit" name="deposit" placeholder="(단위:만원)" required onInput={(e)=>insertElseData(e)}/>
                            <label className="content_input_fee_subtitle" for="fee">월세</label>
                            <input type="text" id="fee" name="fee" placeholder="(단위:만원)" onInput={(e)=>insertElseData(e)}/>
                        </div>

                        <div class="content_input_product">
                            <label class="content_input_fee_title">옵션 항목</label>
                            <div style={{display:"inline-block", width: "520px"}}>
                                <CheckboxBtn ValueList={optionProductList} NameValue="optionProduct" checkItemHandler={checkItemHandler}></CheckboxBtn>
                            </div>
                        </div>

                        <div class="content_input_product">
                            <label class="content_input_fee_title">승계물품</label>
                            <CheckboxBtn ValueList={successionProductList} NameValue="successionProduct" checkItemHandler={checkItemHandler}></CheckboxBtn>
                        </div>
                    </div>

                    <div className="content_form" id="conText" data-ke-size="size26" style={{height: "417px"}}>
                        <h3 className="content_form_title" for="content">상세 설명</h3>
                        <p className="content_form_subtitle">집에 대한 정보를 상세하게 적어주세요.</p>
                        <div className="content_input_text">
                            <input type="text" id="contentTitle" name="contentTitle" placeholder="제목을 작성해주세요." onInput={ (e) => insertElseData(e)}/>
                            <br />
                            <textarea className="form-control" id="contentText" name= "contentText" rows="10" placeholder="내용을 입력해주세요" onInput={ (e) => insertElseData(e)}></textarea>
                        </div>
                    </div>

                    <div className="content_form" id="conPhoto" data-ke-size="size26" style={{height:"311px" ,marginBottom: "200px"}}>
                        <h3 className="content_form_title">사진 첨부하기</h3>
                        <p className="content_form_subtitle">방 리뷰할 사진을 등록해주세요.</p>
                        <div className="content_photo">
                            <form encType='multipart/form-data' method="post">
                                <input className="content_photo_input" ref={inputRef} type="file" name="myfile" multiple="multiple" accept="image/*" onChange={uploadPhoto}/>
                                <div className="content_photo_imgarea" onClick={ () => {
                                    const realUpload = document.querySelector('.content_photo_input');
                                    realUpload.click();
                                }}>
                                    <img src={UploadPhotoIcon} alt="사진올리기" />
                                </div>
                            </form>
                            <output id="content_photo_preview" class="content_photo_preview">
                                {
                                    imgPreviewSrc.map( (imgSrc, idx) => {
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
                <Sidebar sidebarInnerTextList={sidebarInnerTextList} submitSuccession = {submitSuccession} addressObj={addressObj}></Sidebar>
            </section>
        </div>
    );
}

function RadioBtn(props){
    return (    
        props.ValueList.map(function(value){
            return(
                <div className="content_writeform_radioBtn">
                    <input id={ value } type="radio" name={ props.NameValue } value={ value }  onClick={ (e) => {
                        var inputName = e.target.name;
                        var innerValue = e.target.value;
                        let copy = [...props.sidebarInnerTextList];

                        inputName == "houseType" ? copy[0] = innerValue : copy[6] = innerValue;
                        props.setSidebarInnerText(copy);
                    }} />
                    <label for={ value }>{ value }</label>
                </div>
            )
        })        
    );
}


function CheckboxBtn(props){
    const [checked,setChecked] = useState(false);

    const checkHandled = ({target}) =>{
        setChecked(!checked);
        props.checkItemHandler(target.id, target.checked,target.name);
    };

    return(
        props.ValueList.map(function(value){
            return(
                <div class="content_writeform_checkBtn">
                        <input id={ value } type="checkbox" name={props.NameValue} value={ value } onChange={(e)=> checkHandled(e)}/>
                        <label for={ value }>{ value }</label>
                    </div>
            )
        })
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
                    <li><a className="sidebar_content_title" href="#conLocationInfo">위치정보</a></li>
                    <li><p className="text_select_result">{props.addressObj}</p></li>
                    <li><p className="text_select_result">{props.sidebarInnerTextList[2]}</p></li>
                    <li><a className="sidebar_content_title" href="#conTerm">계약 기간</a></li>
                    <li><p className="text_select_result">{`${props.sidebarInnerTextList[3]}년 ${props.sidebarInnerTextList[4]}월 ${props.sidebarInnerTextList[5]}일`}</p></li>
                    <li><a className="sidebar_content_title" href="#conPayType">거래 정보</a></li>
                    <li><p className="text_select_result">{props.sidebarInnerTextList[6]}</p></li>
                    <li><a className="sidebar_content_title" href="#conBasicInfo">기본 정보</a></li>
                    <li><a className="sidebar_content_title" href="#conText">추가 내용</a></li>
                    <li><a className="sidebar_content_title" href="#conPhoto">사진</a></li>
                    <li><input id="sidebar_btn_submit" type="submit" value="계약서 인증" onClick={props.submitSuccession}/></li>
                    <li><input id="sidebar_btn_return" type="button" value="뒤로가기" /></li>
                    <li><h2 className="sidebar_btn_certificatation"/>입주민 인증하기</li>
                </ul>
            </div>
        </aside>
    );
}