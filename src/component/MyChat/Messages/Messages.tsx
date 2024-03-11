import React, { useEffect, useState } from 'react'
import "./Messages.css"
import axios from 'axios';

const Messages = ({Id, user}) => {

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
        
        <div className="inputPart">
                <div className="inputPart__container">
                    <input className="inputPart__input " placeholder="Type a message..." />
                    <button className="send-message-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="1036">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
        </div>

    </div>
  )
}

export default Messages