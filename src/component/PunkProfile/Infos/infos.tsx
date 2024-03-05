import React, { useState, useEffect } from "react";
import axios from "axios";
import "./infos.css";

const ENV = import.meta.env;
const Infos = () => {
  //   console.log(ENV.VITE_SOME_KEY); // "123"
  //   console.log(ENV.DB_PASSWORD); // undefined

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Set Axios default configuration to include credentials

        const instance = axios.create({
          withCredentials: true,
          baseURL: "http://localhost:3000/api",
        });
        instance
          .get("/auth/user")
          .then((res) => {
            const dat = res.data;

            setProfileData(dat);
          })
          .catch((err) => {
            console.log(err.response);
          });
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };
    getData();
  }, []);
  
  (profileData && console.log(profileData));
  return (

   
    <div className="player-infos">
    {profileData ? (
      <>
        <div className="ImgProfile">
          <img src={profileData.avatar} alt="Profile" />
        </div>
        <div className="name">
          <p>{profileData.login}</p>
        </div>
        <div className="edit-profile">
          <div className="edit">
            <p>Edit profile</p>
          </div>
        </div>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
   

  );
};

export default Infos;
