import React, { useEffect, useState } from 'react'
import "./Messages.css"
import axios from 'axios';
import Input from "./inputPart/Input"

const Messages = ({Id, user, profile}) => {

//id is convertation id

const [MessagesData, SetMessages] = useState(null);     


    useEffect(() => {
        const getMessages  = async () => {
            try {
                    console.log("heeeee = " , Id);
                    if (Id >= 0) {
                        const resp = await axios.post('http://localhost:3000/api/chat/getconversation',{id: Id},  {withCredentials: true})
                        SetMessages(resp.data);
                    }
                    else {
                        SetMessages (null);
                    }
                }
                catch(error){
                    console.log(error)
                }
            }
            getMessages();
       }
       , [Id]);

   
    (MessagesData && console.log(MessagesData))

  return (
    <div className='messages-container'>

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

        <div className= 'midlePart'> 
            
            <div className="new-chat">

            
            { MessagesData && MessagesData.map((message) => (
                    <div
                        key={message.id}
                        className={`message ${message.senderId === Id ? 'parker' : 'stark'}`}>
                    {message.content}
                    </div>
                ))}

            
            </div>
        
        </div>
        
        <Input
            User={user} 
            Profile={profile}
        />

    </div>
  )
}

export default Messages