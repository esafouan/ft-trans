import React, { useState } from 'react'
import "./FriendInfo.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FriendInfo = ({user ,profile, UserSelceted}) => {

  const handleBlock = async (userid : number) => {
        try {
            const resp = await axios.post('http://10.14.55.85:3000/api/friends/block', {id: userid}, {withCredentials:true});
            UserSelceted(null);
         
          }
        catch (error){
            console.log(error);
        }
  }

  const handleUnfriend = async (userid : number) => {
    try {
      const resp = await axios.post('http://10.14.55.85:3000/api/friends/unfriend', {id: userid}, {withCredentials:true});
      UserSelceted(null);
   
    }
    catch (error){
        console.log(error);
    }
}

const navigate = useNavigate();

const goToprofile = () => {
  user && navigate(`/profile/${user.id}`, { state: { userData: user } });
}

return (
    <>
       {user
        ? (<>
            <div className="other-title">
              <p>Infos</p>
            </div>

            <div className="Otherimg">
              <img src={user.avatar} onClick={goToprofile}/>
            </div>

            <div className="Othername">
              <p> {user.login} </p>
            </div>

            <div className="other-options">
              
              <div className="friend-options">
                
                <div className="opt block-option" onClick={() => handleBlock(user.id)}>
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ai ai-Block"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M5 19L19 5" />
                  </svg>
                
                </div>

                <div className="opt unfriend-option" onClick={() => handleUnfriend(user.id)}>
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ai ai-PersonCross"
                  >
                    <circle cx="12" cy="7" r="5" />
                    <path d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" />
                    <path d="M21 18l-3-3m3 0l-3 3" />
                  
                  </svg>
                
                </div>

                <div className="opt play-option">

                  <svg fill="#ffffff" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 297 297" xml:space="preserve">
                  <g>
                    <circle cx="263.157" cy="260.782" r="33.843"/>
                    <path d="M242.24,37.999c-47.497-47.499-124.782-47.497-172.28,0C58.316,49.643,49.245,63.446,43.162,78.486l158.59,158.59
                      c15.041-6.083,28.844-15.154,40.487-26.798C289.738,162.782,289.738,85.496,242.24,37.999z"/>
                    <path d="M34.66,114.53c-2.104,26.784,4.696,53.523,19.205,75.878L1.803,242.472c-2.404,2.403-2.404,6.298,0,8.701l27.263,27.263
                      c1.201,1.202,2.775,1.803,4.351,1.803c1.574,0,3.15-0.601,4.351-1.802l52.064-52.063c22.356,14.51,49.09,21.308,75.878,19.205
                      c4.607-0.362,9.171-0.989,13.673-1.865L36.525,100.857C35.649,105.359,35.022,109.923,34.66,114.53z"/>
                  </g>
                  </svg>

                </div>
              </div>

              {/* handle adding new Friend */}

              <div className="add-new-friend"></div>

            </div>
          </>) 
        : ( <div className='no-info'><p>No informations</p></div>)}
     </>
    )
  }

  export default FriendInfo