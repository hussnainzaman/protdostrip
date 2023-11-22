import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import Modal from './Modal';


const Output = () => {
  const { user } = UserAuth();
  const [responseData, setResponseData] = useState('');

  var data;
  const fetchData = async () => {


    const dbref = doc(collection(db, 'tempVar'), "tempval");
    const docS = await getDoc(dbref);
    var data = docS.data();
    console.log(data.tempdata);


    const collectionRef = doc(collection(db, 'userFormData', user.email, 'PmtRES_GEN'), data.tempdata);
    const docSnap = await getDoc(collectionRef);

    try {
      if (docSnap.exists()) {
        data = docSnap.data();
        setResponseData(data.response);
        console.log("Document data:", data.response);
      } else {
        console.log("No such document!");
      }

    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  fetchData();

  return (
    <div className='home w-[1400px] mx-auto my-auto '>
      <div className="Rectangle w-auto h-20 bg-teal-400 bg-gradient-to-r from-cyan-600 to-teal-500 ">
        <div className="signoutbtn w-28 h-12 left-[1240px] top-[20px] absolute">
          <div className="Rectangle w-28 h-12 left-0 top-0 absolute rounded-lg shadow bg-zinc-700" />
          <button className="signup left-[20px] top-[13px] absolute text-amber-100  text-base font-bold font-['Nunito']">
            <Link to="/main">Home Page</Link>
          </button>
        </div>
        <button className="homebutton w-28 h-8 left-[40px] top-[26px] absolute">
          <Link to='/main'>
            <img className="image w-220 h-200 " src={require("./images/homologo.png")} alt='logo' />
          </Link>
        </button>
      </div>
      <div class name=" response square left-[900px] w-[400px] h-[400px] top-[90px] absolute">
          <p>{responseData}</p>
      </div>
      <div className="Header mx-auto my-auto absolute">
        <div className="MaskGroup w-50 h-auto left-0 top-0">
          <img className="image w-200 h-200 " src={require("./images/img006.png")} alt='pic by freepik' />
          
        </div>
        
        <div className="Rectangle left-[900px] w-[400px] h-[400px] top-[90px] absolute">
          <h1 className='font-bold py-0 text-zinc-700 text-2xl'>You've come to the right place for a great recommendation! We've analyzed your answers and found the perfect match for you. Trust us, you'll love it! But don't take our word for it, see for yourself. And if you want to try again, no problem! You can always fill out the questionnaire again and get a new recommendation. We're here to make you happy!<br /></h1>
          
          <button className='modalButton  bg-teal-600 hover:bg-zinc-600 w-[400px] p-4 my-2 text-amber-100  text-base font-bold rounded-lg shadow'>
            Start Over 🔄
          </button>
        </div>
        <div className="modal  top-[50px] left-[300px] flex justify-center absolute z-index ">
        </div>

        <div class="Rectangle h-20 left-0 top-0  bg-red-400 text-center p-6 text-white">
          This application is built for project purposes and not to be run commercially.<br />
          Brought you by: Hussnain, Krintan, Muskan, and Abhishek
        </div>
      </div>
    </div>


  )
};
export default Output;