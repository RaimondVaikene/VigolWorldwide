import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB48lT6c6-5HUKsHGJ2R-v1BwdaTY9yg0M",
    authDomain: "vigol-a20be.firebaseapp.com",
    projectId: "vigol-a20be",
    storageBucket: "vigol-a20be.appspot.com",
    messagingSenderId: "1020083036868",
    appId: "1:1020083036868:web:87977749f98844cf0e1f91",
    measurementId: "G-RZ9M27JDSG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };