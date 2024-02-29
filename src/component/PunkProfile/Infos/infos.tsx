import React, { useState, useEffect } from "react";
import axios from "axios";
import "./infos.css";

const ENV = import.meta.env;
const Infos = () => {
  //   console.log(ENV.VITE_SOME_KEY); // "123"
  //   console.log(ENV.DB_PASSWORD); // undefined

  const [profileData, setProfileData] = useState({ name: "", image: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        // Set Axios default configuration to include credentials

        const instance = axios.create({
          withCredentials: true,
          baseURL: "http://10.14.55.85:3000/api",
        });
        instance
          .get("/auth/user")
          .then((res) => {
            console.log(res);
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

  return (
    <div className="player-infos">
      <div className="ImgProfile">
        <img src={profileData.image} />
      </div>

      <div className="name">
        <p> {profileData.name} </p>
      </div>

      <div className="edit-profile">
        <div className="edit">
          <p> Edit profile </p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
