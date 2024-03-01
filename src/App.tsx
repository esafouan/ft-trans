import React, { Profiler } from 'react';

import {BrowserRouter as Router , Routes, Route } from "react-router-dom";

import {Login} from "./component/Login/Login"
import './App.css';
import Avatar from './component/Avatar/Avatar';
import MenuBar from './component/menubar/menubar';
import CanvasAnimation from './component/Canvas/canvas'
import Punk from './component/PunkProfile/Punk';
import Chat from './component/MyChat/Chat';



function App() 
{
  return (
      <div>
        <Router>
          {/* <CanvasAnimation /> */}
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Home" element={<Punk />}/>
            <Route path="/Chat" element={<Chat />}/>
          </Routes>
        </Router> 
      </div>
    
  );
}

export default App;