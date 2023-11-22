import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from './Modal'


const Home = () => {

  const [openModal, setOpenModal] = useState(false);
  const { user, logout } = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='home w-[1400px] mx-auto my-auto '>
      <div className="Rectangle w-auto h-20 bg-teal-400 bg-gradient-to-r from-teal-500 to-cyan-500 ">
        <div className="signoutbtn w-28 h-12 left-[1240px] top-[20px] absolute">
          <div className="Rectangle w-28 h-12 left-0 top-0 absolute rounded-lg shadow bg-zinc-700" />
          <button onClick={handleLogout} className="signup left-[30px] top-[13px] absolute text-amber-100  text-base font-bold font-['Nunito']">
            Log Out
          </button>
        </div>
        <div className="signupbtn w-28 h-12 left-[1106px] top-[20px] absolute">
          <div className="Rectangle w-28 h-12 left-0 top-0 absolute rounded-lg shadow  bg-red-400" />
          <button className="signup left-[30px] top-[0px] absolute  text-amber-100  text-base font-bold font-['Nunito']">
            <Link to='/account'>
              Account<br />Info
            </Link>
          </button>
        </div>
        <button className="homebutton w-28 h-8 left-[40px] top-[26px] absolute">
          <Link to='/main'>
            <img className="image w-220 h-200 " src={require("./images/homologo.png")} alt='logo' />
          </Link>
        </button>
        {/* <button className="navbtn2 left-[1030px] top-[30px] absolute text-amber-100  text-xl font-semibold font-['Nunito']">Help?</button> */}
      </div>
      <div className="Header mx-auto my-auto absolute">
        <div className="MaskGroup w-50 h-auto left-0 top-0">
          <img className="image w-200 h-200 " src={require("./images/img004.png")} alt='pic by freepik' />
        </div>
        <div className="Rectangle left-[900px] w-[400px] h-[400px] top-[90px] absolute">
          <h1 className='font-bold py-0 text-zinc-700 text-3xl'>Welcome!<br />{user && user.email} </h1>
          <h2 className='font-bold py-1 text-red-400 text-lg'>"Embark on a journey of discovery!"🌍</h2>
          <Popup trigger={<button className=' bg-teal-300 hover:bg-teal-600 w-full p-4 my-2 text-zinc-700  text-base font-bold rounded-lg shadow'>
            How it Works?🤔
          </button>} position="left">
            it works haha.
          </Popup>
          <Popup trigger={<button className=' bg-teal-300 hover:bg-teal-600 w-full p-4 my-2 text-zinc-700  text-base font-bold rounded-lg shadow'>
            What we Collect?💾
          </button>} position="left">
            it works haha.
          </Popup>
          <Popup trigger={<button className=' bg-teal-300 hover:bg-teal-600 w-full p-4 my-2 text-zinc-700 text-base font-bold rounded-lg shadow'>
            Our Travel Partners✈🛌🚄.
          </button>} position="left">
            Coming Soon! Our Team is working with partners to bring you a unique experience.
          </Popup>
          <button onClick={() => setOpenModal(true)} className='modalButton  bg-red-400 hover:bg-teal-600 w-[400px] p-4 my-2 text-amber-100  text-base font-bold rounded-lg shadow'>
            Start Questionnaire...!
          </button>
        </div>
        <div className="modal  top-[50px] left-[300px] flex justify-center absolute z-index ">
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>

        <div class="Rectangle h-20 left-0 top-0  bg-red-400 text-center p-6 text-white">
          This application is built for project purposes and not to be run commercially.<br />
          Brought you by: Hussnain, Krintan, Muskan, and Abhishek
        </div>
      </div>
    </div>
  );
};
export default Home;



