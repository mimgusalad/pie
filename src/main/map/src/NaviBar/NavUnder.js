import React, { useEffect, useState, useRef } from 'react';
import MapContainer from './Components/MapContainer';
import { markerData } from '../data/markerData';

const {kakao} = window;

const leftSubMenus = [
    {
      label: "방찾기",
      path: "",
    },
    {
      label: "즐겨찾기",
      path: "",
    },
  ];

function NavUnder(){

  let [inputText, setInputText] = useState("");
  let [place, setPlace] = useState("");
  let [state, setState] = useState({
    center : { lat: 37.49676871972202, lng: 127.02474726969814 }
  });
  let [store, setStore] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  const convenience = (name) => {
    setStore(name);
  }

  console.log(store)

  useEffect(()=>{
    console.log(place);
    // <MapContainer searchPlace={place} />
    const container = document.getElementById('map');
    const options = {
    center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
    level: 3
  };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(place, placesSearchCB);

      function placesSearchCB (data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {

              const newSearch = data[0]
              setState({
                center : {lat : newSearch.y, lng : newSearch.x}
              })
          }
      };

      markerData.forEach((el) => {
        new kakao.maps.Marker({
          map : map,
          position : new kakao.maps.LatLng(el.lat, el.lng)
        });
      });

  },[place]);

  useEffect(()=>{

    const infowindow = new kakao.maps.InfoWindow({zIndex:1});

    const container = document.getElementById('map');
    const options = {
    center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
    level: 3
  };

    var map = new kakao.maps.Map(container, options);

    var ps = new kakao.maps.services.Places(map);
    console.log(store)
    ps.categorySearch(store, placesSearchCB, {useMapBounds:true});

    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
          for (var i=0; i<data.length; i++) {
              displayMarker(data[i]);
          }
      }
  }

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });
      marker.setMap(map);
    }
  },[store])

    return (
      <div className="sub-menus">
        <div className="sub-menus__wrapper">
          <div className="left_sub_menus">
            {leftSubMenus.map((leftSubMenu, index) => {
              return (
                <div className="left_sub_menu__item" key={index}>
                  {leftSubMenu.label}
                </div>
              );
            })}
            <div className="left_sub_menu__item left_sub_menu__search">
              <form className='inputForm' onSubmit={handleSubmit}>
                <input
                  className="search__input"
                  type="text"
                  placeholder="원하시는 지역명, 지하철역, 단지명을 입력해주세요"
                  onChange={onChange}
                  value={inputText}
                />
              </form>
              <div className="search__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="right_sub_menus">
            <div className="sub_menus_filter filter_1">
              <button className="filter__label">전월세 금액</button>
              <div className="filter__details-wrapper">
                <a href="#">편의점</a>
                <a href="#">약국</a>
                <a href="#">병원</a>
                <a href="#">대중교통</a>
                <a href="#">주유소</a>
                <a href="#">은행</a>
              </div>
            </div>
            <div className="sub_menus_filter filter_2">
              <button className="filter__label">방 구조</button>
              <div className="filter__details-wrapper">
                <a href="#">편의점</a>
                <a href="#">약국</a>
                <a href="#">병원</a>
                <a href="#">대중교통</a>
                <a href="#">주유소</a>
                <a href="#">은행</a>
              </div>
            </div>
            <div className="sub_menus_filter filter_3">
              <button className="filter__label">편의시설</button>
              <div className="filter__details-wrapper">
                <a href="#" onClick={()=>convenience('CS2')}>편의점</a>
                <a href="#" onClick={()=>convenience('PM9')}>약국</a>
                <a href="#" onClick={()=>convenience('HP8')}>병원</a>
                <a href="#" onClick={()=>convenience('SW8')}>지하철역</a>
                <a href="#" onClick={()=>convenience('OL7')}>주유소</a>
                <a href="#" onClick={()=>convenience('BK9')}>은행</a>
              </div>
            </div>
            {/* <div className="sub_menus_filter filter_1">
              <div className="filter__label">
                <span>전월세</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="arrow-down"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="filter__details-wrapper">필터 1</div>
            </div>
            <div className="sub_menus_filter filter_2">
              <div className="filter__label">
                <span>방 구조</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="arrow-down"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="filter__details-wrapper">필터 2</div>
            </div>
            <div className="sub_menus_filter filter_3">
              <div className="filter__label">
                <span>편의시설</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="arrow-down"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="filter__details-wrapper">편의점</div>
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default NavUnder;