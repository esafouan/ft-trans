import { useContext } from "react";
import { Socket } from "socket.io-client";
import { UserContext } from "./StartGame";

interface Props{
    list : string[];
}



export function GamesList({list} : Props){
    const socket = useContext(UserContext)
    console.log("Game Socket : ", socket.id);

    return(
        <ul>
            {list.map(gameName =>
            <li key={gameName}
            onClick={()=>{socket.emit("JOINROOM", gameName);
            socket.emit('setstart', gameName);
            }}
            >{gameName}</li>)}
        </ul>
    );
}

