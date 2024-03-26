import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import "../addfriend/addfriend.css"

function SetOwnerModal({ show, friendName, setFriendName, onSubmit, onCancel }) {
    if (!show) {
      return null;
    }

    const backdrop = {
        visible : {opacity: 1},
        hidden: {opacity: 0}
    }

    const modal = {
        hidden :{
            y :"-100vh",
            opacity: 0 },
        visible: {
            y : "200px",
            opacity: 1,
            transition : {delay: 0.5}
        }
    }
    
    return (
        <AnimatePresence>

        <motion.div className="modal-backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="modal-content-add"
            variants={modal}>
                <input
                    className="input-add-modal"
                    type="text"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    placeholder="Enter Owner name"
                />
                <div className="butt-add-modal">
                    <div className="But-modal submit-But-modal"onClick={onSubmit}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="ai ai-Check"
                        >
                            <path d="M4 12l6 6L20 6" />
                        </svg>
                    </div>
                    <div className="But-modal Cancel-But-modal"
                    onClick={onCancel}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="ai ai-Cross"
                        >
                            <path d="M20 20L4 4m16 0L4 20" />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </AnimatePresence>

    );
  }
  export default SetOwnerModal