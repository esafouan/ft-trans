import React from 'react';
import "./Punk.css";
import MenuBar from "./MenuBar/MenuBar";
import ListMatch from "./MatchHistory/Match"
import Friends from "./friends/friend"
import Infos from "./Infos/infos"
import  {useState, useEffect} from 'react'

import im1 from '../../assets/bat.jpg'
import im2 from '../../assets/last.jpg'
import im3 from '../../assets/test1.png'
import im4 from '../../assets/test2.jpg'


const images = [im1, im2, im3, im4];

const Progressbar = () => {

  return (
	<div  className= 'lvl'>

		<div className="progressbar">
        
           
            <div class="progress-bar">  
                <div class="on-progress">
                    <span className="current-lvl">level 8 - 66%</span>
                </div> 
            </div>

		</div>
        
        <div className='achievement'> 
        </div>

	</div>
  )
}

const Punk = () => {

  return (
    <div className='profile'>

        <div className='page'>
          

            <Infos/>
            
            <Progressbar />

            <Friends />

            <ListMatch />


        </div>

        <MenuBar/>
    </div>
  )
}

export default Punk