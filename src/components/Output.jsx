import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import Modal from './Modal'
import Popup from 'reactjs-popup';



const Output = (e) => {
  const { user } = UserAuth();
  const [openModal, setOpenModal] = useState(false);
  const [responseData, setResponseData] = useState('');
  //const [StatusData, setStatusData] = useState('');

  var data = "";


  const fetchData = async () => {

    const dbref = doc(collection(db, 'tempVar'), "tempval");
    const docS = await getDoc(dbref);
    data = docS.data();
    const refdata = data.tempdata;
    console.log(refdata);

    const collectionRef = doc(collection(db, 'userFormData', user.email, 'PmtRES_GEN'), refdata);
    const docSnap = await getDoc(collectionRef);

    try {

      if (docSnap.exists()) {
        data = docSnap.data();
        // setStatusData(data.status.state);
        setResponseData(data.response);
        console.log("Document data:", responseData);
        // console.log("Document data:", StatusData);


      }
      else {
        console.log("No such document!");
      }

    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }

  }


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
       
      </div>
      <div className="Header mx-auto my-auto absolute">
        <div className="MaskGroup w-50 h-auto left-0 top-0">
          <img className="image w-200 h-200 " src={require("./images/img006.png")} alt='pic by freepik' />

        </div>
        
        <div className="Rectangle left-[900px] w-[400px] h-[400px] top-[200px] absolute">
         
          {/* <h1 className='font-bold py-0 text-zinc-700 '>! </h1> */}
         <Popup trigger= {<button className='modalButton  bg-red-400 hover:bg-zinc-600 w-[400px] p-4 my-2 text-amber-100  text-base font-bold rounded-lg shadow' onClick={fetchData}>
            Get Results
          </button>} position="left" contentStyle={{ width: '800px', height: 'auto', padding: '20px' }} >
          {responseData}
          </Popup> 
          <button onClick={() => setOpenModal(true)} className='modalButton  bg-teal-600 hover:bg-zinc-600 w-[400px] p-4 my-2 text-amber-100  text-base font-bold rounded-lg shadow'>
            Start Over 🔄
          </button>
        </div>
        <div className="modal  top-[50px] left-[300px] flex justify-center absolute z-index ">
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
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