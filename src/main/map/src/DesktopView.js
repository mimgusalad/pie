import React, {useState, useEffect, useMemo} from "react";
import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";



const removeElementsByClass = className => {
    const elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(el => el.parentNode.removeChild(el));
};

function DesktopView() {
    useEffect(() => {
        removeElementsByClass('sendbird-channel-list__header');
    }, [])

  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");
  const conversationWrap = document.getElementsByClassName(
    "sendbird-app__conversation-wrap"
  )[0];

  const renderSettingsBar = () => {
    conversationWrap.style.marginRight = "318px";
  };
  const hideSettingsBar = () => {
    conversationWrap.style.marginRight = "0px";
  };

    const query = useMemo(() => {
        return {
            channelListQuery: {
                includeEmpty: true
            }
        };
    }, []);

  return (
    <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <SBChannelList
            onChannelSelect={(channel) => {
              if (channel && channel.url) {
                setCurrentChannelUrl(channel.url);
              }
            }}
            queries={query}
          />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
              renderSettingsBar();
            }}
          />
          {showSettings && (
            <div className="sendbird-app__settingspanel-wrap">
              <SBChannelSettings
                channelUrl={currentChannelUrl}
                onCloseClick={() => {
                  setShowSettings(false);
                  hideSettingsBar()
                }}
              />
            </div>
          )}
        </div>
    </div>
  );
}

export default DesktopView;
