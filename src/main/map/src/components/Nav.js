import React, {useState} from "react";
import closeIcon from "../image/close.png";
import shareIcon from "../image/share.png";
import tagIcon from "../image/tag.png";
import aftertagIcon from "../image/tag_after.png";
import warningSign1 from "../image/warning_1.png";
import warningSign2 from "../image/warning_2.png";
import warningSign3 from "../image/warning_3.png";
import warningSign4 from "../image/warning_4.png";
import ImageCard from "../components/ImageCard";
import StarRating from "../components/StarRating";
import ReviewComponent from "../components/ReviewComponent/ReviewComponent";
import DetailInfo from "../components/DetailInfoComponent/DetailInfo";
import SimilarItem from "../components/SimilarItemComponent/SimilarItemComponent";
import { useNavigate} from "react-router-dom";

export default function Nav({ room }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

    // 북마크 기능
  const [imageSrc, setImageSrc] = useState(tagIcon)
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부

  const handleClick = () => {
    if (isClicked) {
      setImageSrc(tagIcon);
        setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
        // 북마크 해제하면 db에서도 삭제
      } else {
        setImageSrc(aftertagIcon);
        setIsClicked(true); // true일 땐 변경될 이미지 src
        // 북마크 클릭했으니까 addressId를 db에 업데이트
      }
  };


  return (
    <div
      className="side-nav"
      style={{ width: "400px", height: "768px", overflow: "scroll" }}
    >
      <div
        className="sideNavTop"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            padding: "none",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={handleGoBack}
        >
          <img
            src={closeIcon}
            alt="closeIcon"
            style={{ width: "12px", height: "12px", strokeWidth: "10px" }}
          />
        </button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={shareIcon}
            alt="shareIcon"
            style={{
              width: "16px",
              height: "16px",
              strokeWidth: "10px",
              marginRight: "20px",
            }}
          />
          <img
            src={imageSrc}
            alt="tagIcon"
            style={{
              width: "16px",
              height: "16px",
              strokeWidth: "10px",
            }}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="side-nav__items-wrapper">
        <ImageCard imageItem={room} height={"200px"} width={"100%"} />
        <div className="blockContainer">
          <div
            className="titleContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="side-items-title">건물 주소</div>
            <a href="" style={{ fontSize: "12px", textAlign: "center" }}>
              더보기
            </a>
          </div>
          <div
            className="detailContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "8px",
              width: "100%",
            }}
          >
            <div
              className="addressContainer"
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginTop: "2px",
              }}
            >
              <span>{room.address}</span>
              <br />
              <span>{room.addressDetail}</span>
            </div>
            <div
              className="gradeContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "2px",
              }}
            >
              <StarRating rating={room.rating} />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  paddingRight: "2px",
                }}
              >
                {room.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="side-items-title" style={{ marginBottom: "8px" }}>
            건물 정보
          </div>
          <div className="conditionGrid">
            <div className="warningSign">
              <img src={warningSign1} alt="level1" className="warningIcon" />
              <span className="levelText"> 심각 </span>
              {room.tags.map((item, index) => {
                return (
                  <span className="tag" key={index}>
                    {item.label}
                  </span>
                );
              })}
            </div>
            <div className="warningSign">
              <img src={warningSign2} alt="level1" className="warningIcon" />
              <span className="levelText"> 경계 </span>
              {room.tags.map((item, index) => {
                return (
                  <span className="tag" key={index}>
                    {item.label}
                  </span>
                );
              })}
            </div>
            <div className="warningSign">
              <img src={warningSign3} alt="level1" className="warningIcon" />
              <span className="levelText"> 주의 </span>
              {room.tags.map((item, index) => {
                return (
                  <span className="tag" key={index}>
                    {item.label}
                  </span>
                );
              })}
            </div>
            <div className="warningSign">
              <img src={warningSign4} alt="level1" className="warningIcon" />
              <span className="levelText"> 문제없음 </span>
              {room.tags.map((item, index) => {
                return (
                  <span className="tag" key={index}>
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="side-items-title" style={{ marginBottom: "8px" }}>
            거주민 리뷰
          </div>
          <div className="reviewContainer">
            {room.reviews.map((reviewItem, index) => {
              return (
                <ReviewComponent
                  roomId={room.id}
                  key={index}
                  review={reviewItem}
                />
              );
            })}
          </div>
        </div>
        <div className="blockContainer">
          <div className="side-items-title" style={{ marginBottom: "8px" }}>
            건물 상세 정보
          </div>
          <div style={{ width: "100px" }}>
            <DetailInfo item={room} />
          </div>
        </div>
        <div className="blockContainer">
          <div className="side-items-title" style={{ marginBottom: "8px" }}>
            비슷한 매물
          </div>
          <SimilarItem item={room.similarItems} />
        </div>
      </div>
    </div>
  );
}
