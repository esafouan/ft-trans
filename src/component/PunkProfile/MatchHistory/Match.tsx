import React  ,{ useEffect }  from 'react'
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


  return (
    <div className='matches-list'>

        <div className="card">
          <div className="card-content"></div>
        </div>

        <div className=" card">
          <div className="card-content"></div>
        </div>

        <div className=" card">
          <div className="card-content"></div>
        </div>

        <div className="next swiper-button-next"></div>
        <div className="prev swiper-button-prev"></div>

    </div>
  );
};

// export default YourComponent;




// const ListMatch = () => {
    
//     const matches = [
//         {
//             player1: { name: 'Player 1', image: image2 },
//             player2: { name: 'Player 2', image: image2 },
//             result: '3 : 1'
//         },
//         {
//             player1: { name: 'Player 1', image: image2 },
//             player2: { name: 'Player 2', image: image2 },
//             result: '3 : 1'
//         },
//         {
//             player1: { name: 'Player 1', image: image2 },
//             player2: { name: 'Player 2', image: image2 },
//             result: '3 : 1'
//         },
//         {
//             player1: { name: 'Player 1', image: image2 },
//             player2: { name: 'Player 2', image: image2 },
//             result: '3 : 1'
//         },
//         // Add more match data as needed
//     ];
      
//     return (

//         <div className='matches-list'>
//             <div className='carousel'>
//             <i id="left" className="fa-solid fa-angle-left"></i>
//                 <img src={im1} alt="im1" draggable="false"/>
//                 <img src={im2} alt="im2" draggable="false"/>
//                 <img src={im3} alt="im3" draggable="false"/>
//                 <img src={im4} alt="im4" draggable="false"/>
//                 <img src={im1} alt="im1" draggable="false"/>
//                 <i id="right" className="fa-solid fa-angle-right"></i>
//             </div>
//             {/* {matches.map((match, index) => (
//                 <Match key={index} match={match} /> ))} */}
//         </div>
//     )
// }

export default ListMatch