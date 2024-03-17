import React, { useEffect, useState } from 'react'
import "./Rooms.css"
import { useSocket } from '../../../Socket';
import axios from "axios";

const Rooms = ({Roomsdata, SetRoomData, onSelect, userSelect, NotRoomsdata, SetNotRoomsdata, }) => {
  // console.log(Roomsdata);
  const socket = useSocket();
  onSelect(-1);
  userSelect(null)
  Roomsdata && console.log("room infos = ", Roomsdata)
  
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
    const resp = await axios.post('http://localhost:3000/api/room/userjoinroom', {name: room.roomname, password: ''}, {withCredentials:true})
  }
  return (
    <div className='roomsContainer'>
      <div className="joined_room">
      {
        Roomsdata && Roomsdata.map((room) => 
        (
          <div className="discussion message-active">
              <div className="amis-image">
                  <img />
              </div>
    
              <div className="amis-infos">
                  <p className="amis-name"><p>{room.roomname}</p></p>
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
                  <p className="last-message">room.lastMessage</p>
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