
import React, { useState } from 'react';

import "./Newprofile.css"
import "./Carousel.css"
import image1 from "../../assets/bat.jpg"
import image2 from "../../assets/last.jpg"
import image3 from "../../assets/greenlatern.jpg"
import image4 from "../../assets/superman.jpg"
import image5 from "../../assets/theFlash.jpg"





function Carousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Initial active index

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Modulo operation to loop back to the beginning
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5); // Modulo operation to loop back to the end
  };

  const slide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <ul className="list">
        {[...Array(5).keys()].map((index) => (
          <li
            key={index}
            className={`item ${activeIndex === index ? 'act' : ''} ${activeIndex === index - 1 ? 'prev' : ''} ${
              activeIndex === index + 1 ? 'next' : ''
            }`}
            onClick={() => slide(index)}
          ></li>
        ))}
      </ul>

      <div className="swipe" onClick={next}></div>
      <div className="prev" onClick={prev}></div>
      <div className="next" onClick={next}></div>
      <div className="new-next" onClick={next}></div>
    </div>
  );
}




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
   
               <Carousel />
            </div>
        </div>

    </div>
  )
}

export default Newprofile