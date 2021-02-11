import firebase from "firebase/app";
require('firebase/database');

  const firebaseConfig = {
    apiKey: "AIzaSyC3yhmN00KSXasfY-VWvdBwuoS5WSz3JGI",
    authDomain: "react-crud-fb58c.firebaseapp.com",
    databaseURL: "https://react-crud-fb58c-default-rtdb.firebaseio.com",
    projectId: "react-crud-fb58c",
    storageBucket: "react-crud-fb58c.appspot.com",
    messagingSenderId: "1002540042982",
    appId: "1:1002540042982:web:ae8b90a2a4ffadba918927",
    measurementId: "G-VGNSJKD59R" 
  };

  firebase.initializeApp(firebaseConfig);
  
const database = firebase.database().ref("/crud");

export { firebase, database };
