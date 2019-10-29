import firebase from "firebase/app"
const config = {
    apiKey: "AIzaSyCdzYbZbn7Qb_-__62gb5ntmR3ivd7P3hE",
    authDomain: "reactxlassix.firebaseapp.com",
    databaseURL: "https://reactxlassix.firebaseio.com",
    projectId: "reactxlassix",
    storageBucket: "reactxlassix.appspot.com",
    messagingSenderId: "90088175354",
    appId: "1:90088175354:web:c0f2c89c730f7abcc8fb43",
    measurementId: "G-8HRQEEKVV9"
  };
firebase.initializeApp(config); 
const database=firebase.database();
export default database;
  