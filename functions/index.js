const functions = require('firebase-functions');
const uuid = require("uuid/v5");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const cors =require("cors")({option:true});
admin.initializeApp(
    {credential: admin.credential.applicationDefault(),
    databaseURL: "https://reactxlassix.firebaseio.com",
    apiKey: "AIzaSyCdzYbZbn7Qb_-__62gb5ntmR3ivd7P3hE",
    authDomain: "reactxlassix.firebaseapp.com",
    databaseURL: "https://reactxlassix.firebaseio.com",
    projectId: "reactxlassix",
    storageBucket: "reactxlassix.appspot.com",
    messagingSenderId: "90088175354",
    appId: "1:90088175354:web:c0f2c89c730f7abcc8fb43",
    measurementId: "G-8HRQEEKVV9"});


    // this function cleans up the distorted json recieved
function JSONize(str) {
    return str
      // wrap keys without quote with valid double quote
      .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":'})    
      // replacing single quote wrapped ones to double quote 
      .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"'})         
  }
  
  exports.addUser = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    res.set('Access-Control-Allow-Origin', '*');
    //jsonize for distorted data
    const original = JSON.parse(JSONize(req.query.user));
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snap= await admin.database().ref('/user_db').push({...original})
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
  
  exports.getData= functions.https.onRequest( async (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        return admin.database().ref("/user_db").on("value",snapshot=>{
            console.log(snapshot.val());
            return res.status(200).send(snapshot.val());
        },errors=>{
            console.log(errors);
            return res.status(500).send(errors);
        });
    });
  
  