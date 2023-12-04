import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Redirect = () => {
  const { user} = UserAuth();
  const navigate = useNavigate();

  const handleredirect = async () => {
    try {
      navigate('/result');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  function fwd() {
    navigate('/result');
  }
setTimeout(fwd,20000);
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'> Hi! {user.email} </h1>
      <p>You've come to the right place for a great recommendation! We are analyzing your answers and will found the perfect match for you. Trust us, you'll love it! But don't take our word for it, you will see for yourself. And if you want to try again, no problem! You can always fill out the questionnaire again and get a new recommendation. We're here to make you happy. <br></br>We are working on you answers it may take upto 30 seconds to generate a suggestion. Please wait and if not redirected automatically click on button.</p>
      <button onClick={handleredirect} className='border px-6 py-2 my-4'>
        Results
      </button>
    </div>
  );
};

export default Redirect;
