import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, TwoFa } from './component/Login/Login';
import './App.css';
import Punk from './component/PunkProfile/Punk';
import Chat from './component/MyChat/Chat';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');




  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:3000/api/auth/user', { withCredentials: true });
        setUser(resp.data);
      } catch (error) {
        setError(error.response.data.message || 'An error occurred');
      }
    };
    fetchData();
  }, []);

  console.log("rrrr = " , error);
  return (
    <div>
      <Router >
        <Routes>
          {
            error.length > 0 ?
            (
              error === '2FA' 
              ? ( <>
               <Route path="*" element={<Navigate to="/2fa" />} />  
                <Route path="/2fa" element={<TwoFa user={user} setError={setError}/>} />
              </>)
              : ( <>
                <Route path="*" element={<Navigate to="/" />} /> 
               <Route path="/" element={<Login user={user}/>} />
              </>)
            )
            :
            (
              <>
                <Route path="/2fa" element={<TwoFa user={user} setError={setError}/>} />
                <Route path="/" element={<Login user={user} />} />
                <Route path="/Home" element={<Punk />} />
                <Route path="/Chat" element={<Chat />} />
              </>
            )

          }
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
