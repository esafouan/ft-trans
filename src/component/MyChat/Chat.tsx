import React, { useState } from "react";
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css";
import My_profile from "./my_profile/My_profile";
import Messages from "./Messages/Messages";
import PingIcon from "../../assets/pingIcon.svg"
import FriendInfo from "./InfosPart/friendInfos/FriendInfo";


const Chat = () => {
  const [ID, Setid] = useState(-1);
  const handleId = (id) => {
    Setid(id);
  }

  const [User, SetUser] = useState(null);


  const handleUser = (user) => {
    SetUser(user);
  }

  const [MyProfile, SetProfile] = useState(null);


  const handleProfile = (profile) => {
    SetProfile(profile);
  }
  return (
    <div className="chat-container">
      <div className="chat">
        
        <My_profile 
          OnSelect={handleId}
          UserSelceted={handleUser} 
          Profile={handleProfile}
          />

        <Messages 
          Id={ID} 
          user={User}
          profile={MyProfile}
        />

        <div className="OtherProfile">
          <FriendInfo 
            user={User}
            profile={MyProfile}
          />
        </div>
      </div>

      <MenuBar />
    </div>
  );
};

export default Chat;
