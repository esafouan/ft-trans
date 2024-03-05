import React from 'react'
import "./My_profile.css"





 const MessagesList = () => {
  return (
    <div className ="content-messages-list">
        {/* <a href="#" data-conversation="#conversation-1"> */}

            <img className ="content-message-image"  alt=""  />

            <span className ="content-message-info">
                <span className ="content-message-name">Someone</span>
                <span className ="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
            </span>

            <span className ="content-message-more">
                <span className ="content-message-unread">5</span>
                <span className ="content-message-time">12:30</span>
            </span>

        {/* </a> */}
    </div>
  )
}



const My_profile = () => {
  return (
    <div className ='Myprofile'>

        <div className ="myImgProfile">
            <img />
        </div>

        <div className= "myname">
            <p>  </p>
        </div>

        <div className ='discussions'>    
            <div className="discussion message-active"> 
            
                 <div className='amis-image'>
                   
                        <img />
                   
                    <div className='on-off'></div>
                 </div>
            
                 <div className='amis-infos'> 
                    <p className='amis-name'></p>
                    <p className='last-message'></p>
                 </div>
            
            </div>
        </div>

    </div>
  )
}

export default My_profile