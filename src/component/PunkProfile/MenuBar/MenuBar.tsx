import React from 'react'
import "./MenuBar.css"

const MenuBar = () => {
    return (
      <div className='menuB'>
  
              <div className='Home-butCont'>
                  <button className="cybr-btn">
                      <span aria-hidden><p>Home</p></span>
                      <span aria-hidden className="cybr-btn__glitch"><p>Home</p></span>
                  </button>
              </div>
  
              <div className='chat-butCont'>
                  <button className="cybr-btn">
                      <span aria-hidden><p>Chat</p></span>
                      <span aria-hidden className="cybr-btn__glitch"><p>Chat</p></span>
                  </button>
              </div>
  
              <div className='game-butCont'>
                  <button className="cybr-btn">
                      <span aria-hidden><p>Game</p></span>
                      <span aria-hidden className="cybr-btn__glitch"><p>Game</p></span>
                  </button>
              </div>
  
              <div className='about-butCont'>
                  <button className="cybr-btn">
                      <span aria-hidden><p>About</p></span>
                      <span aria-hidden className="cybr-btn__glitch"><p>About</p></span>
                  </button>
              </div>
  
      </div>
    )
}

export default MenuBar