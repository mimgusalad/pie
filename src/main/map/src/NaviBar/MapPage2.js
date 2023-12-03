import React, { useEffect, useState, useRef } from "react";
import { Data } from "../data/Data";
import "./sub.css";
import "../style.css";
import axios from 'axios';

import sampleImage1 from "../image/sample1.png";
import sampleImage2 from "../image/sample2.png";
import sampleImage3 from "../image/sample3.png";
import userImage from "../image/userImageSample.jpg";
import importmarker from "../image/review_marker2.png";
import Nav from "../components/Nav";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import SubMenu from "./SubMenu";
import NavUnderSide from "./NavUnderSide";

const { kakao } = window;

const mainMenus = [
  {
    label: "지도",
    path: "/",
  },
  {
    label: "AI 추천",
    path: "",
  },
  {
    label: "승계방",
    path: "/승계방",
  },
  {
    label: "혜택",
    path: "",
  },
];

// const leftSubMenus = [
  // {
  //   label: "방 찾기",
  //   path: "",
  // },
  // {
  //   label: "즐겨찾기",
  //   path: "",
  // },
// ];

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



function MapPage2({ id }) {
   let { roomId } = useParams();
   const [newData, setNewData] = useState(null);
   const [navData, setNavData] = useState([]);
   const [mapData, setMapData] = useState([]) // MapPage2에도 지도에 전체 데이터가 필요

   useEffect(()=>{
   	    const fetchData = async() => {
             const res = await axios.get("http://localhost:8080/reviews/" + `${roomId}`);
             return res.data;
           }

           fetchData().then(res => setNewData(res));

        const allData = async() => {
              const res = await axios.get("http://localhost:8080/map");
              return res.data;
            }

            allData().then(res => setMapData(res));
   },[])
   console.log(roomId)
   console.log(newData)

   let testData = JSON.parse(JSON.stringify(mapData));
   let [testListData, setTestListData] = useState([]);
   console.log(testData)

  const [toggle, setToggle] = useState("map")
  const location = useLocation();
  // NavUnder.js에서 받아오는 값들
  const getlat = location.state.lat; // 클릭한 값 위도
  const getlng = location.state.lng; // 클릭한 값 경도
  // Nav에 필요한 데이터들
  const img_url = location.state.img_url;
  const address = location.state.address;
  const addressDetail = location.state.addressDetail;
  const addressId = location.state.addressId;
  const articleNo = location.state.articleNo;
  const contentText = location.state.contentText;
  const deposit = location.state.deposit;
  const fee = location.state.fee;
  const gethouseType = location.state.houseType;
  const livingYear = location.state.livingYear;
  const payment = location.state.payment;
  const rating = location.state.rating;
  const regdate = location.state.regdate;
  const userId = location.state.userId;
  const utility = location.state.utility;
  const name = location.state.name;
  const keyword1 = location.state.keyword1;
  const keyword2 = location.state.keyword2;
  const keyword3 = location.state.keyword3;
  const keyword4 = location.state.keyword4;
  const keyword5 = location.state.keyword5;
  const keyword6 = location.state.keyword6;
  const keyword7 = location.state.keyword7;
  const keyword8 = location.state.keyword8;

  // <Nav/로 넘길 데이터>
  const NavData = {
    img_url : img_url,
    address : address,
    addressDetail : addressDetail,
    addressId : addressId,
    articleNo : articleNo,
    contentText : contentText,
    deposit : deposit,
    fee : fee,
    houseType : gethouseType,
    livingYear : livingYear,
    payment : payment,
    rating : rating,
    regdate : regdate,
    userId : userId,
    utility : utility,
    name : name,
    keyword1 : keyword1,
    keyword2 : keyword2,
    keyword3 : keyword3,
    keyword4 : keyword4,
    keyword5 : keyword5,
    keyword6 : keyword6,

  }

  const placePosition = {
    lat : getlat,
    lng : getlng,
  }
  let [state, setState] = useState({
    center: { lat: getlat, lng: getlng },
  });
  let [rvmarker, setrvMarker] = useState({
    center: { lat: getlat, lng: getlng },
  });


  let [place, setPlace] = useState("");
  let [store, setStore] = useState("");
  // 전월세 필터링 Data.js에는 string으로 들어있어서 고쳐야 함
  var [price, setPrice] = useState(0);
  // 필터링한 마커 담을 배열
  var markers = [];
  let [countRoom, setCountRoom] = useState(0);
  let [houseType, setHouseType] = useState("");
  let [listData, setListData] = useState([]);
  let [inputText, setInputText] = useState("");


  // detailpage에서 사용할 data 하나 선별
  let [reviewData, setReviewData] = useState([]);

  // 선택한 금액
  let [curPrice, setCurPrice] = useState("전월세 금액");
  // 선택한 방구조
  let [curHouseType, setCurHouseType] = useState("방 구조");

  // 단점 키워드들 담을 배열 3개까지만 가능
  // worseArray 길이가 3이면 첫번째 값을 변경
  // 굳이 배열을 하지 않고 useState를 3개 만들어서 각각 관리하고 if문으로 ''이 아니면 set하고
  const [worseArray, setWorseArray] = useState([]);
  const navigate = useNavigate();

  const changeHouseType = (type) => {
    setHouseType(type);
    if (type === "") {
      setCurHouseType("방 구조");
    } else if (type === "오픈형") {
      setCurHouseType("오픈형");
    } else if (type === "분리형") {
      setCurHouseType("분리형");
    } else if (type === "복층형") {
      setCurHouseType("복층형");
    } else if (type === "지상층") {
      setCurHouseType("반지하");
    } else if (type === "옥탑") {
      setCurHouseType("옥탑");
    }
  };

  const convenience = (name) => {
    //e.preventDefault();
    setStore(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const housePrice = (price) => {
    setPrice(price);
    if (price === 0) {
      setCurPrice("전월세 금액");
    } else if (price === 10) {
      setCurPrice("10만~");
    } else if (price === 20) {
      setCurPrice("20만~");
    } else if (price === 30) {
      setCurPrice("30만~");
    } else if (price === 40) {
      setCurPrice("40만~");
    } else if (price === 50) {
      setCurPrice("50만~");
    }
  };

  let copyData = JSON.parse(JSON.stringify(Data));


  //sidebar
  let [worse, setWorse] = useState("");

  // worse가 아닌거만 마커 찍기
  // 08/07
  const [clicked0, setClicked0] = useState(false);
  const onClick0 = () => {
    setClicked0(!clicked0);
    if (clicked0 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[0].label);
    }
  };

  const [clicked1, setClicked1] = useState(false);
  const onClick1 = () => {
    setClicked1(!clicked1);
    if (clicked1 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[1].label);
    }
  };

  const [clicked2, setClicked2] = useState(false);
  const onClick2 = () => {
    setClicked2(!clicked2);
    if (clicked2 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[2].label);
    }
  };

  const [clicked3, setClicked3] = useState(false);
  const onClick3 = () => {
    setClicked3(!clicked3);
    if (clicked3 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[3].label);
    }
  };

  const [clicked4, setClicked4] = useState(false);
  const onClick4 = () => {
    setClicked4(!clicked4);
    if (clicked4 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[4].label);
    }
  };

  const [clicked5, setClicked5] = useState(false);
  const onClick5 = () => {
    setClicked5(!clicked5);
    if (clicked5 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[5].label);
    }
  };

  const [clicked6, setClicked6] = useState(false);
  const onClick6 = () => {
    setClicked6(!clicked6);
    if (clicked6 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[6].label);
    }
  };

  const [clicked7, setClicked7] = useState(false);
  const onClick7 = () => {
    setClicked7(!clicked7);
    if (clicked7 === true) {
      setWorse("");
    } else {
      setWorse(sideFilters[7].label);
    }
  };

  // 리스트 중 하나 선택
  // 2023-07-26
  const [detailId, setDetailId] = useState();
  const detailSummary = (id) => {
    setDetailId(id);
    console.log(detailId);
  };

    // DB에 lat,lng 없는 데이터 클릭하면 오류 뜸
  const markerPost = (el) => {
      navigate(`/detail/${el.review_article.articleNo}`,{
        state: {
          lat: `${el.latitude}`,
          lng: `${el.longitude}`,
          lng: `${el.longitude}`,
          img_url: `${el.img_url}`,
          address: `${el.review_article.address}`,
          addressDetail: `${el.review_article.addressDetail}`,
          addressId: `${el.review_article.addressId}`,
          articleNo: `${el.review_article.articleNo}`,
          contentText: `${el.review_article.contentText}`,
          deposit: `${el.review_article.deposit}`,
          fee: `${el.review_article.fee}`,
          houseType: `${el.review_article.houseType}`,
          livingYear: `${el.review_article.livingYear}`,
          payment: `${el.review_article.payment}`,
          address: `${el.review_article.address}`,
          rating: `${el.review_article.rating}`,
          regdate: `${el.review_article.regdate}`,
          userId: `${el.review_article.userId}`,
          utility: `${el.review_article.utility}`,
          viewCnt: `${el.review_article.viewCnt}`,
          name: `${el.userInfo.name}`,
          keyword1: `${el.keyword.심각[0]}`,
          keyword2: `${el.keyword.심각[1]}`,
          keyword3: `${el.keyword.경계[0]}`,
          keyword4: `${el.keyword.경계[1]}`,
          keyword5: `${el.keyword.주의[0]}`,
          keyword6: `${el.keyword.주의[1]}`,
        }
      })
    }

