import "./style.css";
import "./nav.css";
import React, {useEffect} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";

import MainPage from "./pages/MainPage";
import RoomList from "./RoomList";
import SuccDetail from "./succDetail";
import ReviewDetail from "./ReviewDetail";
import Chat from "./Chat";

import NavUnder from "./NaviBar/NavUnder";
import MapPage2 from "./NaviBar/MapPage2";

import AiMainPage from "./pages/AiMainPage";
import BenefitPage from "./pages/benefitPage";
import ReviewForm from "./pages/ReviewForm";
import SuccessionForm from "./pages/SuccessionForm";
import WritableReview from "./pages/WritableReview";
import SuccessionDetial from "./pages/SuccessionDetail";
import ReviewDetailPage from "./pages/ReviewDetailPage";

import MyReviewList from "./MyReviewList";
import MySuccession from "./MySuccession";
import MyPage from './MyPage';
import Setting from './Setting';
import Favorite from './Favorite';

import Logo from "./img/siteLogo.png";
import KakaoLogin from "./img/kakao_login_small.png";
import axios from "axios";
import {Cookies, useCookies} from "react-cookie";

const cookies = new Cookies();
axios.defaults.withCredentials = true;

const getUserInfo = async () => {

    return await axios.get('http://localhost:8080/user-info')
        .then((res) => {
            console.log('user data:', res.data);
            const userData = res.data;
            if(userData.name !== "anonymous") {
                sessionStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
        })
        .catch((err) => {
            console.log('user data err:', err);
        });
}

function getCookie(){
    return axios.get("http://localhost:8080/getCookie")
        .then((res)=>{
            return res.data;
        }).catch((err)=>{
            console.log('cookie get error: ', err);
        });

}

function Button() {
    const navigate = useNavigate();

    const handleKakaoLogin = async () => {
        try {
            const userInfo = await getUserInfo();
        } catch (error) {
            // Handle the error (e.g., show an error message)
        }
    }

    return (
        <Link to="http://localhost:8080/oauth2/authorization/kakao"
              className="user_profile__login"
              onClick={handleKakaoLogin}>
            <img src={KakaoLogin} alt="카카오 로그인" />
        </Link>
    );
}

function User(props){
    const navigate = useNavigate();
    return(
        <div>
            <a onClick={()=> navigate('/chat')} className="fa-brands fa-twitter">메시지</a>
            <Link to="http://localhost:3000/myPage" className="fa-brands fa-facebook">{props.user.name}</Link>
        </div>
    )
}
export default function TempPage() {
  let navigate = useNavigate();
  let JSESSIONID = "";
  const [user, setUser] = React.useState();

    useEffect(() => {
        const userFromSessionStorage = sessionStorage.getItem('user');
        if (userFromSessionStorage) {
            setUser(JSON.parse(userFromSessionStorage));
        } else {
            getCookie()
                .then((JSESSIONID) => {
                    cookies.set('JSESSIONID', JSESSIONID, { path: '/' });
                    return getUserInfo();
                })
                .then((userData) => {
                    setUser(userData);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }, []);

    return (
      <div>
          <nav className="navbar">
              <div className="nav_logo">
                  <a a onClick={()=> navigate('/')}>
                      <img className="siteLogo" alt="siteLogo" src={Logo}/>
                  </a>

              </div>
              <li className="nav_menu">
                  <li><a onClick={()=> navigate('/map')} className="main-menus__item">지도</a></li>
                  <li><a onClick={ () => navigate('/ai')} className="main-menus__item">AI추천</a></li>
                  <li><a onClick={()=> navigate('/successionBoard')} className="main-menus__item">승계방</a></li>
                  <li><a onClick={ () => navigate('/benefit')} className="main-menus__item">혜택</a></li>
              </li>
              <ul className="nav_icons">
                  { user === null || user === undefined || user.name === "anonymous" ?
                      (
                          <li>
                              <div>
                                  <Button/>
                              </div>
                          </li>
                      ):(
                          <>
                              <li><a className="fa-brands fa-twitter" href="http://localhost:3000/chat">메시지</a></li>
                              <li><a className="fa-brands fa-facebook" href="http://localhost:3000/myPage">{user.name}</a></li>
                              </>)}

                        <li className="dropDown">
                            <button className="dropBtn">글쓰기</button>
                            <div class="dropDownMenu">
                                <div className="writeLink" onClick={ ()=> navigate('/review/form')}>
                                    <h4>리뷰 작성하기</h4>
                                    <p>솔직 담백하게 리뷰를 작성해주세요.</p>
                                </div>
                                <div className="writeLink" onClick={ ()=> navigate('/succession/form')}>
                                    <h4>승계글 작성하기</h4>
                                    <p>원룸 승계글을 작성해주세요.</p>
                                </div>

                            </div>
                        </li>

              </ul>
          </nav>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/home" element={<NavUnder/>}/>
      <Route path="/map" element={<NavUnder />} />
      <Route path="/ai" element={< AiMainPage/>} />
      <Route path="/successionBoard" element={<RoomList />} />
      <Route path="/benefit" element={<BenefitPage />} />
      <Route path="/detail/:roomId" element={<MapPage2 />} />
      <Route path="/succDetail/:succId" element={<SuccDetail />} />
      <Route path="/review/form" element={<ReviewForm />} />
      <Route path="/review/my/writable-review" element={<WritableReview />} />
      <Route path="/succession/form" element={<SuccessionForm />} />
      <Route path="/review/detail/:reviewId" element={<ReviewDetailPage />}></Route>
      <Route path="/succession/detail/:successionId" element = {<SuccessionDetial/>}></Route>
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/myPage/favorites" element={<Favorite />}/>
      <Route path="/myPage/myReviewList" element={<MyReviewList />} />
      <Route path="/myPage/mySuccession" element={<MySuccession />} />
      <Route path="/myPage/setting" element={<Setting />} />
      <Route
        path="detail/:roomId/review/:reviewId"
        element={<ReviewDetail />}
      />
      <Route path="/chat" element={<Chat/>}/>

     </Routes>
      </div>
  )
}
