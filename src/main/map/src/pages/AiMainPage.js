import "./AiMainPage.css";
import axios from "axios";

import { Icon } from '@iconify/react';
import React, {useState,useEffect} from "react";
import RecoSucc from "../components/AiMain/RecoSucc";
import RecoReview from "../components/AiMain/RecoReview";
import DropDown from "../components/AiMain/InputDropdown";
import PriceDropdown from "../components/AiMain/PriceInputDropdown";
const { kakao } = window;
const handleOnClick = (inputKeyword) => {
    searchPlaces(inputKeyword);
  };
  // 버튼에 적용할 클릭 이벤트 함수
  
  
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick(e.target.value); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

export default function AiMainPage() {
    let [imgIndex,changeIndex] = useState(0);
    let [resultCheck, setResultCheck] = useState(false);
    let [priceOption, setPriceOption] = useState(["","","","",""]);
    let [recommendReviewList, setRecommentReviewList] = useState(new Array);
    let [recommendSuccList,setRecommendSuccList] = useState(new Array);
    var res;

    useEffect( () =>{ let timer = setTimeout( () => {changeIndex((imgIndex+1)%4)},4000); });

    let [addressKeyword, setAddressKeyword] = useState("");
    const inputKeyword = (e) => {
        setAddressKeyword(e.target.value);
    }
    
    async function roomSearch(event){
        event.preventDefault();
        const sendData = {
            "address": document.getElementById('inputAddressKeyword').value,
            "purpose": sBtnInnerText[0],
            "keyword" : sBtnInnerText[1],
            "structure" : sBtnInnerText[2],
            'priceOption' : priceOption[0],
            "minDeposit" : priceOption[1],
            "maxDeposit" : priceOption[2],
            "minMonthlyRent" : priceOption[3],
            "maxMonthlyRent": priceOption[4]
        }

        try{
            res = await axios.post('http://localhost:8080/ai/list', sendData);
            console.log(res.data);
            setResultCheck(res.data.searchCheck);
            setRecommentReviewList(res.data.recommendReviewList);
            setRecommendSuccList(res.data.recommendSuccessionList);
            //setRecommendSuccList(res.data.recommendSuccessionList);
        }catch(err){
            console.log('err : '+err);
        }        
    }

    /* insert dropdown 어떤 걸 할지 */
    function showDropdown(e){
        console.log(priceOption)
        let copy = [...dropdownCheck];
        if (e.target.id != ""){
            let index = Number(e.target.id);
            let elementValue = copy[index];
            copy[index] = !elementValue;
        }      
        setDropdownCheck(copy)
    }

    let [dropdownCheck, setDropdownCheck] = useState([false, false, false, false]);
    let [sBtnInnerText, setInnerText] = useState(["신규/승계 선택해주세요.","단점 키워드를 선택해주세요.","구조를 선택해주세요.","월세 혹은 전세를 선택해주세요."]);

    var purposeList=['신규','승계'];
    var keywordList=['소음','옵션 상태', '치안', '일조량', '쓰레기 처리','벌레','냄새','편의시설'];
    var structureList = ['원룸', '투룸', '쓰리룸', '오피스텔', '아파트'];
    return (
        <div style={{textAlign : "-webkit-center"}}>
        <div className="content_main" id="conExplain">
            <div className="slideshow-container">{
                    imgIndex == 0 ?
                    (<div className="mySlides fade"><img src={`${process.env.PUBLIC_URL}/img/aiMainImg/1.png`} /></div>)
                    : (imgIndex == 1 ?
                        (<div className="mySlides fade"><img src={`${process.env.PUBLIC_URL}/img/aiMainImg/2.jpg`} /></div>)
                        : (imgIndex == 2 ?
                            (<div className="mySlides fade"><img src={`${process.env.PUBLIC_URL}/img/aiMainImg/3.jpg`} /></div>)
                            : (<div className="mySlides fade"><img src={`${process.env.PUBLIC_URL}/img/aiMainImg/4.jpg`} /></div>)
                            )
                        )
                }         
            </div>
            <h3 className="content_main_title">AI가 추천드리는<br />최적의 집과 마음에 드는 집</h3>
            <p className="content_main_subTitle">회원님의 활동을 기반으로 분석한 집을 소개해드립니다.</p>
        </div>

        <div id="menu_wrap" className="bg_white">
            <div className="option">
                <div>
                        <div id="addressKeywordArea">
                            <span className="content_input_title">주소</span>
                            <input type="text" id="inputAddressKeyword" name="inputAddressKeyword" 
                                placeholder="원하시는 지역명을 입력해주세요." onInput={(e)=>inputKeyword(e)} onKeyDown={(e)=>(handleOnKeyPress(e))}/>
                        </div>
                </div>
            </div>
            <div id="result" className="invisible">
                <ul id="placesList"></ul>
                <div id="pagination"></div>
            </div>
        </div>

        <form onSubmit={roomSearch}>
            <input type="text" className="addressInputObject" id="addressInput"  />
            <div className="content_input_area" id="conInputElse">
                <div className="select-menu" style={{width: "300px"}} onClick={ (e) => {showDropdown(e) }}>
                    <span className="content_input_title">목적</span>
                    <div className="select-btn" style={{width: "244px"}} id="0" >
                        <input className="objectInput" type="text"  />
                        <span className="sBtn-text" id="0">{sBtnInnerText[0]}</span>
                        {dropdownCheck[0] == true ? <Icon  icon="bx:chevron-down" rotate={2} /> : <Icon icon="bx:chevron-down"/>}
                    </div>{
                        dropdownCheck[0] == true
                        ? (
                            <ul className="options" style={{marginLeft: "55px"}}>
                                <DropDown DropDownList={purposeList}  index="0" sBtnInnerText={sBtnInnerText} setInnerText={setInnerText} dropdownCheck={dropdownCheck} setDropdownCheck={setDropdownCheck}></DropDown>
                            </ul>
                        ) : null
                    }
                    
                </div>

                <div className="select-menu" style={{width: "485px"}} onClick={ (e) => {showDropdown(e) }}>
                    <span className="content_input_title">단점 키워드</span>
                    <div className="select-btn" style={{width: "375px"}} id="1">
                        <input className="objectInput" type="text"  />
                        <span className="sBtn-text" id="1">{sBtnInnerText[1]}</span>
                        {dropdownCheck[1] == true ? <Icon  icon="bx:chevron-down" rotate={2} /> : <Icon icon="bx:chevron-down"/>}
                    </div>{
                        dropdownCheck[1] == true
                        ? (
                            <ul className="options" style={{width: "375px", marginLeft:"110px"}} >
                                <DropDown DropDownList={keywordList} index="1" sBtnInnerText={sBtnInnerText} setInnerText={setInnerText} dropdownCheck={dropdownCheck} setDropdownCheck={setDropdownCheck}></DropDown>
                            </ul>
                        ) : null
                    }
                    
                </div>

                <div className="select-menu" style={{width: "300px"}} onClick={ (e) => {showDropdown(e) }}>
                    <span className="content_input_title">구조</span>
                    <div className="select-btn" style={{width: "244px"}} id="2">
                        <input className="objectInput" type="text" />
                        <span className="sBtn-text" id="2">{sBtnInnerText[2]}</span>
                        {dropdownCheck[2] == true ? <Icon  icon="bx:chevron-down" rotate={2} /> : <Icon icon="bx:chevron-down"/>}
                    </div>{
                        dropdownCheck[2]==true
                        ? (
                            <ul className="options" style={{marginLeft: "55px"}}>
                                <DropDown DropDownList={structureList} index="2" sBtnInnerText={sBtnInnerText} setInnerText={setInnerText} dropdownCheck={dropdownCheck} setDropdownCheck={setDropdownCheck}></DropDown>
                            </ul>
                        ) : null
                    }                    
                </div>

                <div className="select-menu" style={{width: "485px"}} onClick={ (e) => {showDropdown(e) }}>
                    <span className="content_input_title">가격</span>
                    <div className="price-select-btn" style={{width: "375px"}} id="3">
                        <input className="objectInput" type="text"  />
                        <span className="price-text" id="3">{sBtnInnerText[3]}</span>
                        {dropdownCheck[3] == true ? <Icon  icon="bx:chevron-down" rotate={2} /> : <Icon icon="bx:chevron-down"/>}
                    </div>{
                        dropdownCheck[3] == true
                        ? (
                            <PriceDropdown index="3" sBtnInnerText={sBtnInnerText} setInnerText={setInnerText} priceOption={priceOption} setPriceOption={setPriceOption}></PriceDropdown>
                        ) : null
                    }
                </div>
            </div>

            <div className="content_submit_area">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                        <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#FA9538" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.08984 8.00008C8.32495 7.33175 8.789 6.76819 9.3998 6.40921C10.0106 6.05024 10.7287 5.91902 11.427 6.03879C12.1253 6.15857 12.7587 6.52161 13.2149 7.06361C13.6712 7.60561 13.9209 8.2916 13.9198 9.00008C13.9198 11.0001 10.9198 12.0001 10.9198 12.0001"
                            stroke="#FA9538" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 16H11.01" stroke="#FA9538" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                    <span className="text_hint">AI로 회원님이 원하시는 조건을 분석하여 추천드립니다.</span>
                </div>

                <div>
                    <input className="resetBtn" type="reset" value="초기화" />
                    <button className="submitBtn" type="submit">검색</button>
                </div>
            </div>
        </form>
        {
            resultCheck == true ? (<><RecoSucc recommendSuccList={recommendSuccList}/> <RecoReview  recommendReviewList={recommendReviewList}/></>) : null
        }
        </div>
    )
}