// return이 렌더닝때매 늦게 돼서 지도가 설정이 안되어있는데 useEffect로 지도를 부르니까 오류가 나네

  // 장소 검색
  useEffect(() => {
    console.log(place);
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(place, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
      }
    }

    let imageSrc = importmarker;
    let imageSize = new kakao.maps.Size(24, 39);
    let bigimageSize = new kakao.maps.Size(29, 44);
    let imageOption = { offset: new kakao.maps.Point(27, 69) };

    let reviewMarker = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let bigreviewMarker = new kakao.maps.MarkerImage(
      imageSrc,
      bigimageSize,
      imageOption
    );

    setCountRoom(0);
    testData.forEach((el) => {
      setCountRoom((countRoom) => countRoom + 1);
      const marker = new kakao.maps.Marker({
        map: map,
        image: reviewMarker,
        position: new kakao.maps.LatLng(el.latitude, el.longitude),
      });
      // 마커 클릭 이벤트
      kakao.maps.event.addListener(marker, "click", function () {
        // navigate(`/detail/${el.id}`)
        markerPost(el)
      });
    });
  }, [place]);

  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    var ps = new kakao.maps.services.Places(map);
    console.log(store);
    ps.categorySearch(store, placesSearchCB, { useMapBounds: true });

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    function displayMarker(storeplace) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(storeplace.y, storeplace.x),
      });
      marker.setMap(map);
    }
  }, [store]);

  // price, worse, housetype 한 번에 필터링

  useEffect(() => {
    if (price != 0 && worse != "" && houseType != "") {
      let totalFilter = testData.filter(
        (el) =>
          price <= el.review_article.fee &&
          el.review_article.fee < price + 10 &&
          worse != el.keyword.심각[0] &&
          houseType == el.review_article.houseType
      );
      setTestListData(totalFilter);
    } else if (price == 0 && worse != "" && houseType != "") {
      let totalFilter = testData.filter(
        (el) => worse != el.keyword.심각[0] && houseType == el.review_article.houseType
      );
      setTestListData(totalFilter);
    } else if (price != 0 && worse == "" && houseType != "") {
      let totalFilter = testData.filter(
        (el) =>
          price <= el.review_article.fee &&
          el.review_article.fee < price + 10 &&
          houseType == el.review_article.houseType
      );
      setTestListData(totalFilter);
    } else if (price != 0 && worse != "" && houseType == "") {
      let totalFilter = testData.filter(
        (el) =>
          price <= el.review_article.fee &&
          el.review_article.fee < price + 10 &&
          worse != el.keyword.심각[0]
      );
      setTestListData(totalFilter);
    } else if (price == 0 && worse == "" && houseType != "") {
      let totalFilter = testData.filter((el) => houseType == el.review_article.houseType);
      setTestListData(totalFilter);
    } else if (price == 0 && worse != "" && houseType == "") {
      let totalFilter = testData.filter(
        (el) =>
            worse != el.keyword.심각[0]
      );
      setTestListData(totalFilter);
    } else if (price != 0 && worse == "" && houseType == "") {
      let totalFilter = testData.filter(
        (el) => price <= el.review_article.fee && el.review_article.fee < price + 10
      );
      setTestListData(totalFilter);
    } else if (price == 0 && worse == "" && houseType == "") {
      setTestListData(testData);
    }

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    let imageSrc = importmarker;
    let imageSize = new kakao.maps.Size(24, 39);
    let bigimageSize = new kakao.maps.Size(29, 44);
    let imageOption = { offset: new kakao.maps.Point(27, 69) };

    let reviewMarker = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let bigreviewMarker = new kakao.maps.MarkerImage(
      imageSrc,
      bigimageSize,
      imageOption
    );

    setCountRoom(0);
    // 1
    if (price !== 0 && worse !== "" && houseType !== "") {
      testData.forEach((el) => {
        if (
            price <= el.review_article.fee &&
            el.review_article.fee < price + 10 &&
            worse != el.keyword.심각[0] &&
            houseType == el.review_article.houseType
        ) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
            // navigate(`/detail/${el.id}`)
             markerPost(el)
             setrvMarker({
              center: { lat: el.latitude, lng: el.longitude },
            });
          });
        }
      });
    }

    // 2
    else if (price == 0 && worse !== "" && houseType !== "") {
      testData.forEach((el) => {
          if (worse != el.keyword.심각[0] && houseType == el.review_article.houseType) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
            // navigate(`/detail/${el.id}`)
              markerPost(el)
              setrvMarker({
                center: { lat: el.latitude, lng: el.longitude },
              });
          });
        }
      });
    }

    // 3
    else if (price !== 0 && worse == "" && houseType !== "") {
      testData.forEach((el) => {
          if (
              price <= el.review_article.fee &&
              el.review_article.fee < price + 10 &&
              houseType == el.review_article.houseType
          ) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
           // navigate(`/detail/${el.id}`)
              markerPost(el)
              setrvMarker({
                center: { lat: el.latitude, lng: el.longitude },
              });
          });
        }
      });
    }

    // 4
    else if (price !== 0 && worse !== "" && houseType == "") {
      testData.forEach((el) => {
          if (
               price <= el.review_article.price &&
               el.review_article.price < price + 10 &&
               worse != el.keyword.심각[0]
          ) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
            // navigate(`/detail/${el.id}`)
              markerPost(el)
              setrvMarker({
                center: { lat: el.latitude, lng: el.longitude },
              });
          });
        }
      });
    }

    // 5
    else if (price == 0 && worse == "" && houseType !== "") {
      testData.forEach((el) => {
          if (houseType == el.review_article.houseType) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
            // navigate(`/detail/${el.id}`)
              markerPost(el)
              setrvMarker({
                center: { lat: el.latitude, lng: el.longitude },
              });
          });
        }
      });
    }

    // 6
    else if (price == 0 && worse !== "" && houseType == "") {
      testData.forEach((el) => {
          if (worse != el.keyword.심각[0]) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
            // navigate(`/detail/${el.id}`)
              markerPost(el)
              setrvMarker({
                center: { lat: el.latitude, lng: el.longitude },
              });
          });
        }
      });
    }

    // 7
    else if (price !== 0 && worse == "" && houseType == "") {
      testData.forEach((el) => {
          if (price <= el.review_article.fee && el.review_article.fee < price + 10) {
          setCountRoom((countRoom) => countRoom + 1);
          const marker = new kakao.maps.Marker({
            map: map,
            image: reviewMarker,
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
          });
          kakao.maps.event.addListener(marker, "click", function () {
            // navigate(`/detail/${el.id}`)
             markerPost(el)
             setrvMarker({
              center: { lat: el.latitude, lng: el.longitude },
            });
          });
        }
      });
    }

    // 8
    else if (price == 0 && worse == "" && houseType == "") {
      testData.forEach((el) => {
        setCountRoom((countRoom) => countRoom + 1);
        const marker = new kakao.maps.Marker({
          map: map,
          image: reviewMarker,
          position: new kakao.maps.LatLng(el.latitude, el.longitude),
        });
        kakao.maps.event.addListener(marker, "click", function () {
          // navigate(`/detail/${el.id}`)
              markerPost(el)
              setrvMarker({
                center: { lat: el.latitude, lng: el.longitude },
              });
        });
      });
    }
  }, [price, worse, houseType]);

  useEffect(()=>{
    const roadviewContainer = document.getElementById('roadview');
    const roadview = new kakao.maps.Roadview(roadviewContainer);
    const roadviewClient = new kakao.maps.RoadviewClient();
    const position = new kakao.maps.LatLng(rvmarker.center.lat, rvmarker.center.lng);

    roadviewClient.getNearestPanoId(position, 50, function (panoId) {
      roadview.setPanoId(panoId, position);
    });
  },[rvmarker])

