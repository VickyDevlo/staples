import React, { useState,useRef } from "react";
import { HeadsetMicRounded,KeyboardArrowDown } from "@material-ui/icons";
import "./Header.css";


const Header = () => {
  const dropdownRef = useRef(null);

  const [LiveChat, setLiveChat] = useState(dropdownRef, false);
  const ChatHandler = () => setLiveChat(!LiveChat);
  

  return (
    <div className="Navcontainer">
      <div className="HeaderWrapper">
        <div>
          <select>
            <option value="en">EN</option>
            <option value="saab">FR</option>
          </select>
        </div>
        <div>
          <span className="Icon">
            <HeadsetMicRounded onClick={ChatHandler}  />
          </span>
          <span onClick={ChatHandler}>Live chat</span>
        </div>
        <div
          ref={dropdownRef}
          className={`ChatContainer ${LiveChat ? "close" : "open"}`}
        >
          <div className="Chat-Ofline">
            <h5>Chat Offline</h5>
            <KeyboardArrowDown
              onClick={() => setLiveChat(!LiveChat)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="Line-Div-One">
            <span className="line-one">Staples Professional Live Chat</span>
          </div>
          <div className="Line-Div-Two">
            <span className="line-two">
              Sorry, there are no chat agents currently available. Please visit
              our Contact Us page for alternate contact options.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
