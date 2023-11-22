import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('Please type all information requried');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
      <div className='signin w-[1400px] mx-auto my-auto '>
        <div className="Rectangle w-auto h-20 bg-teal-400 bg-gradient-to-r from-teal-500 to-cyan-500  ">
          <div className="signupbtn w-28 h-12 left-[1240px] top-[20px] absolute">
            <div className="Rectangle w-28 h-12 left-0 top-0 absolute rounded-lg shadow bg-red-400" />
            <button className="signup left-[30px] top-[13px] absolute text-amber-100  text-base font-bold font-['Nunito']">
              <Link to='/signin'>
                Log In
              </Link>
            </button>
          </div>
          <button className="homebutton w-28 h-8 left-[40px] top-[26px] absolute">
            <Link to='/'>
              <img className="image w-220 h-200 " src={require("./images/homologo.png")} alt='logo' />
            </Link>
          </button>
          <button className="navbtn2 left-[1130px] top-[30px] absolute text-amber-100  text-xl font-semibold font-['Nunito']">About Us</button>
        </div>
        <div className="Header mx-auto my-auto absolute">
          <div className="MaskGroup w-50 h-auto left-0 top-0">

            <img className="image w-200 h-200 " src={require("./images/img003.png")} alt='pic by freepik' />
          </div>
          <div className="Rectangle left-[900px] w-[400px] h-[400px] top-[90px] absolute">
            <h1 className='font-bold py-2 text-zinc-700 text-5xl'>Sign up for you free account.</h1>

            <form onSubmit={handleSubmit}>
              <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded-lg shadow' type='email' />
              </div>
              <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3 rounded-lg shadow' type='password' />
              </div>
              <button className=' bg-zinc-700 hover:bg-teal-500 w-full p-4 my-2  text-amber-100  text-base font-bold rounded-lg shadow'>
                Sign Up
              </button>

            </form>
          </div>
          <div class="Rectangle h-20 left-0 top-0  bg-red-400 text-center p-6 text-white">
            This application is built for project purposes and not to be run commercially.<br />
            Brought you by: Hussnain, Krintan, Muskan, and Abhishek
          </div>
        </div>

      </div>
  );
};

export default Signup;