//  if(newData == null){
//      return "Loading";
//    } else{
  return (
    <div className="layout_root">
      {/* 여기부터 navunderside 내용 들어감 */}
      <div>
      <div className="sub-menus">
      <div className="sub-menus__wrapper">
        <div className="left_sub_menu_button">
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            gap: "40px",
          }}
        >
          <div className="left_sub_menu__item left_sub_menu__search">
            <form className="inputForm" onSubmit={handleSubmit}>
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
          <div className="right_sub_menus">
            <div className="sub_menus_filter filter_1">
              <button className="sub_menus_filter filter_1">{curPrice}</button>
              {/* <button className="filter__label">전월세 금액</button> */}
              <div className="filter__details-wrapper">
                <a onClick={() => housePrice(0)}>
                  없음
                </a>
                <a onClick={() => housePrice(10)}>
                  10만~
                </a>
                <a onClick={() => housePrice(20)}>
                  20만~
                </a>
                <a onClick={() => housePrice(30)}>
                  30만~
                </a>
                <a onClick={() => housePrice(40)}>
                  40만~
                </a>
                <a onClick={() => housePrice(50)}>
                  50만~
                </a>
              </div>
            </div>
            <div className="sub_menus_filter filter_2">
              <button className="sub_menus_filter filter_2">
                {curHouseType}
              </button>
              <div className="filter__details-wrapper">
                <a onClick={() => changeHouseType("")}>
                  없음
                </a>
                <a onClick={() => changeHouseType("오픈형")}>
                  오픈형
                </a>
                <a onClick={() => changeHouseType("분리형")}>
                  분리형
                </a>
                <a onClick={() => changeHouseType("복층형")}>
                  복층형
                </a>
                <a onClick={() => changeHouseType("지상층")}>
                  지상층
                </a>
                <a onClick={() => changeHouseType("반지하")}>
                  반지하
                </a>
                <a onClick={() => changeHouseType("옥탑")}>
                  옥탑
                </a>
              </div>
            </div>
            <div className="sub_menus_filter filter_3">
              <button className="sub_menus_filter filter_3">편의시설</button>
              <div className="filter__details-wrapper">
                <a onClick={() => convenience("CS2")}>
                  편의점
                </a>
                <a onClick={() => convenience("PM9")}>
                  약국
                </a>
                <a onClick={() => convenience("HP8")}>
                  병원
                </a>
                <a onClick={() => convenience("SW8")}>
                  지하철역
                </a>
                <a onClick={() => convenience("OL7")}>
                  주유소
                </a>
                <a onClick={() => convenience("BK9")}>
                  은행
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="content">
          {<Nav room={NavData} />}
          <div style={{position: "relative"}}>
          <div
            id = "map"
            style={{
              display: toggle === "map" ? "block" : "none",
              width: "100%",
              height: "100%",
            }}
          >
          {toggle === "map" && (
          <input
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: 10,
            }}
            type="button"
            title="로드뷰 보기"
            value="로드뷰"
            onClick={() => setToggle("roadview")}
          />
        )}
          </div>
          <div
            id= "roadview"
            style={{
              display: toggle === "roadview" ? "block" : "none",
              width: "100%",
              height: "768px",
            }}
          >
          {toggle === "roadview" && (
          <input
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: 10,
            }}
            type="button"
            title="지도 보기"
            value="지도"
            onClick={() => setToggle("map")}
          />
          )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
//  }
}

export default MapPage2;
