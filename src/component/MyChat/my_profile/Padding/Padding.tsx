import React, { useEffect, useState } from 'react'
import "./Padding.css"
import axios from 'axios';
const Padding = ({pandding}) => {

 

  const handleAccept = async (friend) => {
    try {
        console.log("id frine = ", friend.id)
        const response = await axios.post('http://localhost:3000/api/friends/acceptrequest', {id: friend.id}, { withCredentials: true });
    } catch (error) {
        console.error( error);
    }
};
  pandding && console.log("pandding =", pandding);

  return (
     <>
      {
       pandding && pandding.size > 0 ? pandding.map((friend) => (
        
        <div className="discussion-pandding">
          <div className="amis-image">
              <img src={friend.avatar}/>
          </div>

          <div className="amis-infos">
              <p className="amis-name"><p>{friend.login}</p></p>
          </div>

          <div className="amis-stat"> 
              <div className="reject" >reject</div>
              <div className='accept' onClick={() => handleAccept(friend)}>accept</div>
          </div>
          </div>
        )) : (
            <p className='no-pen'> No friend request </p>
        )
 
      }  
     </>

  )
}

export default Padding