import React from 'react'
import "./Punk.css"
import MenuBar from "./MenuBar/MenuBar"



// import React from 'react'



const Punk = () => {
  return (
    <div className='profile'>
        <div className='page'>
            <div className= 'player-infos' >
            {/* <div className='image-name'> */}
                    
                    <div className="ImgProfile">
                        <img/>
                    </div>

                    <div className="name">
                        <p>King of night</p>
                    </div>

                    <div className="edit-profile">
                        
                        <div className='edit'>
                           <p>
                             Edit profile
                            </p>
                        </div>
                    </div>

                {/* </div> */}
            </div>
            <div className= 'lvl' ></div>
            <div className= 'matches' ></div>
            <div className= 'friends' ></div>

        </div>


        <MenuBar/>
    </div>
  )
}

export default Punk