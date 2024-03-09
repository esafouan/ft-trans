import{ React , useState} from "react";
import "./My_profile.css";
import Friends_discusion from "./Friends-discusion/friends";
import Blocked from "./Blocked/Blocked";
import Padding from "./Padding/Padding";
import Rooms from "./rooms/Rooms";


const My_profile = () => {



const [optionSelected, SetOption] = useState('friends');



const HandleSetOption = (option : any) => {
    SetOption(option);
}



return (
    <div className="Myprofile">

      <div className="myImgProfile">
        <img />
      </div>
      <div className="myname">
        <p> mahdi</p>
      </div>

      <div className="selections">

        <div className={`select section-friends ${optionSelected === 'friends' ? 'selected' : ''}`} onClick={() => HandleSetOption('friends')}>
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
            class="ai ai-PeopleMultiple"
          >
            <circle cx="7" cy="6" r="3" />
            <path d="M10 13H5.818a3 3 0 0 0-2.964 2.537L2.36 18.69A2 2 0 0 0 4.337 21H9" />
            <path d="M21.64 18.691l-.494-3.154A3 3 0 0 0 18.182 13h-2.364a3 3 0 0 0-2.964 2.537l-.493 3.154A2 2 0 0 0 14.337 21h5.326a2 2 0 0 0 1.976-2.309z" />
            <circle cx="17" cy="6" r="3" />
          </svg>
        </div>

        <div className={`select section-rooms ${optionSelected === 'rooms' ? 'selected' : ''}`} onClick={() => HandleSetOption('rooms')}>
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
            class="ai ai-PeopleGroup"
          >
            <path d="M16.719 19.752l-.64-5.124A3 3 0 0 0 13.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 9.266 22h5.468a2 2 0 0 0 1.985-2.248z" />
            <circle cx="12" cy="5" r="3" />
            <circle cx="4" cy="9" r="2" />
            <circle cx="20" cy="9" r="2" />
            <path d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20H7" />
            <path d="M20 14h.306a2 2 0 0 1 1.973 1.671l.333 2A2 2 0 0 1 20.639 20H17" />
          </svg>
        </div>

        <div className={`select section-blocked ${optionSelected === 'blocked' ? 'selected' : ''}`} onClick={() => HandleSetOption('blocked')}>
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

        <div className={`select section-padding ${optionSelected === 'padding' ? 'selected' : ''}`} onClick={() => HandleSetOption('padding')}>
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
            class="ai ai-Clock"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6" />
          </svg>
        </div>

      </div>

      <div className="discussions">
        
        { optionSelected === 'friends' ? (
          <Friends_discusion />
        ) : optionSelected === 'rooms' ? (
          <Rooms />
        ) : optionSelected === 'blocked' ? (
            <Blocked />
        ) : optionSelected === 'padding' ? (
          <Padding />
        ) : null }
        
      </div>

    </div>
  );
};

export default My_profile;
