import React from 'react';
import {Link} from "react-router-dom";

function Temp() {
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
                            <li><a className="fa-brands fa-facebook" href="">{user.name}</a></li>
                            <li className="dropdown">
                                <button className="dropBtn">
                                    글쓰기
                                </button>
                            </li>
                            </>)}
                        <div className="dropDownContent">
                            <Link className="writeLink" style={{cursor: "pointer"}}
                                 to="http://localhost:8080/review/form">
                                <h4>리뷰 작성하기</h4>
                                <p>솔직 담백하게 리뷰를 작성해주세요.</p>
                            </Link>
                            <Link className="writeLink" style={{cursor: "pointer"}}
                                 to="http://localhost:8080/succession/form">
                                <h4>승계글 작성하기</h4>
                                <p>원룸 승계글을 작성해주세요.</p>
                            </Link>
                        </div>
                </ul>
            </nav>
        </div>
    );
}