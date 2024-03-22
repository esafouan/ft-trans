import React, { useState } from 'react'
import './Login.css'
import CanvasAnimation from '../Canvas/canvas'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export const TwoFa = () => 
{
  const navigate = useNavigate();
  const [code, setcode] = useState('');

  const saveData = async () => {
    const data = await axios.post('http://localhost:3000/api/2fa/authenticate', {twofa:code},{withCredentials: true})
    if(data.status == 200)
    {
        console.log("1")
        navigate("/Home");
        console.log("2")

    }
  }
  return (
    <div className='wfa-container'>
      <div className='wfa'>
        <h1 className='h11'> Enter your 2fa code please </h1>
        <input className='input' onChange={(e) => setcode(e.target.value)}></input>
        <Button onClick={saveData}>save</Button>
      </div>
    </div>
  )
}

export const Login = () => {
  return (
    <div className='cont'>

        <div className='title'>
          <p></p>
        </div>
        {/* <a  className="button-link"></a> */}
        <a href="http://localhost:3000/api/auth/42">
          <p>Login</p>
        </a>
        <p className='game-title'>Heroes PingPong</p>
    </div>
  )
}
