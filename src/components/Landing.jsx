import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

//import { UserAuth } from '../context/AuthContext';

const Landing = () => {



  return (
    <div className='landing w-[1400px] mx-auto my-auto bg-teal-400 bg-gradient-to-r from-cyan-500 to-teal-500 '>
      <div className="Navbar w-[1400px] mx-auto my-0 h-20 ">
        <div className="Rectangle w-200 h-18 bg-white shadow" />

        <div className="loginbtn w-28 h-12 left-[1240px] top-[20px] absolute">
          <div className="Rectangle w-28 h-12 left-0 top-0 absolute bg-red-400 rounded-lg shadow" />
          <button className="Login left-[34px] top-[113x] bottom-3 absolute text-amber-100 text-base font-bold font-['Nunito']">
            <Link to='/signin'>
              Log In
            </Link>
          </button>
        </div>
        <div className="signupbtn w-28 h-12 left-[1106px] top-[20px] absolute">
          <div className="Rectangle w-28 h-12 left-0 top-0 absolute rounded-lg shadow  bg-zinc-700" />
          <button className="signup left-[30px] top-[13px] absolute  text-amber-100  text-base font-bold font-['Nunito']">
            <Link to='/signup'>
              Sign Up
            </Link>
          </button>
        </div>
        <button className="homebutton w-28 h-8 left-[40px] top-[26px] absolute">
          <Link to='/'>
            <img className="image w-220 h-200 " src={require("./images/homologo.png")} alt='logo' />

          </Link>
        </button>
        <button className="navbtn2 left-[999px] top-[30px] absolute text-amber-100  text-xl font-semibold font-['Nunito']">About Us</button>
      </div>
      <div className="Header mx-auto my-auto top-[95px] absolute">
        <div className="MaskGroup w-50 h-auto left-0 top-0">

          <img className="image w-[1400px] h-[900px] " src={require("./images/img001.jpg")} alt='pic by freepik' />
        </div>

        <div class="Rectangle h-20 left-0 top-0 relative bg-red-400 text-center p-6 text-white">
          This application is built for project purposes and not to be run commercially.<br />
          Brought you by: Hussnain, Krintan, Muskan, and Abhishek
        </div>
      </div>

    </div>

  );
};

export default Landing;