function searchPlaces(keyword){
    var ps = new kakao.maps.services.Places();  

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB);
}
// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    const resultBox = document.getElementById("result");
    if (status === kakao.maps.services.Status.OK) {
        //input창 아래 결과 box show
        resultBox.classList.remove("invisible");

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data);

        // 페이지 번호를 표출합니다
        displayPagination(pagination);

    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        resultBox.classList.add('invisible');
        alert('검색 결과가 존재하지 않습니다.');
        return;
    } else if (status === kakao.maps.services.Status.ERROR) {
        resultBox.classList.add('invisible');
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
    }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {

    var listEl = document.getElementById('placesList'),
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment();

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    for ( var i=0; i<places.length; i++ ) {
        // 마커를 생성하고 지도에 표시합니다
        var itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색결과 항목 중 하나를 클릭했을 때
        // 키워드 검색창에 해당 주소를 입력
        (function(title) {
            itemEl.onclick = function(){
                displayInfoInput(title);
            };
        })(places[i].place_name);

        fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {

    var el = document.createElement('li'),
    itemStr = '<div class="info">' +
                '   <h5>' + places.place_name + '</h5>';

    if (places.road_address_name) {
        itemStr += '    <span>' + places.road_address_name + '</span>' +
                    '   <span class="jibun gray">' +  places.address_name  + '</span>';
    } else {
        itemStr += '    <span>' +  places.address_name  + '</span>';
    }

      itemStr += '</div>';

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 검색결과 목록을 클릭했을 때 호출되는 함수입니다.
// 키워드 input 창에 해당 장소명을 표시
function displayInfoInput(title){
    document.getElementById('inputAddressKeyword').value = title;
    document.getElementById("result").classList.add('invisible');
}
 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}