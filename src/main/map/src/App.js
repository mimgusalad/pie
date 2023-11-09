import "./style.css";
import "./nav.css";
import React, {useEffect} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import RoomList from "./RoomList";
import SuccDetail from "./succDetail";
import ReviewDetail from "./ReviewDetail";
import NavUnder from "./NaviBar/NavUnder";
import MapPage2 from "./NaviBar/MapPage2";
import Chat from "./Chat";
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
            <Link to="http://localhost:8080/account/myPage" className="fa-brands fa-facebook">{props.user.name}</Link>
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
                  <a href="http://localhost:8080/">
                      <img className="siteLogo" alt="siteLogo" src={Logo}/>
                  </a>

              </div>
              <li className="nav_menu">
                  <li><a onClick={()=> navigate('/map')} className="main-menus__item">지도</a></li>
                  <li><Link to="http://localhost:8080/ai/list" className="main-menus__item">AI추천</Link></li>
                  <li><a onClick={()=> navigate('/successionBoard')} className="main-menus__item">승계방</a></li>
                  <li><Link to="http://localhost:8080/benefit/list" className="main-menus__item">혜택</Link></li>
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
                              <li><a className="fa-brands fa-facebook" href="http://localhost:8080/account/myPage">{user.name}</a></li>
                              </>)}
                  <li className="dropdown">
                      <button className="dropBtn">
                          글쓰기
                      </button>
                      </li>
                  <div className="dropDownContent">
                      <a className="writeLink" style={{cursor: "pointer"}}
                            href="http://localhost:8080/review/form">
                          <h4>리뷰 작성하기</h4>
                          <p>솔직 담백하게 리뷰를 작성해주세요.</p>
                      </a>
                      <a className="writeLink" style={{cursor: "pointer"}}
                            href="http://localhost:8080/succession/form">
                          <h4>승계글 작성하기</h4>
                          <p>원룸 승계글을 작성해주세요.</p>
                      </a>
                  </div>
              </ul>
          </nav>
    <Routes>
      <Route path="/" element={<NavUnder/>}/>
      <Route path="/home" element={<NavUnder/>}/>
      <Route path="/map" element={<NavUnder />} />
      <Route path="/detail/:roomId" element={<MapPage2 />} />
      <Route path="/succDetail/:succId" element={<SuccDetail />} />
      <Route path="/successionBoard" element={<RoomList />} />
      <Route
        path="detail/:roomId/review/:reviewId"
        element={<ReviewDetail />}
      />
      <Route path="/chat" element={<Chat/>}/>

     </Routes>
      </div>
  )
}
