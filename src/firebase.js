import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUxb7qfAumyMfAQzRZxm03wWg49alrlVc",
    authDomain: "todo-app-jm-d6383.firebaseapp.com",
    databaseURL: "https://todo-app-jm-d6383.firebaseio.com",
    projectId: "todo-app-jm-d6383",
    storageBucket: "todo-app-jm-d6383.appspot.com",
    messagingSenderId: "111354659201",
    appId: "1:111354659201:web:70ec867b1e8cfa119c6880",
    measurementId: "G-5R99E6G1S0"
});
  const db = firebaseApp.firestore();

  export { db };
