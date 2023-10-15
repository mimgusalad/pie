import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./SuccDetail.css";
import backButton from "./image/back.png";
import ImageCard from "./components/ImageCard";
import Separator from "./components/Separator";
import shareIcon from "./image/share.png";
import ReviewHeader from "./components/ReviewHeader/ReviewHeader";
import { Data } from "./data/Data";
import SuccSideInfo from "./components/SuccSideInfo/SuccSideInfo";
import { succData } from "./data/succData";

const mainMenus = [
  {
    label: "지도",
    path: "",
  },
  {
    label: "AI 추천",
    path: "",
  },
  {
    label: "승계방",
    path: "",
  },
  {
    label: "혜택",
    path: "",
  },
];

export default function SuccDetail() {
  let { succId } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="layout_root">
      <nav className="navigation">
        <div className="navigation__navitems">
          <h1 className="navitem__logo">단비집</h1>
          <div className="navitem__main-menus">
            <Link to={"/"}>
              <div className="main-menus__item">{mainMenus[0].label}</div>
            </Link>
            <Link>
              <div className="main-menus__item">{mainMenus[1].label}</div>
            </Link>
            <Link to={`/승계방`}>
              <div className="main-menus__item">{mainMenus[2].label}</div>
            </Link>
            <Link>
              <div className="main-menus__item">{mainMenus[3].label}</div>
            </Link>
          </div>
          <div className="navitem__user_menus">
            <a className="user_menus__item user_msg" href="">
              <span>메시지</span>
            </a>
            <div className="user_menus__item user_profile">
              <div className="user_profile__user_name">넨도님</div>
              <div className="user_profile__user_img"></div>
            </div>
            <a className="user_menus__item user_write" href="">
              <span>
                글쓰기
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div className="containerWrapper">
        <div className="container">
          <div className="header">
            <button onClick={handleGoBack} className="custom-button-with-icon">
              <img src={backButton} alt="backButton" />
              뒤로가기
            </button>
            <Separator height={"12px"} />
            <div className="subHeader">승계방 {">"} 승계글 자세히 보기</div>
          </div>
          {/* <div className="reviewContent">
            <div className="userReviewContainer">
              <ImageCard imageItem={Data[0]} height={"400px"} />
              <ReviewHeader user={Data[0].reviews[succId]} />
              <hr style={{ marginTop: "16px", color: "lightgray" }} />
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                {Data[0].reviews[succId].reviewComment}
              </div>
              <Separator height={"40px"} />
              <div className="etcContainer">
                <div className="etcText">
                  {Data[0].reviews[succId].updatedAt}
                </div>
                <div className="etcText">
                  조회 {Data[0].reviews[succId].veiw}
                </div>
                <img
                  src={shareIcon}
                  alt="shareIcon"
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>
            <div className="detailInfoContainer">
              <SuccSideInfo item={Data[0]} />
            </div>
          </div> */}
          <div className="reviewContent">
            <div className="userReviewContainer">
              <ImageCard imageItem={succData[succId]} height={"400px"} />
              {/* reviewheader에 맞게 succData 수정 */}
              <ReviewHeader user={succData[succId]} />
              <hr style={{ marginTop: "16px", color: "lightgray" }} />
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                {succData[succId].contentText}
              </div>
              <Separator height={"40px"} />
              <div className="etcContainer">
                <div className="etcText">
                  {succData[succId].regdate}
                </div>
                <div className="etcText">
                  조회 {succData[succId].view}
                </div>
                <img
                  src={shareIcon}
                  alt="shareIcon"
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>
            <div className="detailInfoContainer">
              <SuccSideInfo item={succData[succId]} />
            </div>
          </div>
          <Separator height={"80px"} />
        </div>
      </div>
    </div>
  );
}
