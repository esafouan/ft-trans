import { useState } from "react"
import React  from 'react'
import "./friends.css"

const Friends_discusion = ({onSelect, friendsData }) => {

  const [selectedFriendId, setSelectedFriendId] = useState(null);
  console.log(friendsData);
  const handleFriendClick = (friendId) => {
    setSelectedFriendId(friendId);
    onSelect(friendId);
  };

  return (
    <div>
      {friendsData.map((friend) => (
        <div
          key={friend.id}
          className={`discussion ${friend.id === selectedFriendId ? 'message-active' : ''}`}
          onClick={() => handleFriendClick(friend.id)}
        >
          <div className="amis-image">
            <img  />
          </div>
          <div className="amis-infos">
            <p className="amis-name"> <p>{friend.username}</p></p>
            <p className="last-message">{friend.lastMessage}</p>
          </div>
          <div className="amis-status">{friend.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Friends_discusion;

