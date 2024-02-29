import {React, useEffect, useState} from 'react'

import image1 from '../../../assets/theFlash.jpg'
import image2 from '../../../assets/theFlash.jpg'
import "./friend.css"
import axios from 'axios'
const Friend = ( { image, name } ) => {
    return (
      <div className='friend'>
          <div className='profileImg'>
            <img src={image}/>
          </div>
          <div className='friend-name'>
            {name}
          </div>
          <div className='unfriend'>
            <span className="material-symbols-outlined">
              person_remove
            </span>
          </div>
          <div className='block-friend'>
            <span className="material-symbols-outlined">
              block
            </span>
          </div>
          <div className='friend-status'>
          </div>
      </div>
    )
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

    const Users = [
        { image: image1, name: 'Friend 1', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image1, name: 'Friend 2', state: 'Online' },
        { image: image2, name: 'aziz', state: 'Online' },
        { image: image2, name: 'salah', state: 'Online' },
        { image: image2, name: 'reda', state: 'Online' },
        { image: image2, name: 'saad', state: 'Online' },
        { image: image2, name: 'king', state: 'Online' },
         
    ];

    const myfriends = [
      { image: image2, name: 'salah', state: 'Online' },
      { image: image2, name: 'reda', state: 'Online' },
      { image: image2, name: 'saad', state: 'Online' },
      { image: image2, name: 'king', state: 'Online' },
       
    ];

    const blocks = [
      { image: image2, name: 'aziz', state: 'Online' },
    ]



    const [searchQuery, setSearchQuery] = useState('');
    const [Filterfriend, setFilterfriend] = useState(null); //State to store search result
    
    const [users, setUsers] = useState([]);
    const [Myfriends, setMyfriends] = useState([]);
    const [Blocks, setBlocks] = useState([]);

    useEffect(() => {
      
      //fetch users data
      const getUsers = async () => {
        try {
          const resp = await axios.get('');
          setUsers(resp.data);
        }
        catch(error){
          console.log(error);
        }
      }
      //fetch friends data
      const getFriends = async () => {
        try {
          const resp = await axios.get('');
          setMyfriends(resp.data);
        }
        catch(error){
          console.log(error);
        }
      }
      
      //fetch blocksFriend data
      const getBlocked = async () => {
        try {
          const resp = await axios.get('');
          setBlocks(resp.data);
        }
        catch(error){
          console.log(error);
        }
      }

      getUsers();
      getFriends();
      getBlocked();

    }, []);


    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
  
    const handleSearch = async () => {
      // Perform search operations
      // For now, just find the first matching friend if exists
      const result = Users.find((friend) => friend.name.toLowerCase() === searchQuery.toLowerCase());
      setFilterfriend(result);
      setlistFriend(true); // Set to true after finding the search result
    };

    
    const isFriend = (friend) => {
      for (const fr of myfriends) {
        if (fr.name === friend.name)
          return true; // Friend is blocked
      }
      return false; // Friend is not blocked
    };


    const isBlocked = (friend) => {
      for (const bl of blocks) {
        if (bl.name === friend.name)
          return true; // Friend is blocked
      }
      return false; // Friend is not blocked
    };


    return (
      <div className='friends-container'>

          <div className='search-friend'>
              <input  className="searchInput" type='text' 
                      placeholder='Search for a friend...' 
                      onChange={handleSearchChange} />
              <span className="material-symbols-outlined" onClick={handleSearch}> <div className='iconSearch'>search</div> </span>
          </div>
      
          <div className='friends-list'>
            {
              Filterfriend 
              ? (
                  <>
                    {
                      isFriend(Filterfriend) ? ( <Friend image={Filterfriend.image} name={Filterfriend.name} /> ) 
                      : isBlocked(Filterfriend) ? ( <Blockedfriend image={Filterfriend.image} name={Filterfriend.name} /> ) 
                      : ( <Notfriend image={Filterfriend.image} name={Filterfriend.name} />)
                    }
                  </>
                ) 
              : 
                (myfriends.map((friend, index) => ( <Friend key={index} image={friend.image} name={friend.name} /> )))
            }
          </div>

        </div>
  )
}

export default Friends