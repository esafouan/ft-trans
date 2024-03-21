import React, { useState, useEffect } from "react";
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css";
import My_profile from "./my_profile/My_profile";
import Messages from "./Messages/Messages";
import PingIcon from "../../assets/pingIcon.svg"
import FriendInfo from "./InfosPart/friendInfos/FriendInfo";
import RoomInfo from "./InfosPart/roomInfos/OwnerInfos/OwnerInfo";
import { useSocket } from "../Socket";

import axios from "axios";


const Chat = () => {
 
  const socket = useSocket()
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
  const [MessagesData, SetMessages] = useState(null);
  const [FetchMessages, SetFetch] = useState(0);
 
    useEffect(() => {
      const getMessages  = async () => {
          try 
          {
              if (User) {
                  const resp = await axios.post('http://localhost:3000/api/chat/getconversation',{id: User.id},  {withCredentials: true})
                  SetMessages(resp.data);
                  socket.emit('notif',{type:"message",senderid: User.id})
              }
          }
          catch(error){
              console.log(error)
          }
      }
      getMessages();
    }
  , [User, FetchMessages]);
   
  useEffect(() => {
      socket?.on('message', ()=> {
          SetFetch((prevIsBool) => prevIsBool + 1)
          
      });
      return () => {
          socket?.off('message');
      };
  }, [socket]);

  //id is convertation id


   
    /////// friends messages ///////
  

    const [MessagesRoom, SetMessagesRoom] = useState(null);
    const [FetchMessagesRoom, SetFetchRoom] = useState(0);
    useEffect(() => {
        const getMessages  = async () => {
            try 
            {
                if (Room) {
                    console.log("go to fetch");
                    const resp = await axios.post('http://localhost:3000/api/chat/getroomconversation',{roomname: Room.name},  {withCredentials: true})
                    SetMessagesRoom(resp.data);
                    socket.emit('roomnotif', Room.name)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getMessages();
       }
    , [Room, FetchMessagesRoom]);
       
    useEffect(() => {
        socket?.on('roomchat', ()=> {
            SetFetchRoom((prevIsBool) => prevIsBool + 1)
            
    });
      return () => {
        socket?.off('roomchat');
      };
    }, [socket]);



  return (
    <div className="chat-container">
      <div className="chat">
        
        <My_profile 

          UserSelceted={handleUser} 
          RoomSelceted={handleRoom}
          selectedroom={Room}
          Profile={handleProfile}
          optionSelected={optionSelected} 
          SetOption={SetOption}
          SetMessages={SetMessages}
          SetMessagesRoom={SetMessagesRoom}
          />

        <Messages 
          optionSelected={optionSelected} 
          user={User}
          room={Room}
          profile={MyProfile}
          MessagesData={MessagesData}
          MessagesRoom={MessagesRoom}
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
