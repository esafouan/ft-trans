import { color, func } from "three/examples/jsm/nodes/Nodes.js";
import Game from "./Game"
import { useState, createContext, useContext } from "react";
import io, { Socket } from 'socket.io-client';
import './index.css'
import { GamesList } from "./GamesList";

import FirstPage from "./FirstPage";
interface props{
  socket : Socket;
}

let flag = false;
const socket = io("ws://10.13.6.7:3000/game");

export const UserContext = createContext(socket);

function StartGame() {
  const socket = useContext(UserContext);
  const [gameslist, setGamesList] = useState<string[]>([]);
  const [start, setStart] = useState(false);
  const [practice, setPractice] = useState(false);

  const [waiting, setWaiting] = useState(false);



  socket.on('GamesList', (gamesList : string[]) => {
      setGamesList(gamesList);
  })

  socket.on('start', ()=>{
    if (!flag){
      console.log("Start Play");
      flag = true;
      setWaiting(false);
      setStart(true);
    }
  })

  // fetch('http://localhost:3000/')

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(text => {
  //   console.log(text);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });



  if (waiting){
    return(<div style={{backgroundImage: `url('https://www.couleurdenuit.com/img/cms/Match-de-ping-pong-23.jpg')`, backgroundSize : 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
     <head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"></link></head>
      <div style={{marginLeft : '50px', paddingBottom : '100px'}}>
      <span className="spinner-grow spinner-grow-sm" style={{ marginBottom : '100px' , marginRight : '150px' , fontSize : '250%', color: '#DB8C1B'}}>Waiting...</span>
      <div className="spinner-border" style={{color : '#DB8C1B', width: '3rem', height: '3rem'}} role="status"></div>
      <div className="spinner-grow" style={{color : '#DB8C1B' , width: '3rem', height: '3rem'}} role="status"></div>
      </div>
    </div>);
  }
  else if (start){
    return(
        <FirstPage roomName="salah" mode="online"/>
    )
  }
  else if (practice){
    return(
      <FirstPage roomName="salah" mode="practice"/>)
  }
  else {
    return (
      <div style={{ position: 'relative' }}>
        {!start && <button style={{ position: 'absolute', top: '10px', left: '10px', width : '11vw' , height: '11vh' }} onClick={() => setPractice(true)}> Practice Session </button>}
        <button style={{ position: 'absolute', top: '10px', right: '10px' , width : '11vw' , height: '11vh' }} onClick={() => { socket.emit('CREATEROOM', "salah"); setWaiting(true) }}> CREATEGame </button>
        {gameslist.length > 0 && <GamesList list={gameslist} />}
      </div>
      // <FirstPage roomName="salah" mode="practice"/>
    );
    
  }
  // return (
  //   <div className={start ? "game" : ""}>


  //   </div>
  // )

};


export default StartGame;