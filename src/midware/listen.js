import database from "../config/db_config"
import {  takeLatest, all , take, fork, put} from 'redux-saga/effects';
import { eventChannel } from "redux-saga";
import {message} from 'antd'
import full_users from "../actions/full_users"

function* update(){
    // create the event listener 
    const listener = eventChannel(
        emit => {
            database.ref("/user_db")
            .on("value",data => {
                return emit(data.val()||{})
            });
        return ()=>database.ref("/user_db").off(listener);
        }
    );
    while(true){

        const item =yield take(listener);
        // dispatch the data store data from listener as item and dispatch to function full_user 
        yield put(full_users(item))
    }
}
function*  addToFirebase(action){
    const user=action.user;
    yield fetch('https://us-central1-reactxlassix.cloudfunctions.net/addUser' ,{
                body:JSON.stringify(user),header:{
                "Content-Type":"application/json; charset=utf-8"
            },
        }).then(res=>res.json())
            .then(res=>{message.success('saving in progress.....', 0.25)}) 
            .catch(err=>{message.error("error_encountered",0.75);}) 
}

function* saga_grab(){
    message.success("reaching out to db ...",0.25)
    //intersent action type dispatched with "ADD_USER" and return addToFirebase function
    yield takeLatest('ADD_USER',addToFirebase)
}


export default function* allSagas(){
    yield all([
        fork(update),
        saga_grab(),
    ])
}
