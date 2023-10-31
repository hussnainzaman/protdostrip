import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {forgotPassword} = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')      
      try {
        await forgotPassword(email)
        navigate('/')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    };
  
    return (
      <div className='max-w-[300px] mx-auto my-16 p-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
          </div>
          <button className='border border-green-500 bg-green-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
            Reset Password
          </button>
        </form>
      </div>
    );
  };
  
  export default ForgotPassword;