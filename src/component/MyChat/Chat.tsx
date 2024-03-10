import React from "react";
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css";
import My_profile from "./my_profile/My_profile";
import Messages from "./Messages/Messages";
import PingIcon from "../../assets/pingIcon.svg"
import FriendInfo from "./InfosPart/friendInfos/FriendInfo";


const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat">
        <My_profile />

        <Messages />
        <div className="OtherProfile">

          <FriendInfo />
        </div>
      </div>

      <MenuBar />
    </div>
  );
};

export default Chat;
