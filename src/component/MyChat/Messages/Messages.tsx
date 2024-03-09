import React from 'react'
import "./Messages.css"
const Messages = () => {
  return (
    <div className='messages-container'>

        <div className= 'headPart'> 

            <div className="img-cont">
                <img  />
            </div >

            <div className="text">
                <p className='friend-nm'>Saad</p>
                <p className='friend-stat'>online</p>
            </div>

        </div>


        <div className= 'midlePart'> 
            
            <div className="new-chat">
                <div className="time">
                    Today at 11:41
                </div>

                <div className="message parker">
                    Hey, man! What' up, Mr hhh&nbsp;👋
                </div>
                <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>
                <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>      <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>      <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>      <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>      <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>      <div className="message parker">
                    Hey, man! What' up, Mr Stark?&nbsp;👋
                </div>

                <div className="message stark">
                    Kid, where'd you come from? 
                </div>
            
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