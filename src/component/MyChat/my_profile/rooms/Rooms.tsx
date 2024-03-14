import React from 'react'
import "./Rooms.css"
const Rooms = ({Roomsdata, onSelect, userSelect}) => {
  // console.log(Roomsdata);
  
  
  onSelect(-1);
  userSelect(null)
  return (
    <div className="discussion message-active">
                
        <div className="amis-image">
            <img />
        </div>

        <div className="amis-infos">
            <p className="amis-name"><p>Leaders</p></p>
            <p className="last-message">feen cv kolche mzn?</p>
        </div>
   
    </div>
  )
}

export default Rooms