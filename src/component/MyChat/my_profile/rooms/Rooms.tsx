import React, { useEffect, useState } from 'react'
import "./Rooms.css"
import { useSocket } from '../../../Socket';
import axios from "axios";

const Rooms = ({Roomsdata, SetRoomData,  RoomSelect, NotRoomsdata, SetNotRoomsdata, RoomNotifs, SetRoomNotifs }) => {


  const socket = useSocket();

  // userSelect(null)

  
  const Joinroom = async (room) => {
    //password need to field when user want to join room
    socket?.emit("newmemberinroom", {name: room.roomname, password: ''});
  }

  // useEffect(() => {
  //   let CountMessages = {};
  
  //   RoomNotifs.forEach(notif => {
  //     const type = notif.type;
  //     const id = notif.senderid;
  //     console.log("notif ", notif);
  //     if (type === "roommessage" && id !== selectedFriendId)
  //       CountMessages[id] = (CountMessages[id] || 0) + 1;

  //   });
  //   SetMessagesById(CountMessages);

  // }, [RoomNotifs]);

  const [selectedroom, setSelectedroom] = useState(null);



    const handleroomClick = (room , roomId) => {
      setSelectedroom(room);
      RoomSelect(room);
    };
    
    if (selectedroom && Roomsdata) {
      // Find the updated room data by matching the id with the selected room
      const updatedRoom = Roomsdata.find(room => room.id === selectedroom.id);
      if (updatedRoom) {
        RoomSelect(updatedRoom); 
      }
    }
    if (selectedroom != null)
      socket?.emit('chatroomselected', selectedroom.name);

  return (
    <div className='roomsContainer'>
      <div className="joined_room">
      {
        Roomsdata && Roomsdata.map((room) => 
        (
          <div 
            className={`discussion ${selectedroom != null && room.id === selectedroom.id ? 'message-active' : ''}`}
            onClick={() => handleroomClick(room ,room.id)} 
          >
              <div className="amis-image">
                  <img />
              </div>
    
              <div className="amis-infos">
                  <p className="amis-name"><p>{room.name}</p></p>
                  {/* <p className="last-message">room.lastMessage</p> */}
              </div>
        
              </div>
        ))
      }
      </div>
      <div className="notjoined_room">
      {
        NotRoomsdata && NotRoomsdata.map((room) => 
        (
          <div className="discussion message-active">
              <div className="amis-image">
                  <img />
              </div>
    
              <div className="amis-infos">
                  <p className="amis-name"><p>{room.roomname}</p></p>
                  {/* <p className="last-message">room.lastMessage</p> */}
              </div>
              <div className="amis-status" onClick={() => Joinroom(room)}> join </div>
              </div>
        ))
      }
      </div>
    </div>
  )
}

export default Rooms