import React from "react";
import "./ReviewHeader.css";
import userImage from "../../image/kakaoimg_1.png"
import chatimg from "../../image/chat.png"
import {useNavigate} from "react-router-dom";


export default function SuccHeader({user}) {
    const navigate = useNavigate();
    console.log(`user: ${user.userInfo.email}`);
    return (
        <div className="reviewHeader">
            <div className="userID">
                <img
                    src={userImage}
                    alt="userImage"
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "100%",
                    }}
                />
                <div className="reviewOwner">{user.userInfo.nickname}</div>
                <img
                    src={chatimg}
                    alt="chatImage"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "100%",
                    }}
                    // onClick={(1)} 채팅으로
                    onClick={() => {
                        console.log("채팅으로");
                        try{
                            const currentUser = JSON.parse(sessionStorage.getItem("user"));
                            if (user.userInfo.email === currentUser.email) {
                                alert("본인에게는 채팅을 할 수 없습니다.")
                            } else {
                                navigate('/chat', {state: user.userInfo.email});
                            }
                        }catch (e){
                            alert(e);
                        }
                    }}
                />
            </div>
            <div className="userInfo">
                <div style={{fontSize: "12px", marginRight: "8px"}}>
                    {/*           <span style={{ color: "#fff100", marginRight: "8px" }}>★</span> */}
                    {/*           <span style={{ color: "black" }}>{user.grade}</span> */}
                </div>
                <div className="grayText">{user.periodYear}</div>
            </div>
        </div>
    );
}
