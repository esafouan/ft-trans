import { useContext } from "react";
import { Socket } from "socket.io-client";
import { UserContext } from "./StartGame";
import './StartGame.css'
interface Props{
    list : string[];
    user : any;
}



export function GamesList({list, user} : Props){
    const socket = useContext(UserContext)
    console.log("Game Socket : ", socket.id);

    return(
        <ul className="games-list">
            {list.map(gameName =>
            <li key={gameName}
            onClick={()=>{socket.emit("JOINROOM", [gameName, user.login]);
            socket.emit('setstart', gameName);
            }}
            ><a>{gameName}</a> <img src={user.avatar}></img></li>)}
        </ul>
    );
}

