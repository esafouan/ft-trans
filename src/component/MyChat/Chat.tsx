import React from 'react'
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css"
import My_profile from './my_profile/My_profile';
import Messages from './Messages/Messages';
const Chat = () => {
  return (
    <div className='chat-container'>

        <div className='chat'>

          <My_profile />

          <Messages />
          {/* <div className='OtherProfile'>
                <div className="otherImgProfile">
                    <img />
                </div>

                <div className="Othername">
                    <p>  </p>
                </div>
          </div> */}
        </div>

        <MenuBar/>
    </div>
  )
  
}

export default Chat