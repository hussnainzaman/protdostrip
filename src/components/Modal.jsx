import React from 'react';
import bg from './images/img005.png';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay flex  w-[800px] h-[500px] '>
            <div onClick={(e) => { e.stopPropagation();}} className='modalContainer'>
                <img src={bg} alt='/' />
                <div className='modalRight'>
                    <p className='closeBtn' onClick={onClose}>
                        X
                    </p>
                    <div className='content'>
                        <p>Do you want a</p>
                        <h1>$20 CREDIT</h1>
                        <p>for your first tade?</p>
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary'>
                            <span className='bold'>YES</span>, I love NFT's
                        </button>
                        <button className='btnOutline'>
                            <span className='bold'>NO</span>, thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;