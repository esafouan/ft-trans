import React, { useState } from 'react'
import './Avatar.css'


import img1 from '../../assets/bat.jpg'
import img2 from '../../assets/superman.jpg'
import img3 from '../../assets/theFlash.jpg'
import img4 from '../../assets/greenlatern.jpg' 
import { Button } from 'react-bootstrap'

const Avatar = () => {
  const [avatarSelected, setAvatar] = useState(null);
  const [nameSelected, setName] = useState('');
  
  
  const avatars = {
      'bat-man' : img1,
      'super-man' : img2,
      'the-flash' : img3,
      'green-lantern' : img4
  }

  const handleAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const handleName = (event) => {
    setName(event.target.value);
  }
  
const handleSubmit = () => {

  console.log(nameSelected);
  console.log(avatarSelected);
}

  return (
    <div className='container'>
        
        <div className='name'>

          <div className= 'profile-image' >
            <img src={avatarSelected ? avatars[avatarSelected] : ''} className='image'></img>
          </div>
  
          <div className= 'your-name' >
            <input placeholder='PLAYER NAME' value={nameSelected} onChange={handleName}></input>
          </div>
          <div className= 'submit-button' >
            <Button onClick={handleSubmit}>CREAT</Button>
          </div>
        </div>
        <div className='avatar'>
          <div className='chose-avatar'> chose Avatar </div>
          
          <div className='characters'>
            <li className='bat-man' onClick={() => handleAvatar('bat-man') }></li>
            <li className='super-man' onClick={() => handleAvatar('super-man') }> </li>
            <li className='green-lantern' onClick={() => handleAvatar('green-lantern') }> </li>
            <li className='the-flash' onClick={() => handleAvatar('the-flash') }> </li>
          </div>

        </div>

    </div>
  )
}

export default Avatar
