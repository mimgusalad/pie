import React, { useEffect } from "react";
import "sendbird-uikit/dist/index.css";
import {App as SendbirdApp } from "sendbird-uikit";


export default function App() {
  return (
    <div className="App" style={{ height: 600 }}>
      <SendbirdApp
        appId={process.env.REACT_APP_SENDBIRD_APP_API_KEY}
        userId="john"
        theme="dark"/>
    </div>
  );
}
