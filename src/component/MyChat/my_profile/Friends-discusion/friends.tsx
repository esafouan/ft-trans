import { useState } from "react"
import React  from 'react'
import "./friends.css"
// MessagebyId={MessagebyId}
// setMessageById={setMessagebyId}
const Friends_discusion = ({onSelect, friendsData ,userSelect,  MessagebyId, SetNotifs, setMessageById}) => {

  const [selectedFriendId, setSelectedFriendId] = useState(null);
  // console.log(friendsData);
  const handleFriendClick = (friend , friendId) => {
    setSelectedFriendId(friendId);
    onSelect(friendId);
    userSelect(friend);
    MessagebyId[friendId] = 0;
    
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
          {friend.id !== selectedFriendId && MessagebyId[friend.id] > 0 && <div className="amis-status">{MessagebyId[friend.id]}</div>}
        </div>
      ))}
    </div>
  );
};

export default Friends_discusion;

