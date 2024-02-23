import React from 'react'
import "./Friends.css"


const Friend = ({ friend }) => {
  return (
    <div className="list">
      <div className='imgBox'>
        <img src={friend.image} alt={friend.name} />
      </div>
      <div className="content">
        <h4>{friend.name}</h4>
        <p>{friend.state}</p>
      </div>
    </div>
  );
};

const Friends = ({ friends }) => {
  
  
    return (
      //   <div className="container">
      //   <h3><Friiends</h3>
      //   <div className="box">
      //     <ul>
      //       {friends.map((friend, index) => (
      //        <Friend key={index} friend={friend}/>
      //       ))}
      //     </ul>
      //   </div>
      // </div>
      <></>
  )
}

export default Friends