import { useState } from "react"
import React  from 'react'
import "./friends.css"

const Friends_discusion = ({onSelect, friendsData ,userSelect}) => {

  const [selectedFriendId, setSelectedFriendId] = useState(null);
  // console.log(friendsData);
  const handleFriendClick = (friend , friendId) => {
    setSelectedFriendId(friendId);
    onSelect(friendId);
    userSelect(friend);
  };

  return (
    <div>
      {friendsData && friendsData.map((friend) => (
        <div
          key={friend.id}
          className={`discussion ${friend.id === selectedFriendId ? 'message-active' : ''}`}
          onClick={() => handleFriendClick(friend ,friend.id)}
        >
          <div className="amis-image">
            <img  src={friend.avatar}/>
          </div>
          <div className="amis-infos">
            <p className="amis-name"> <p>{friend.login}</p></p>

            {/* <p className="last-message">{friend.lastMessage}</p> */}
          </div>
          {/* <div className="amis-status">{friend.status}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Friends_discusion;

