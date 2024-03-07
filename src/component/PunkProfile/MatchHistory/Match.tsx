import React  ,{ useEffect, useState }  from 'react'
import Swiper from 'swiper';

import '@fortawesome/fontawesome-free/css/all.min.css';
import  "./Match.css";
import image2 from '../../../assets/theFlash.jpg'

import im1 from '../../../assets/bat.jpg'
import im2 from '../../../assets/last.jpg'
import im3 from '../../../assets/test1.png'
import im4 from '../../../assets/test2.jpg'



const Match = ({match}) => {

    return (
        <div className='match'>
            <div className=" card">
                <div className="card-content"></div>
            </div>
        </div>
    )
}

const ListMatch = () => {

const matches = [
    {
        player1: { name: 'Player 1', image: image2 },
        player2: { name: 'Player 2', image: image2 },
        result: '1'
    },
    {
        player1: { name: 'Player 1', image: image2 },
        player2: { name: 'Player 2', image: image2 },
        result: '2'
    },
    {
        player1: { name: 'Player 1', image: image2 },
        player2: { name: 'Player 2', image: image2 },
        result: '3'
    },
    {
        player1: { name: 'Player 1', image: image2 },
        player2: { name: 'Player 2', image: image2 },
        result: '4'
    },
    {
        player1: { name: 'Player 1', image: image2 },
        player2: { name: 'Player 2', image: image2 },
        result: '5'
    },
    {
        player1: { name: 'Player 1', image: image2 },
        player2: { name: 'Player 2', image: image2 },
        result: '6'
    },
    // Add more match data as needed
];

const [beginIndex, setbeginIndex] = useState(0);
const [endIndex, setendIndex] = useState(Math.min(3, matches.length));

const handleNext = () => 
{
    if (endIndex < matches.length)
    {
        setendIndex(endIndex + 1);
        setbeginIndex(beginIndex + 1);
    }
}

const handlePrev = () => 
{
    if (beginIndex - 1 >= 0)
    {
        setendIndex(endIndex - 1);
        setbeginIndex(beginIndex - 1);
    }
}

return (


    <div className='matches-list-container'>
        
        <div className='title-history'>
            <p>List Matches</p>
        </div>

        <div className='matches-list'>
            {matches.slice(beginIndex, endIndex).map((match, index) => (
                <Match key={index} match={match} />
            ))}

            <div className="next swiper-button-next" onClick={handleNext}></div>
            <div className="prev swiper-button-prev" onClick={handlePrev}></div>

        </div>
    </div>
  );
};


export default ListMatch