import React, { useEffect, useState } from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import MessageContent from "@sendbird/uikit-react/ui/MessageContent";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import "./styles.css";
import "./App.css";
import "@sendbird/uikit-react/dist/index.css";
import kr from "date-fns/locale/ko";
import axios from "axios";

const getUserId = async()=>{
  const response = await fetch("https://5aa7cf1d-ae78-4b47-ae33-7322ea838a30.mock.pstmn.io/login", {
    method: "POST"
  });
  const data = await response.json();
  return data;
}

function App() {
  let [data, setData] = useState({
    id: "",
    nickname: ""
  });
  let USER_ID = data ? data.id : null;
  let NICKNAME = data ? data.nickname : null;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserId();
        setData(result);
        USER_ID = result? result.id : "NO ID";
        NICKNAME = result ? result.nickname : "NO NAME";
        console.log(result.id);
        console.log(result.nickname);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);
  const APP_ID = process.env.REACT_APP_APP_ID;
  
  //const USER_ID = process.env.REACT_APP_USER_ID;
  //const NICKNAME = process.env.REACT_APP_NICKNAME;
  const PROFILE_URL = process.env.REACT_APP_PROFILE_URL;
  //const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
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
        //accessToken={ACCESS_TOKEN}
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

export default App;
