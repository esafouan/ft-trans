import React, { useEffect, useState, useRef } from 'react'
import "./Messages.css"
import axios from 'axios';
import Input from "./inputPart/Input"
import Profile from '../../Profile/Profile';





const Messages = ({optionSelected ,room, user, profile, MessagesData, MessagesRoom}) => {

    const messagesEndRef = useRef(null);

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [MessagesData]); 

  return (

    <div className='messages-container'> 
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
                    
                    <div className="new-chat"  >
                        { MessagesData && MessagesData.map((message) => (
                            
                                <div
                                    key={message.senderId}
                                    className={`message ${message.senderId === user.id ? 'parker' : 'stark'}`}>
                                    {console.log(message.content, "user id = " , user.id)}
                                    {message.content}
                                </div>
                            ))   
                        }
                        <div className="nwestMessages" ref={messagesEndRef}></div>
                    </div>
                
                </div>
                
                <Input
                    User={user} 
                    Room={room} 
                    Profile={profile}/>
            </>
          )
           : (room) ? (
            <> 
                <div className= 'headPart'> 
                    {
                        room && 
                        <>
                            <div className="img-cont">
                                <img  />
                            </div >

                            <div className="text">
                                <p className='friend-nm'>{room.name}</p>
                                {/* <p className='friend-stat'>online</p> */}
                            </div>
                        </>
                    }

                </div>

                <div className= 'midlePart'> 
                    
                    <div className="new-chat">
                    
                    { MessagesRoom && MessagesRoom.map((message) => (
                            <div
                                key={message.senderId }
                                className={`message ${message.senderId !== profile.id ? 'parker' : 'stark'}`}>
                            {message.content}
                            </div>
                        ))
                    
                    }

                    
                    </div>
                
                </div>
                
                <Input
                    User={user}
                    Room={room} 
                    Profile={profile}

                />
            </>
          )
          : (<div className='No-conv'> <p> Select New Conversation Please </p> </div>)
        }

    </div>

  )
}

export default Messages