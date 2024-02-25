
import React, { useState } from 'react';

import "./Newprofile.css"
import "./Carousel.css"
import image1 from "../../assets/bat.jpg"
import image2 from "../../assets/last.jpg"
import image3 from "../../assets/greenlatern.jpg"
import image4 from "../../assets/superman.jpg"
import image5 from "../../assets/theFlash.jpg"



const Newprofile = () => {
  return (
    <div className='profile'>
        <div className='menuBar'>
            <div className='navbar'>
        
                <ul className="nav">
                    
                    <li>
                        <a>
                            <i ></i>
                            <span>HOME</span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <i ></i>
                            <span>CHAT</span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <i ></i>
                            <span>GAME</span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <i ></i>
                            <span>DASHBOARD</span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <i ></i>
                            <span>AB
                                OUT</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        
        <div className='UserProfile'>

            <div className='ImgPart'>

                <div className='image-name'>
                    
                    <div className="ImgProfile">
                        <img/>
                    </div>

                    <div className="name">
                        <p>King of night</p>
                    </div>

                    <div className="edit-profile">
                        
                        <div className='edit'>
                           <p>
                             Edit profile
                            </p>
                        </div>
                    </div>

                </div>

                <div className='lvl-container'>

                    <div className='lvl'>
                    </div>

                    <div className='achievement'>
                    </div>

                </div>

            </div>

            <div className='History'>
   

            </div>
        </div>

    
    </div>
  )}

export default Newprofile