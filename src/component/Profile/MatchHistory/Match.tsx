import React from 'react'
import  "./Match.css";
import image2 from '../../../assets/theFlash.jpg'





const Match = ({match}) =>{

    return (
        <div className='match'>

            <div className='player1'>
                <img src={match.player1.image} alt={match.player1.name} />
                <div className='namep1'> {match.player1.name} </div>
            </div>

            <div className='result'> 
                <div className='res'>
                    {match.result} 
                </div>
            </div>

            <div className='player2'>
                <img src={match.player2.image} alt={match.player2.name} />
                <div className='namep1'>{match.player2.name}</div>
            </div>
        </div>
    )

}

const ListMatch = () => {
    const matches = [
        {
            player1: { name: 'Player 1', image: image2 },
            player2: { name: 'Player 2', image: image2 },
            result: '3 : 1'
        },
        {
            player1: { name: 'Player 1', image: image2 },
            player2: { name: 'Player 2', image: image2 },
            result: '3 : 1'
        },
        {
            player1: { name: 'Player 1', image: image2 },
            player2: { name: 'Player 2', image: image2 },
            result: '3 : 1'
        },
        {
            player1: { name: 'Player 1', image: image2 },
            player2: { name: 'Player 2', image: image2 },
            result: '3 : 1'
        },
        // Add more match data as needed
    ];

    return (

        <div className='matches-list'>
        
            {matches.map((match, index) => (
                <Match key={index} match={match} /> ))}
        </div>
    )
}

export default ListMatch