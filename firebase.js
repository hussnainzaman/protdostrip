import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyBOb1mGak7Ifp-QgL6fVOXknJ8kmccnbUo",
    authDomain: "dostrip-f1b21.firebaseapp.com",
    projectId: "dostrip-f1b21",
    storageBucket: "dostrip-f1b21.appspot.com",
    messagingSenderId: "175276502848",
    appId: "1:175276502848:web:264f416ae4644fd16414a5",
    measurementId: "G-835MSM95PE"
  };

  
 firebase.initalizeApp(firebaseConfig);

 var protdostripDB = firebase.database().ref('protdostrip');