import React, {useState} from "react";
import styled from 'styled-components';

import "./MainPage.css";

import SearchIcon from "../img/btnImg/searchIcon.png";
import disMark from "../img/disadvantageMark/mainPageMark.png";
import MainImgLong from "../img/mainRectLong.png";
import MainImgShort from "../img/mainRectShort.png";
import KeywordBtnList from "../components/MainPage/KeywordBtnList";
import SelectedArea from "../components/MainPage/SelectedArea";

const { kakao } = window;
let MainConatiner = styled.div`
    margin: 0;
    padding: 0;

    height: 100%; width: 100%;
    min-height: 100vh; min-width: 100vw;

    display : grid;
    grid-template-columns: 5fr 3fr;
    background-color: rgba(69, 152, 48, 0.03);
`
let MainTitle=styled.p`
    width: 820px;
    position: relative;
    z-index: 3;

    color: #000;
    font-family: Noto Sans KR;
    font-size: 64px;
    font-style: normal;
    font-weight: 550;
    line-height: 100px; /* 156.25% */
`
let SubTitle=styled.p`
    margin-top : 1.875rem;
    margin-bottom: 10.9375rem;

    color: #484848;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 166.667% */ 
`
let Result=styled.div`
    height: 200px;
    width:350px;
    overflow:scroll;
    background:#fff;
    position:absolute;
    left: 5%;
`

const handleOnClick = (inputKeyword) => {
    searchPlaces(inputKeyword);
  };
  // 버튼에 적용할 클릭 이벤트 함수
  
  
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick(e.target.value); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  

export default function MainPage(){
    var selectAreaName=['1선택', '2선택', '3선택'];
    let [selectKeyword, setSelectKeyword] = useState(new Array);

    function searchRoom(){
        const sendData = {
            address : document.getElementById('inputAddressKeyword').value,
            firstKeyword : selectKeyword[0],
            secondeKeyword :selectKeyword[1], 
            thirdKeyword : selectKeyword[2],
        };
        console.log(sendData)
    }

    const checkItemHandler = (id, isChecked) =>{
        if (isChecked){
            let copy = [...selectKeyword, id];
            setSelectKeyword(copy);
        } else if (!isChecked){
            let filtered  = selectKeyword.filter((element) => element !== id);
            setSelectKeyword(filtered)
        }
    }
    
    return (
        <MainConatiner>
            <div id="textArea">
                <div style={{position:"relative"}}>
                    <img src={MainImgLong} style={{position:"absolute", top:"87%", left: "30px"}} />
                    <img src={MainImgShort} style={{position:"absolute", top:"87%", left: "370px"}} />
                    <MainTitle>단점을 피해 추천받고 선택하는 당신만의 집</MainTitle>
                    
                </div>
                <SubTitle>가장 피하고 싶은 키워드를 선택하여<br /> 내 맘에 쏙 드는 맞춤형 집을 골라보세요.</SubTitle>

                <div id="menu_wrap" className="bg_white">
                    <div className="option">
                        <div>
                            <div id="addressKeywordArea">
                                <img src={SearchIcon} />
                                <input type="text" id="inputAddressKeyword" name="inputAddressKeyword"  placeholder="원하시는 지역명을 입력해주세요." 
                                onKeyDown={(e)=>(handleOnKeyPress(e))}/>
                            </div>
                        </div>
                    </div>
                    
                    <Result className="invisible" id="resultMain">
                        <ul id="placesList"></ul>
                        <div id="pagination"></div>
                    </Result>
                </div>
                <div className="selectedKeyword">
                    <img src={disMark} />{
                        selectAreaName.map(function(areaName, index){
                            return (<SelectedArea areaName={areaName} index={index} selectKeyword={selectKeyword}></SelectedArea> )
                        })
                    }
                    <input type="submit" value="방찾기" onClick={searchRoom}></input>
                </div>
            </div>
            <div id="btnArea">
                <KeywordBtnList checkItemHandler={checkItemHandler}></KeywordBtnList>
            </div>
        </MainConatiner>
    );
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
    const resultBox = document.getElementById("resultMain");
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
    document.getElementById("resultMain").classList.add('invisible');
}
 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}

