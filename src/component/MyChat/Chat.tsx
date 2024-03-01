import React from 'react'
import MenuBar from "../PunkProfile/MenuBar/MenuBar";
import "./Chat.css"
const Chat = () => {
  return (
    <div className='chat-container'>

        <div className='chat'>
          <div className='Myprofile'>

            <div className="myImgProfile">
                <img />
            </div>

            <div className="myname">
                <p>  </p>
            </div>

          </div>

          <div className='messages'>

            <div className= 'headPart'> 
            
              <div className="img-cont">
                <img className="dp"  />
              </div >
              <div className="text">
                <h4 className="nm">Saad<span className='stat'>Online</span></h4>
              </div>

            </div>
            <div className= 'midlePart'> </div>
            <div className= 'inputPart'> </div>

          </div>

          <div className='OtherProfile'>
                <div className="otherImgProfile">
                    <img />
                </div>

                <div className="Othername">
                    <p>  </p>
                </div>
          </div>
        </div>

        <MenuBar/>
    </div>
  )
  
}

export default Chat