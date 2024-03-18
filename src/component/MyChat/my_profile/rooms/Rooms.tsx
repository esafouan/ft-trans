import React, { useEffect, useState } from 'react'
import "./Rooms.css"
import { useSocket } from '../../../Socket';
import axios from "axios";

const Rooms = ({Roomsdata, SetRoomData, onSelect, RoomSelect, NotRoomsdata, SetNotRoomsdata, }) => {


  const socket = useSocket();
  // onSelect(-1);
  // userSelect(null)

  
  // useEffect(() => {
  //   socket?.on('', (payload) => {
  //     SetRoomData(prevRoomData =>[...prevRoomData, {}])
  //   })
  //   return () => {
  //     socket?.off('');
  //   }
  // }, [socket])
  const Joinroom = async (room) => {
    //password need to field when user want to join room
    socket?.emit("newmemberinroom", {name: room.roomname, password: ''});
  }


 


    const [selectedroom, setSelectedroom] = useState(null);
    console.log("room = ",selectedroom);


    const handleroomClick = (room , roomId) => {
      setSelectedroom(room);
      onSelect(roomId);
      RoomSelect(room);
    };
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