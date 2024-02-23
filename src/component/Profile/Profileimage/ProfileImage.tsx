import React from 'react'
import Pimage from './Pimage/pimage'
import Name from './name/name'
import "./ProfileImage.css"

const ProfileImage = () => {
  return (
    <div className='image-name'> 
        <Pimage />    
        <Name />
    </div>
  )
}

export default ProfileImage