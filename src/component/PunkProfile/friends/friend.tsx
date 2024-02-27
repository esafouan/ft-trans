import {React, useState} from 'react'

import image1 from '../../../assets/theFlash.jpg'
import image2 from '../../../assets/theFlash.jpg'
import "./friend.css"

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
  


const Friends = () => {

    const myfriends = [
        { image: image1, name: 'Friend 1', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image1, name: 'Friend 1', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        { image: image2, name: 'Hamid', state: 'Online' },
        
      ];
    
      const [searchQuery, setSearchQuery] = useState('');
    
      const [Filterfriend, setFilterfriend] = useState(null); // State to hold search result
    
    
      const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
    
      const handleSearch = async () => {
        // Perform search operations
        // For now, just find the first matching friend if exists
        const result = myfriends.find((friend) => friend.name.toLowerCase() === searchQuery.toLowerCase());
        setFilterfriend(result);
        setlistFriend(true); // Set to true after finding the search result
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
            
                {Filterfriend ? (
                    
                    <Friend image={Filterfriend.image} name={Filterfriend.name} />
                    //handle non friends

                ) : (
                
                    myfriends.map((friend, index) => (
                    <Friend key={index} image={friend.image} name={friend.name} />
                    ))
                )}
            </div>
         </div>
  )
}

export default Friends