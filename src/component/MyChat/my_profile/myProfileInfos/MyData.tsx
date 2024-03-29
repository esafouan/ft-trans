import { React, useEffect, useState } from "react";
import "./MyData.css"
import axios from "axios";

import AddFriendModal from "../../../Modals/addfriend/addfriend";
import Addroom from "../../../Modals/addroom/addroom";


const MyData = ({profileData}) => {

    //stat of friend
    const [showAdd,   setShowAdd] = useState(false);
    const [friendName, setFriendName] = useState("");


    const [showAddRoomForm, setShowAddRoomForm] = useState(false);
    
    const handleAddFriendClick = () => {
          setShowAdd(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try{

            const resp = await axios.post('http://10.14.55.85:3000/api/friends/sendrequest', {login: friendName}, {withCredentials:true});
            setShowAdd(false);
            setFriendName("");
            console.log("response friends = ", resp.data)

        }
        catch(error){
            console.log("error = ",error)
        }
        
    };
    
    
    const handleAddRoomClick = () => {
        setShowAddRoomForm(true);
    };
    

    const handleCancel = () => {
        setShowAdd(false);
        setFriendName(""); // Optionally reset the friendName on cancel
      };
    
    return (
       
            <>
          
            { profileData && (
               
                <div className="contain-img">
                    <div className="button-container">
                        <div className="new new-Friend" onClick={handleAddFriendClick}>
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
                                class="ai ai-PersonAdd"
                            >
                                <circle cx="12" cy="7" r="5" />
                                <path d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" />
                                <path d="M19 14v4" />
                                <path d="M17 16h4" />
                            </svg>
                        </div>
                        <div className="new new-room" onClick={handleAddRoomClick}>
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
                                class="ai ai-ChatAdd"
                            >
                                <path d="M12 8v3m0 0v3m0-3h3m-3 0H9" />
                                <path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07" />
                                <path d="M14 19c-1.236 0-2.598.5-3.841 1.145-1.998 1.037-2.997 1.556-3.489 1.225-.492-.33-.399-1.355-.212-3.404L6.5 17.5" />
                            </svg>
                        </div>
                    </div>
                <div className="myinfo-container">
                    <div className="myImgProfile">
                        <img src={profileData.avatar} alt="Profile" />
                    </div>
                    <div className="myname">
                        <p>{profileData.login}</p>
                    </div>
                </div>
                </div>
                )
            }
            {
                showAdd ? (
                <AddFriendModal
                    show={showAdd}
                    friendName={friendName}
                    setFriendName={setFriendName}
                    onSubmit={handleFormSubmit}
                    onCancel={handleCancel}
                    >
                    </AddFriendModal>
            ) : showAddRoomForm ? (
                <Addroom 
                    setShowAddRoomForm={setShowAddRoomForm} 
                    showAddRoomForm={showAddRoomForm} 
                />
            ) : null
            }
            
            </>
      
    )
}

export default MyData