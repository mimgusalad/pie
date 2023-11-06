import React, { useEffect, useState, useRef } from 'react';
import MapContainer from './Components/MapContainer';
import { Data } from '../data/Data';

const {kakao} = window;

const leftSubMenus = [
    {
      label: "방 찾기",
      path: "",
    },
    {
      label: "즐겨찾기",
      path: "",
    },
  ];

  const sideFilters = [
    {
      label: "소음",
      key: "sound",
    },
    {
      label: "옵션 상태",
      key: "options",
    },
    {
      label: "치안",
      key: "security",
    },
    {
      label: "일조량",
      key: "light_insulation",
    },
    {
      label: "쓰레기 처리",
      key: "garbage",
    },
    {
      label: "벌레",
      key: "bug",
    },
    {
      label: "냄새",
      key: "smell",
    },
    {
      label: "편의시설",
      key: "convenience",
    },
  ];

function NavUnderSide(){

  let [inputText, setInputText] = useState("");
  let [place, setPlace] = useState("");
  let [state, setState] = useState({
    center : { lat: 37.49676871972202, lng: 127.02474726969814 }
  });
  let [store, setStore] = useState('');
  // 전월세 필터링 Data.js에는 string으로 들어있어서 고쳐야 함
  var [price, setPrice] = useState(0)
  // 필터링한 마커 담을 배열
  var markers = [];
  let [countRoom, setCountRoom] = useState(0);
  let [houseType, setHouseType] = useState('');
  let [listData, setListData] = useState([]);

  // 선택한 금액
  let [curPrice, setCurPrice] = useState('전월세 금액')
  // 선택한 방구조
  let [curHouseType, setCurHouseType] = useState('방 구조')

  let copyData = JSON.parse(JSON.stringify(Data));

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  const convenience = (name) => {
    //e.preventDefault();
    setStore(name);
  }

  const housePrice = (price) => {
    setPrice(price);
    if(price == 0){
      setCurPrice('전월세 금액')
    }
    else if(price == 10){
      setCurPrice('10만~')
    }
    else if(price == 20){
      setCurPrice('20만~')
    }
    else if(price == 30){
      setCurPrice('30만~')
    }
    else if(price == 40){
      setCurPrice('40만~')
    }
    else if(price == 50){
      setCurPrice('50만~')
    }
  }

  const changeHouseType = (type) =>{
    setHouseType(type);
    if(type == ''){
      setCurHouseType('방 구조')
    }
    else if(type == '오픈형'){
      setCurHouseType('오픈형')
    }
    else if(type == '분리형'){
      setCurHouseType('분리형')
    }
    else if(type == '복층형'){
      setCurHouseType('복층형')
    }
    else if(type == '지상층'){
      setCurHouseType('반지하')
    }
    else if(type == '옥탑'){
      setCurHouseType('옥탑')
    }
  }

  //sidebar
  let [worse, setWorse] = useState('')

    // worse가 아닌거만 마커 찍기
    const [clicked0, setClicked0] = useState(false);
    const onClick0 = () => {
      setClicked0(!clicked0);
      if(clicked0 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[0].label);
      }
    }

    const [clicked1, setClicked1] = useState(false);
    const onClick1 = () => {
      setClicked1(!clicked1);
      if(clicked1 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[1].label);
      }
    }

    const [clicked2, setClicked2] = useState(false);
    const onClick2 = () => {
      setClicked2(!clicked2);
      if(clicked2 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[2].label);
      }
    }

    const [clicked3, setClicked3] = useState(false);
    const onClick3 = () => {
      setClicked3(!clicked3);
      if(clicked3 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[3].label);
      }
    }

    const [clicked4, setClicked4] = useState(false);
    const onClick4 = () => {
      setClicked4(!clicked4);
      if(clicked4 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[4].label)
      }
    }

    const [clicked5, setClicked5] = useState(false);
    const onClick5 = () => {
      setClicked5(!clicked5);
      if(clicked5 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[5].label)
      }
    }

    const [clicked6, setClicked6] = useState(false);
    const onClick6 = () => {
      setClicked6(!clicked6);
      if(clicked6 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[6].label)
      }
    }

    const [clicked7, setClicked7] = useState(false);
    const onClick7 = () => {
      setClicked7(!clicked7);
      if(clicked7 === true){
        setWorse('');
      }
      else{
        setWorse(sideFilters[7].label)
      }
    }

  // list
  useEffect(()=>{

  },[listData])

  // 장소 검색
  useEffect(()=>{
    console.log(place);
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

      let imageSrc = 'img/review_marker.png'
      let imageSize = new kakao.maps.Size(24,39)
      let imageOption = {offset : new kakao.maps.Point(27, 69)};

      let reviewMarker = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

      setCountRoom(0)
      Data.forEach((el) => {
        setCountRoom((countRoom) => countRoom + 1)
        new kakao.maps.Marker({
          map : map,
          image: reviewMarker,
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

    function displayMarker(storeplace) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(storeplace.y, storeplace.x)
      });
      marker.setMap(map);
    }
  },[store])


  // 필터링
  // useEffect(() => {
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
  //     level: 3
  //   };

  //   var map = new kakao.maps.Map(container, options);

  //   // Data 배열을 불러오니까 원래 배열을 복사해서 만들고 범위에 해당하는 마커를 삭제
  //   // price가 10이 넘어오니까 범위는 price <= el.price < price + 10

  //   let imageSrc = 'img/review_marker.png'
  //   let imageSize = new kakao.maps.Size(24, 39)
  //   let imageOption = { offset: new kakao.maps.Point(27, 69) };

  //   let reviewMarker = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  //   if (price != 0) {
  //     let priceFilter = Data.filter((el) => price <= el.price && el.price < price + 10);
  //     setListData(priceFilter);
  //   } else if(price == 0){
  //     setListData(Data)
  //   }

  //   setCountRoom(0)
  //   copyData.forEach((el) => {
  //     if (price <= el.price && el.price < price + 10) {
  //       setCountRoom((countRoom) => countRoom + 1)
  //       new kakao.maps.Marker({
  //         map: map,
  //         image: reviewMarker,
  //         position: new kakao.maps.LatLng(el.lat, el.lng)
  //       });
  //     }
  //   });

  // },[price])

  // 키워드 필터링
  // useEffect(() => {
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
  //     level: 3
  //   };

  //   var map = new kakao.maps.Map(container, options);

  //   let imageSrc = 'img/review_marker.png'
  //   let imageSize = new kakao.maps.Size(24, 39)
  //   let imageOption = { offset: new kakao.maps.Point(27, 69) };

  //   let reviewMarker = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  //   if (worse != '') {
  //     let worseFilter = Data.filter((el) => worse != el.tags[0].label);
  //     setListData(worseFilter);
  //   } else{
  //     setListData(Data)
  //   }

  //   setCountRoom(0)
  //   copyData.forEach((el) => {
  //     if (worse != el.tags[0].label) {
  //       setCountRoom((countRoom) => countRoom + 1)
  //       new kakao.maps.Marker({
  //         map: map,
  //         image: reviewMarker,
  //         position: new kakao.maps.LatLng(el.lat, el.lng)
  //       });
  //     }
  //   }
  //   );
  // },[worse])


  // // 방 구조 필터링
  // useEffect(() => {
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
  //     level: 3
  //   };

  //   var map = new kakao.maps.Map(container, options);

  //   let imageSrc = 'img/review_marker.png'
  //   let imageSize = new kakao.maps.Size(24, 39)
  //   let imageOption = { offset: new kakao.maps.Point(27, 69) };

  //   let reviewMarker = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  //   if (houseType != '') {
  //     let houseTypeFilter = Data.filter((el) => houseType == el.houseType);
  //     setListData(houseTypeFilter);
  //     console.log(houseTypeFilter)
  //   } else{
  //     setListData(Data)
  //   }

  //   setCountRoom(0)
  //   copyData.forEach((el) => {
  //     if (houseType == el.houseType) {
  //       setCountRoom((countRoom) => countRoom + 1)
  //       new kakao.maps.Marker({
  //         map: map,
  //         image: reviewMarker,
  //         position: new kakao.maps.LatLng(el.lat, el.lng)
  //       });
  //     }
  //   });

  // },[houseType])


  // price, worse, housetype 한 번에 필터링

  useEffect(() => {

    if( price != 0 && worse != '' && houseType != ''){
      let totalFilter = Data.filter((el) => (price <= el.price && el.price < price + 10) && (worse != el.tags[0].label) && (houseType == el.houseType));
      setListData(totalFilter)
    }
    else if(price == 0 && worse != '' && houseType != ''){
      let totalFilter = Data.filter((el) => (worse != el.tags[0].label) && (houseType == el.houseType));
      setListData(totalFilter)
    }
    else if( price != 0 && worse == '' && houseType != ''){
      let totalFilter = Data.filter((el) => (price <= el.price && el.price < price + 10) && (houseType == el.houseType));
      setListData(totalFilter)
    }
    else if( price != 0 && worse != '' && houseType == ''){
      let totalFilter = Data.filter((el) => (price <= el.price && el.price < price + 10) && (worse != el.tags[0].label));
      setListData(totalFilter)
    }
    else if( price == 0 && worse == '' && houseType != ''){
      let totalFilter = Data.filter((el) => (houseType == el.houseType));
      setListData(totalFilter)
    }
    else if( price == 0 && worse != '' && houseType == ''){
      let totalFilter = Data.filter((el) => (worse != el.tags[0].label));
      setListData(totalFilter)
    }
    else if( price != 0 && worse == '' && houseType == ''){
      let totalFilter = Data.filter((el) => (price <= el.price && el.price < price + 10));
      setListData(totalFilter)
    }
    else if( price == 0 && worse == '' && houseType == ''){
      setListData(Data)
    }

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);

    let imageSrc = 'img/review_marker.png'
    let imageSize = new kakao.maps.Size(24, 39)
    let imageOption = { offset: new kakao.maps.Point(27, 69) };

    let reviewMarker = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

    setCountRoom(0)
    // 1
    if (price != 0 && worse != '' && houseType != '') {
      copyData.forEach((el) => {
        if ((price <= el.price && el.price < price + 10) && (worse != el.tags[0].label) && (houseType == el.houseType)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 2
    else if (price == 0 && worse != '' && houseType != '') {
      copyData.forEach((el) => {
        if ((worse != el.tags[0].label) && (houseType == el.houseType)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 3
    else if (price != 0 && worse == '' && houseType != '') {
      copyData.forEach((el) => {
        if ((price <= el.price && el.price < price + 10) && (houseType == el.houseType)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 4
    else if (price != 0 && worse != '' && houseType == '') {
      copyData.forEach((el) => {
        if ((price <= el.price && el.price < price + 10) && (worse != el.tags[0].label)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 5
    else if (price == 0 && worse == '' && houseType != '') {
      copyData.forEach((el) => {
        if ((houseType == el.houseType)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 6
    else if (price == 0 && worse != '' && houseType == '') {
      copyData.forEach((el) => {
        if ((worse != el.tags[0].label)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 7
    else if (price != 0 && worse == '' && houseType == '') {
      copyData.forEach((el) => {
        if ((price <= el.price && el.price < price + 10)) {
          setCountRoom((countRoom) => countRoom + 1)
          new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.lat, el.lng)
          });
        }
      }
      );
    }

    // 8
    else if (price == 0 && worse == '' && houseType == '') {
      copyData.forEach((el) => {
        setCountRoom((countRoom) => countRoom + 1)
        new kakao.maps.Marker({
          map: map,
          image: reviewMarker,
          position: new kakao.maps.LatLng(el.lat, el.lng)
        });
      }
      );
    }

  },[price, worse, houseType])

  // 조건문 변경되면 마커 찍기용
  // useEffect(()=>{
    // const container = document.getElementById('map');
    // const options = {
    //   center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
    //   level: 3
    // };

    // var map = new kakao.maps.Map(container, options);

    // let imageSrc = 'img/review_marker.png'
    // let imageSize = new kakao.maps.Size(24, 39)
    // let imageOption = { offset: new kakao.maps.Point(27, 69) };

    // let reviewMarker = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  //   setCountRoom(0)
  //   copyData.forEach((el) => {
  //     setCountRoom((countRoom) => countRoom + 1)
  //     new kakao.maps.Marker({
  //       map: map,
  //       image: reviewMarker,
  //       position: new kakao.maps.LatLng(el.lat, el.lng)
  //     });
  //   });
  // },[])

    return (
      <div>
        <div className="sub-menus">
          <div className="sub-menus__wrapper">
            <div className="left_sub_menus">
              {leftSubMenus.map((leftSubMenu, index) => {
                return (
                  <div className="left_sub_menu__item" key={index}>
                    <button className='left_sub_menu__item'>{leftSubMenu.label}</button>
                    {/* {leftSubMenu.label} */}
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
                <button className="sub_menus_filter filter_1">{curPrice}</button>
                {/* <button className="filter__label">전월세 금액</button> */}
                <div className="filter__details-wrapper">
                  <a href="#" onClick={() => housePrice(0)}>없음</a>
                  <a href="#" onClick={() => housePrice(10)}>10만~</a>
                  <a href="#" onClick={() => housePrice(20)}>20만~</a>
                  <a href="#" onClick={() => housePrice(30)}>30만~</a>
                  <a href="#" onClick={() => housePrice(40)}>40만~</a>
                  <a href="#" onClick={() => housePrice(50)}>50만~</a>
                </div>
              </div>
              <div className="sub_menus_filter filter_2">
                <button className="sub_menus_filter filter_2">{curHouseType}</button>
                <div className="filter__details-wrapper">
                  <a href="#" onClick={() => changeHouseType('')}>없음</a>
                  <a href="#" onClick={() => changeHouseType('오픈형')}>오픈형</a>
                  <a href="#" onClick={() => changeHouseType('분리형')}>분리형</a>
                  <a href="#" onClick={() => changeHouseType('복층형')}>복층형</a>
                  <a href="#" onClick={() => changeHouseType('지상층')}>지상층</a>
                  <a href="#" onClick={() => changeHouseType('반지하')}>반지하</a>
                  <a href="#" onClick={() => changeHouseType('옥탑')}>옥탑</a>
                </div>
              </div>
              <div className="sub_menus_filter filter_3">
                <button className="sub_menus_filter filter_3">편의시설</button>
                <div className="filter__details-wrapper">
                  <a href="#" onClick={() => convenience('CS2')}>편의점</a>
                  <a href="#" onClick={() => convenience('PM9')}>약국</a>
                  <a href="#" onClick={() => convenience('HP8')}>병원</a>
                  <a href="#" onClick={() => convenience('SW8')}>지하철역</a>
                  <a href="#" onClick={() => convenience('OL7')}>주유소</a>
                  <a href="#" onClick={() => convenience('BK9')}>은행</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='content'>
          <div className="side-nav">
            <div className="side-nav__filter-container">
              <div className="filter-container__title-wrapper">
                <div className="title-wrapper__title">
                  피하고 싶은
                  <br />
                  단점 키워드를 선택해보세요.
                </div>
                <div className="title-wrapper__filter-toggle">
                  <div className="toggle-wrapper">
                    <span className='gongsil'>공실만 보기</span>
                    <input role='switch' type='checkbox' />
                  </div>
                </div>
              </div>
              <div className="filter-container__side-filters">
                <div><button className={clicked0 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick0() }}>{sideFilters[0].label}</button></div>
                <div><button className={clicked1 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick1() }}>{sideFilters[1].label}</button></div>
                <div><button className={clicked2 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick2() }}>{sideFilters[2].label}</button></div>
                <div><button className={clicked3 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick3() }}>{sideFilters[3].label}</button></div>
                <div><button className={clicked4 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick4() }}>{sideFilters[4].label}</button></div>
                <div><button className={clicked5 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick5() }}>{sideFilters[5].label}</button></div>
                <div><button className={clicked6 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick6() }}>{sideFilters[6].label}</button></div>
                <div><button className={clicked7 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick7() }}>{sideFilters[7].label}</button></div>
              </div>
            </div>
            <div className="side-nav__items-wrapper">
              <div className="side-items-title-wrapper">
                <div className="side-items-title">해당 지역 목록 {countRoom}개</div>
                <div className="side-items-tags">
                  <div className="side-tag">
                    <div className="tag-circle1"></div>
                    <span>심각</span>
                  </div>
                  <div className="side-tag">
                    <div className="tag-circle2"></div>
                    <span>경계</span>
                  </div>
                  <div className="side-tag">
                    <div className="tag-circle3"></div>
                    <span>주의</span>
                  </div>
                </div>
              </div>
              <div className="side-nav__items">
                {listData.map((sideItem, index) => {
                  return (
                    <div key={index} className="side-nav__item">
                      <div className="item-thumbnail"></div>
                      <div className="item-details">
                        <div className="item__title">{sideItem.title}</div>
                        <div className="item__content">{sideItem.address}</div>
                        <div className="details__bottom-wrapper">
                          <div className="item__price-wrapper">
                            <div className="item__price">{sideItem.fee}</div>
                            <div className="item__reviews">
                              리뷰 {sideItem.reviews}
                            </div>
                          </div>
                          <div className="details__tags-wrapper">
                            <div className="tags">
                              <div className='tag1'>{sideItem.tags[0].label}</div>
                              <div className='tag2'>{sideItem.tags[1].label}</div>
                              <div className='tag3'>{sideItem.tags[2].label}</div>
                            </div>
                            <div className="rating-wrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="star-icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{sideItem.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id='map' style={{
              width: '1264px',
              height: '947px',
          }}></div>
        </div>
      </div>
    );
}

export default NavUnderSide;