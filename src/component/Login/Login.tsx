import React from 'react'
import './Login.css'
import CanvasAnimation from '../Canvas/canvas'

export const Login = () => {
  return (
    <div className='cont'>

        <div className='title'>
          <p></p>
        </div>
        {/* <a  className="button-link"></a> */}
        <a href="http://10.14.55.85:3000/api/auth/42">
          <p>Login</p>
        </a>
        <p className='game-title'>Heroes PingPong</p>
    </div>
  )
}
