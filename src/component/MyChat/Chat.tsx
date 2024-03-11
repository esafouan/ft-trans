import React, { useState } from "react";
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css";
import My_profile from "./my_profile/My_profile";
import Messages from "./Messages/Messages";
import PingIcon from "../../assets/pingIcon.svg"
import FriendInfo from "./InfosPart/friendInfos/FriendInfo";


const Chat = () => {
  const [ID, Setid] = useState(null);
  const handleId = (id) => {
    Setid(id);
  }



  return (
    <div className="chat-container">
      <div className="chat">
        <My_profile OnSelect={handleId}/>

        <Messages id={ID}/>

        {/* <div className="OtherProfile">
          <FriendInfo />
        </div> */}
      </div>

      <MenuBar />
    </div>
  );
};

export default Chat;
