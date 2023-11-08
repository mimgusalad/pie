import React from 'react';
import {Link} from "react-router-dom";

function LoggedUser(props){
    return(
        <div>
            <a onClick={()=> navigate('/chat')} className="fa-brands fa-twitter">메시지</a>
            <a className="fa-brands fa-facebook" onClick={()=> navigate('/account/mypage')}>{props.user.name}</a>
        </div>
    )
}
function Nav(){
    return(

        <div>
            <nav className="navbar">
                <div className="nav_logo">
                    <a href="/">
                        <img className="siteLogo" alt="siteLogo" src="/img/siteLogo.png"/>
                    </a>

                </div>
                <ul className="nav_menu">
                    <a onClick={()=> navigate('/map')} className="main-menus__item">지도</a>
                    <Link to="http://localhost:8080/ai/list" className="main-menus__item">AI추천</Link>
                    <a onClick={()=> navigate('/successionBoard')} className="main-menus__item">승계방</a>
                    <Link to="http://localhost:8080/benefit/list" className="main-menus__item">혜택</Link>
                </ul>
                <ul className="nav_icons">
                    <div>
                        {user === null || user === undefined ? <Button /> : <LoggedUser user = {user}/>}
                    </div>
                    <li className="dropdown">
                        <button className="dropBtn">
                            글쓰기
                        </button>
                        <div className="dropDownContent">
                            <div className="writeLink" style={{"cursor": "pointer"}}
                                 onClick={()=> navigate('/review/form')}>
                                <h4>리뷰 작성하기</h4>
                                <p>솔직 담백하게 리뷰를 작성해주세요.</p>
                            </div>
                            <div className="writeLink" style={{"cursor": "pointer"}}
                                 onClick={()=> navigate('/succession/form')}>
                                <h4>승계글 작성하기</h4>
                                <p>원룸 승계글을 작성해주세요.</p>
                            </div>
                        </div>
                    </li>

                </ul>
                <a href="#" className="navbar_toggleBtn">
                    <i className="fa-solid fa-bars"></i>
                </a>
            </nav>
        </div>
    )
}

export default Nav;