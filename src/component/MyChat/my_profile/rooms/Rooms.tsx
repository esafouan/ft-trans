import React, { useEffect, useState } from 'react'
import "./Rooms.css"
import { useSocket } from '../../../Socket';
import axios from "axios";
import CodeModal from '../../../Modals/RoomCode/RoomCode';

const Rooms = ({Roomsdata, SetRoomData, selectedroom, RoomSelect, NotRoomsdata, SetNotRoomsdata, RoomNotifs, SetRoomNotifs , SetMessagesRoom}) => {


  const socket = useSocket();


  const [showPass, SetShow] = useState(false);
  const [Pass, SetPass] = useState('');
  const [joined, Setjoined] = useState(null);
  const Joinroom = async (room) => {
    //password need to field when user want to join room
    if (room.type == 'public')
       socket?.emit("newmemberinroom", {name: room.roomname, password: ''});
    else if (room.type == 'protected')
    {

      Setjoined(room)
      SetShow(true)
    }
  }


    const handleroomClick = (room , roomId) => {
      if( selectedroom && room.name !== selectedroom.name){
        SetMessagesRoom(null);
        socket?.emit('chatroomdeselected', selectedroom.name);
      }
      if (selectedroom && selectedroom.name != room.name)
        SetMessagesRoom(null);
      // setSelectedroom(room);
      RoomSelect(room);
      socket?.emit('notifroom', room.name);
      socket?.emit('chatroomselected', room.name);
    };
    
    if (selectedroom && Roomsdata) {
      // Find the updated room data by matching the id with the selected room
      const updatedRoom = Roomsdata.find(room => room.id === selectedroom.id);
      if (updatedRoom) {
        RoomSelect(updatedRoom); 
      }
      useEffect(()=> {
     
        const memberLeaved = () => {
          socket?.on('ileaved', () => {
            selectedroom && socket?.emit('chatroomdeselected', selectedroom.name) && RoomSelect(null)
          });
        }
        memberLeaved()
        return () => {

          socket?.off('ileaved');
        };
      },[socket]) 
    }
    const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("joined = ",joined);
        joined && socket?.emit("newmemberinroom", {name: joined.roomname, password: Pass});
        SetShow(false);
        SetPass("");
    }
    catch(error){
        console.log("error = ",error)
    }
};

const handleCancel = () => {
    SetShow(false);
    SetPass("");
};  


    NotRoomsdata && console.log("not joined -> ",NotRoomsdata);
   


  return (
    <div className='roomsContainer'>
      <div className="joined_room">

        {Roomsdata && Roomsdata.map((room) => (
          <div 
            className={`discussion ${selectedroom != null && room.id === selectedroom.id ? 'message-active' : ''}`}
            onClick={() => handleroomClick(room, room.id)} 
          >
            <div className="amis-image">
              <img />
            </div>

            <div className="amis-infos">
              <p className="amis-name"><p>{room.name}</p></p>
              {/* <p className="last-message">room.lastMessage</p> */}
            </div>

            {RoomNotifs && (
              (selectedroom && room.name !== selectedroom.name) ||
              (RoomNotifs.find(notification => notification.roomname === room.name)?.count > 0)
            ) ? (
              <div className="amis-status">
                {RoomNotifs.find(notification => notification.roomname === room.name)?.count}
              </div>
            ) : (null)}
          </div>
        ))}
      </div>
      <div className="notjoined_room">
      <p className='notjoind-title'>available rooms</p>
      {
        NotRoomsdata && NotRoomsdata.map((room) => 
        (
          room.type !== 'private' && (
            <div className="discussion" key={room.id}>
              <div className="amis-image">
                <img src={room.profileImage}  />
              </div>
              <div className="amis-infos">
                <p className="amis-name">{room.roomname}</p>
                {/* <p className="last-message">{room.lastMessage}</p> */}
              </div>
              <div className="amis-status" onClick={() => Joinroom(room)}> join </div>
            </div>
          )     
        ))
      }
      {showPass && 
      <CodeModal 
          password={Pass}
          setPassword={SetPass}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
      />}
      </div>
    </div>
  )
}

export default Rooms