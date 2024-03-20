import React, { useEffect, useState } from 'react'
import "./Messages.css"
import axios from 'axios';
import Input from "./inputPart/Input"
import { useSocket } from '../../Socket';
import Profile from '../../Profile/Profile';





const Messages = ({optionSelected ,room, user, profile}) => {

//id is convertation id


    const socket = useSocket();
    /////// friends messages ///////
    const [MessagesData, SetMessages] = useState([]);
    const [FetchMessages, SetFetch] = useState(0);

    // const [MessagesRoom, SetMessagesRoom] = useState([]);
    // const [FetchMessagesRoom, SetFetchRoom] = useState(0);
    
    useEffect(() => {
        const getMessages  = async () => {
            try 
            {
                if (user) {
                    const resp = await axios.post('http://localhost:3000/api/chat/getconversation',{id: user.id},  {withCredentials: true})
                    SetMessages(resp.data);
                    socket.emit('notif',{type:"message",senderid: user.id})
                }
                else {
                    SetMessages ([]);
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getMessages();
       }
    , [user, FetchMessages]);
       
    useEffect(() => {
        socket?.on('message', ()=> {
            SetFetch((prevIsBool) => prevIsBool + 1)
            
        });
        return () => {
            socket?.off('message');
        };
    }, [socket]);
    
    // useEffect(() => {
    //     const getMessages  = async () => {
    //         try 
    //         {
    //             if (room) {
    //                 console.log("go to fetch");
    //                 const resp = await axios.post('http://localhost:3000/api/chat/getroomconversation',{roomname: room.name},  {withCredentials: true})
    //                 SetMessagesRoom(resp.data);
    //                 socket.emit('roomnotif', room.name)
    //             }
    //             else {
    //                 SetMessagesRoom ([]);
    //             }
    //         }
    //         catch(error){
    //             console.log(error)
    //         }
    //     }
    //     getMessages();
    //    }
    // , [room, FetchMessagesRoom]);
       
    // useEffect(() => {
    //     socket?.on('roomchat', ()=> {
    //         SetFetchRoom((prevIsBool) => prevIsBool + 1)
            
    // });
    //   return () => {
    //     socket?.off('roomchat');
    //   };
    // }, [socket]);

    // room && console.log("room name", room.name);

    // console.log(user);
    // MessagesRoom && console.log("room messages", MessagesRoom);

    user && console.log("user = ",user);
    MessagesData && console.log("MessagesData = ",MessagesData);
  return (

    <div className='messages-container'  > 
        {
           user ? (
            <>
                <div className= 'headPart'> 
                    {
                        user && 
                        <>
                            <div className="img-cont">
                                <img  src={user.avatar}/>
                            </div >

                            <div className="text">
                                <p className='friend-nm'>{user.login}</p>
                                {/* <p className='friend-stat'>online</p> */}
                            </div>
                        </>
                    }

                </div>

                <div className= 'midlePart' key={user.id} > 
                    
                    <ul className="new-chat"  >
                    
                    { MessagesData.length > 0 && MessagesData.map((message) => (
                            <li
                                key={message.senderId}
                                className={`message ${message.senderId === user.id ? 'parker' : 'stark'}`}>
                                {message.content}
                            </li>
                        ))
                    
                    }

                    
                    </ul>
                
                </div>
                
                <Input
                    User={user} 
                    Room={room} 
                    Profile={profile}
                    // addNewMessage={handleNewMessage}
                />
            </>
          )
        //    : (room) ? (
        //     <>
        //         <div className= 'headPart'> 
        //             {
        //                 room && 
        //                 <>
        //                     <div className="img-cont">
        //                         <img  />
        //                     </div >

        //                     <div className="text">
        //                         <p className='friend-nm'>{room.name}</p>
        //                         {/* <p className='friend-stat'>online</p> */}
        //                     </div>
        //                 </>
        //             }

        //         </div>

        //         <div className= 'midlePart'> 
                    
        //             <div className="new-chat">
                    
        //             { MessagesRoom.length > 0 && MessagesRoom.map((message) => (
        //                     <div
        //                         key={message.senderId }
        //                         className={`message ${message.senderId !== profile.id ? 'parker' : 'stark'}`}>
        //                     {message.content}
        //                     </div>
        //                 ))
                    
        //             }

                    
        //             </div>
                
        //         </div>
                
        //         <Input
        //             User={user}
        //             Room={room} 
        //             Profile={profile}
        //             // addNewMessage={handleNewMessage}
        //         />
        //     </>
        //   )
          : (<div className='No-conv'> <p> Select New Conversation Please </p> </div>)
        }

    </div>

  )
}

export default Messages