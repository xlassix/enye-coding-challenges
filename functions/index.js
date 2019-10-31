// import the reqiuired libraries
const functions = require('firebase-functions');
const express=require("express");
const cors= require("cors")({options:true,credentials:true});
const admin = require("firebase-admin");
const uuid = require("uuid/v5"); //uuid for generating random id's for clients

// initialize the database
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  apiKey: "AIzaSyCdzYbZbn7Qb_-__62gb5ntmR3ivd7P3hE",
  authDomain: "reactxlassix.firebaseapp.com",
  databaseURL: "https://reactxlassix.firebaseio.com",
  projectId: "reactxlassix",
  storageBucket: "reactxlassix.appspot.com",
  messagingSenderId: "90088175354",
  appId: "1:90088175354:web:c0f2c89c730f7abcc8fb43",
  measurementId: "G-8HRQEEKVV9"
});
const app = express()
app.use(cors); //use cors for resource sharing
app.use(express.urlencoded({extended:false})); //enable url-encoded types too
app.use(express.json()); //enable us recieve json types in the request's body
app.options('*', cors);

    // this function cleans up the distorted json recieved
    function JSONize(str) {
      return str.replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":'}).replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"'})         
    }
  app.post('/', async (req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    // Grab the text parameter.
    //jsonize for distorted data
    const original = JSON.parse(req.body);
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    await admin.database().ref('/user_db').push({...original})
    return res.status(200).send(original)
  });
    // add an evenlistener function to add an id to our user
exports.addId = functions.database.ref('/user_db/{dataId}/')
    .onCreate((snapshot, context) => {
        // get the unique pushId of this object in the db
        const dataId = context.params.dataId ;
        // use this Id with the uuid library to generate a unique ID
        const uniqueId= uuid(dataId,uuid.URL);
      return snapshot.ref.child('userId').set(uniqueId);
    });
  
    app.get('/',(req,res)=>{
      res.set('Access-Control-Allow-Origin', '*');
        return admin.database().ref("/user_db").on("value",snapshot=>{
            return res.status(200).send(snapshot.val());
        },errors=>{
            console.log(errors);
            return res.status(500).send(errors);
        });
    });
  
    exports.addUser = functions.https.onRequest(app);
  