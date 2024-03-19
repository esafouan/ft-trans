import React, { useState } from "react";
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css";
import My_profile from "./my_profile/My_profile";
import Messages from "./Messages/Messages";
import PingIcon from "../../assets/pingIcon.svg"
import FriendInfo from "./InfosPart/friendInfos/FriendInfo";
import RoomInfo from "./InfosPart/roomInfos/OwnerInfos/OwnerInfo";


const Chat = () => {
 

  const [User, SetUser] = useState(null);
  const [Room, SetRoom] = useState(null);


  const handleUser = (user) => {
    SetUser(user);
  }
  const handleRoom = (room) => {
    SetRoom(room);
  }

  const [MyProfile, SetProfile] = useState(null);


  const handleProfile = (profile) => {
    SetProfile(profile);
  }
  const [optionSelected, SetOption] = useState("friends");
  
 
 
  return (
    <div className="chat-container">
      <div className="chat">
        
        <My_profile 

          UserSelceted={handleUser} 
          RoomSelceted={handleRoom} 
          Profile={handleProfile}
          optionSelected={optionSelected} 
          SetOption={SetOption}
          
          />

        <Messages 
          optionSelected={optionSelected} 
          user={User}
          room={Room}
          profile={MyProfile}
        />

        <div className="OtherProfile">
          {
            optionSelected === "friends" ? (

              <FriendInfo 
              user={User}
              profile={MyProfile}
            
              UserSelceted={handleUser} 
            />
            ) : optionSelected === "rooms" ? (
              <RoomInfo 
              profile={MyProfile}
              room={Room}

              RoomSelceted={handleRoom} 
              />)
              : (null)
       
          }
        </div>
      </div>

      <MenuBar />
    </div>
  );
};

export default Chat;
