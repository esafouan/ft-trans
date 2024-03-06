import {React, useEffect, useState} from 'react'

import image1 from '../../../assets/theFlash.jpg'
import image2 from '../../../assets/theFlash.jpg'
import "./friend.css"
import axios from 'axios'
import { Button } from 'react-bootstrap'

const Friend = ( { image, name , FriendId} ) => {



  const [blocked, setBlocked] = useState(false);
  // const [unfriend, setUnfriend] = useState(false);

  const handleBlock = async (FriendId)   => {
    try 
    {
      const response = await axios.post('http://localhost:3000/api/friends/block',{id: FriendId} , {withCredentials: true });
      console.log(response.status);
      setBlocked(true); 
    }
    catch (error) 
    {
      console.error('Error blocking friend:', error);
    }
  };

  //  const handleUnfriend = async (FriendId) => {
  //     try {
  //       const response = await axios.post('http://localhost:3000/api/friends/unfriend',{id: FriendId} , {withCredentials: true });
  //       console.log(response.status);
  //       setUnfriend(true); 
  //     } catch (error) 
  //     {
  //       console.error('Error blocking friend:', error);
  //     }
  //  };

  return (
    <div className='friend'>
      <div className='profileImg'>
        <img src={image} alt={name} />
      </div>
      <div className='friend-name'>{name}</div>
      <div className='unfriend'>
        <span className='material-symbols-outlined'>person_remove</span>
      </div>
      
      <div className='block-friend'>
        {!blocked && (
          <span className='material-symbols-outlined' onClick={() => handleBlock(FriendId)}>
            block
          </span>
        )}
      </div>
      <div className='friend-status'></div>
    </div>
  );
}
  
const Notfriend = ( { image, name }) => {
    return (
      <div className='friend'>
          <div className='profileImg'>
            <img src={image}/>
          </div>
          <div className='friend-name'>
            {name}
          </div>
          <div className='add'>
          <span className="material-symbols-outlined">
            person_add
          </span>
          </div>
          <div className='friend-status'>
          </div>
      </div>
    )
}


const Blockedfriend = ( { image, name }) => {
  return (
    <div className='friend'>
        <div className='profileImg'>
          <img src={image}/>
        </div>
        <div className='friend-name'>
          {name}
        </div>
        <div className='add'>
        <span>
          unblock
        </span>
        </div>
        <div className='friend-status'>
        </div>
    </div>
  )
}


const Friends = () => {
  const [myFriends, setMyFriends] = useState(null);
  // const [selectedOption, setSelectedOption] = useState('friends'); // State to track the selected option

  useEffect(() => {
    const getFriends = async () => {
      try {
        const resp = await axios.get('http://localhost:3000/api/friends/isaccepted', { withCredentials: true });
        setMyFriends(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    getFriends();
  }, []);

  // const handleSelectionChange = (option) => {
  //   setSelectedOption(option);
  // };

  return (
    <div className='friends-container'>
      {myFriends ? (
        <>
          {/* <div className='selection'>
            <div className={`fr ${selectedOption === 'friends' ? 'selected' : ''}`} onClick={() => handleSelectionChange('friends')}>Friends</div>
            <div className={`blocked ${selectedOption === 'blocked' ? 'selected' : ''}`} onClick={() => handleSelectionChange('blocked')}>Blocked</div>
            <div className={`padding ${selectedOption === 'padding' ? 'selected' : ''}`} onClick={() => handleSelectionChange('padding')}>padding</div>
          </div> */}

          <div className='search-friend'>
            <input className="searchInput" type='text' placeholder='Search for a friend...' />
            <span className="material-symbols-outlined"><div className='iconSearch'>search</div></span>
          </div>

          <div className='friends-list'>
            {myFriends ? (
              myFriends.map((friend, index) => (
                <Friend key={index} image={friend.avatar} name={friend.login} FriendId={friend.id} /> ))
            ) : ( <p> No friends </p>)}
          </div>
        </>
      ) : (<p>Loading...</p>)
      }
    </div>
  );
};



export default Friends