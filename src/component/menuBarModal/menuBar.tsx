import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './menuBar.css'
import Modal from './Modal';
const MenuBar = () => {
  
    const [OpenModal, setOpenModal] = useState(false);

   return (
    <>
        <div className='menu-bar'>
            <div className="logo">Your Logo</div>
            <button className="menu-button" onClick={()=>{setOpenModal(true)}}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
        <>
            {OpenModal && <Modal closeModal={setOpenModal} />}
        </>
    </>
  )
}

export default MenuBar