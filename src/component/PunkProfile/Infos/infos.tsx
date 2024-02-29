import React, { useState, useEffect} from 'react'
import axios from 'axios';
import "./infos.css"

const Infos = () => {



    const [profileData, setProfileData] = useState({ name: "", image: ""});

    useEffect(() => {
        const getData  = async () => {
            try{
                //profile Data end point
                const data = await axios.get('');

                setProfileData(data.data);
            }
            catch (error) {

                console.error('Error fetching player data:', error);
            }
              
        }
        getData();
    }, []);

  return (
    <div className= 'player-infos' >         
        <div className="ImgProfile">
            <img src={profileData.image}/>
        </div>

        <div className="name">
            <p> {profileData.name} </p>
        </div>

        <div className="edit-profile">
            <div className='edit'>
                <p> Edit profile </p>
            </div>
        </div>

    </div>
  )
}

export default Infos