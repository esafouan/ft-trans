import React from 'react'
import "./RoomInfo.css"

const RoomInfo = () => {
    return (
        <>
            <div className="other-title">
              <p>Infos</p>
            </div>
  
            <div className="Otherimg">
              <img />
            </div>
  
            <div className="Othername">
              <p> Leaders </p>
            </div>
  
            <div className="other-options">
              
              <div className="friend-options">

                <div className="opt leave-option">
                </div>

                <div className="opt unfriend-option">
                </div>

                <div className="opt play-option">
                </div>

              </div>
  
              {/* handle adding new Friend */}
  
              <div className="add-new-friend"></div>
  
            </div>
  
        </>
    )
  }

  export default RoomInfo