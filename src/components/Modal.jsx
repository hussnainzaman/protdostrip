import React from 'react';
import bg from './images/img005.png';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay flex  w-[800px] h-[500px] '>
            <div onClick={(e) => { e.stopPropagation(); }} className='modalContainer'>
                <img src={bg} alt='/' />
            </div>
            <div className='modalRight absolute center'>
                <button className='closeBtn w-8 h-8 my-6 mx-[740px] bg-red-400 text-center align-text-top p text-amber-100 font-bold rounded-lg shadow ' onClick={onClose}>
                    X
                </button>
                <div className='info text-center absolute'>
                 Questionaaire will be displayed here.
                </div>
            </div>
        </div>
    );
};

export default Modal;