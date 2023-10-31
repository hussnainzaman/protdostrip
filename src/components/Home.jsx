import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
  const { user} = UserAuth();

  return (

    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>HomePage</h1>
      <p>User Email: {user && user.email}</p>

    </div>
  );
};

export default Home;
