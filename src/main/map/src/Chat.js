import React, { useEffect, useState } from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import "./chatStyle.css";
import "./App.css";
import "@sendbird/uikit-react/dist/index.css";
import kr from "date-fns/locale/ko";
import {createSendbirdUser} from "./RegisterUser";

const createChannel = async (thisUser, otherUser) => {
  try {
    const response = await fetch(`https://api-${process.env.REACT_APP_APP_ID}.sendbird.com/v3/group_channels`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': process.env.REACT_APP_API_TOKEN
      },
      body: JSON.stringify({
        "users": [
          {"user_id": thisUser},
          {"user_id": otherUser}
        ],
        "is_distinct": true
      })
    });

    if (!response.ok) {
      createSendbirdUser(otherUser, otherUser, "");
      // throw new Error(`Failed to create channel: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data.channel_url);
  } catch (error) {
    console.error(error);
  }
}
function Chat() {
  const data = JSON.parse(sessionStorage.getItem("user"));
  const USER_ID = data.email;
  const NICKNAME = data.nickname;
  const OTHER_USER = "test_id2";
  createChannel(USER_ID, OTHER_USER);
  console.log(USER_ID);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const PROFILE_URL = process.env.REACT_APP_PROFILE_URL;
  const myColorSet = {
    "--sendbird-light-primary-100": "rgb(195, 241, 169)",
    "--sendbird-light-primary-300": "rgb(165, 211, 149)",
    "--sendbird-light-primary-400": "rgb(136, 188, 132)",
  };

  const [stringSet] = useState({
    MESSAGE_STATUS__YESTERDAY: "어제",
    CHANNEL_PREVIEW_MOBILE_LEAVE: "채팅방 나가기",
    CHANNEL_SETTING__LEAVE_CHANNEL__TITLE: "채팅방 나가기",
    MESSAGE_INPUT__PLACE_HOLDER: "메세지를 입력해주세요.",
    PLACE_HOLDER__NO_CHANNEL: " ",
  });

  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);
  window.addEventListener("resize", function () {
    if (window.innerWidth < 900) {
      setMobileViewOpen(true);
    } else {
      setMobileViewOpen(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth < 900) {
      setMobileViewOpen(true);
    } else {
      setMobileViewOpen(false);
    }
  }, []);

  return (
    <div>
      <SBProvider
        appId={APP_ID}
        userId={USER_ID}
        nickname={NICKNAME}
        colorSet={myColorSet}
        dateLocale={kr}
        stringSet={stringSet}
        profileUrl={PROFILE_URL}
      >
        {mobileViewOpen ? <MobileView /> : <DesktopView />}
      </SBProvider>
    </div>
  );
}

export default Chat;
