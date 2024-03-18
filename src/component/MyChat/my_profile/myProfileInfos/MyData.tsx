import { React, useEffect, useState } from "react";
import "./MyData.css"
import axios from "axios";
import { useSocket } from "../../../Socket";


const MyData = ({profileData}) => {

    //stat of friend
    const [showAddFriendForm, setShowAddFriendForm] = useState(false);
    //friend name
    const [friendName, setFriendName] = useState("");
    //show password of room
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    //room passWord
    const [roomPassword, setRoomPassword] = useState('');
    //roomType
    const [roomType, setRoomType] = useState('public');   
    //stat of room
    const [showAddRoomForm, setShowAddRoomForm] = useState(false);
    //room name
    const [RoomName, setRoomName] = useState("");

    const socket = useSocket();
    const handleAddFriendClick = () => {
        setShowAddFriendForm(true);
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const resp = await axios.post('http://localhost:3000/api/friends/sendrequest', {login: friendName}, {withCredentials:true});
        setShowAddFriendForm(false);
        setFriendName("");
    };
    
    
    const handleAddRoomClick = () => {
        setShowAddRoomForm(true);
    };
    


    const handleRoomCreat = async (e) => {
        e.preventDefault();
        //send to backend
        const resp = await axios.post('http://localhost:3000/api/room/createroom', {roomname: RoomName ,type : roomType, password : roomPassword}, {withCredentials:true});
        socket.emit('newroom');
        setShowAddRoomForm(false);
        setRoomName("");
    };

    return (
        <div>
            { profileData && !showAddFriendForm && !showAddRoomForm? (
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
            ) : showAddFriendForm ? (
                <div className="add-container">
                    <input
                        className="input-add"
                        type="text"
                        value={friendName}
                        onChange={(e) => setFriendName(e.target.value)}
                        placeholder="Enter friend's name"
                    />
                    <div className="butt-add">
                        <div className="But submit-But" onClick={handleFormSubmit}>
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
                                class="ai ai-Check"
                            >
                                <path d="M4 12l6 6L20 6" />
                            </svg>
                        </div>
                        <div className="But Cancel-But"
                        onClick={() => setShowAddFriendForm(false)}>
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
                                class="ai ai-Cross"
                            >
                                <path d="M20 20L4 4m16 0L4 20" />
                            </svg>
                        </div>
                    </div>
                </div>
            ) : showAddRoomForm ? (
                <div className="room-container">
                    <input
                        className="room-input"
                        type="text"
                        value={RoomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        placeholder="Enter Room's name"
                    />
                    <div className="types">
                        <div className="types-container">

                            <label className="public-container">
                                <input
                                    type="radio"
                                    value="public"
                                    checked={roomType === "public"}
                                    onChange={(e) => {
                                        setRoomType(e.target.value);
                                        setShowPasswordInput(false);
                                    }}
                                />
                                <p>Public</p>
                            </label>

                            <label className="private-container">
                                <input
                                    type="radio"
                                value="private"
                                checked={roomType === "private"}
                                onChange={(e) => {
                                    setRoomType(e.target.value);
                                    setShowPasswordInput(false);
                                }}
                                />
                                <p>private</p>
                            </label>   

                            <label className="protected-container">
                                <input
                                type="radio"
                                value="protected"
                                checked={roomType === "protected"}
                                onChange={(e) => {
                                    setRoomType(e.target.value);
                                    if (e.target.value === "protected") {
                                        setShowPasswordInput(true);
                                    } else {
                                        setShowPasswordInput(false);
                                    }
                                }}
                                />
                                <p>protected</p>
                            </label>

                        </div>    
                        {showPasswordInput && (
                            <input
                            className="password-container"
                            type="password"
                            value={roomPassword}
                            onChange={(e) => setRoomPassword(e.target.value)}
                            placeholder="Enter room password"
                            />
                        )}
                    </div>
                    <div className="room-butt">
                        <div className="But submit-But" onClick={handleRoomCreat}>
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
                                class="ai ai-Check"
                            >
                                <path d="M4 12l6 6L20 6" />
                            </svg>
                        </div>
                        <div className="But Cancel-But"
                        onClick={() => setShowAddRoomForm(false)}>
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
                                class="ai ai-Cross"
                            >
                                <path d="M20 20L4 4m16 0L4 20" />
                            </svg>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default MyData