import database from "../config/db_config"
import addUser from "../actions/Adduser"
import {  takeLatest, all , take, fork, put} from 'redux-saga/effects';
import { eventChannel } from "redux-saga";
import {message} from 'antd'


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
    // concurently get data from the event listener anytime it is fired
    while(true){

        const item =yield take(listener);
        // dispatch the addUser action for the batch of new users
        yield put(addUser(item))
    }
}
function*  addToFirebase(action){
    // get the payload, i.e the details of the user
    const user=action.user;
    // send an http request to post this user
    const json = yield fetch('https://us-central1-reactxlassix.cloudfunctions.net/addUser',{
                            method:'POST',user:user,//the body of the request is to be sent to the endpoint
                            header:{"Content-Type":"application/json"}
                        }).then(res=>res.json())
                            .then(res=>{message.success('saving in progress.....', 1.0)}) //If the request was sucessful, use a message component to alert us that it was sucessful
                            .catch(err=>{message.error("there was an error saving, please try again!",1.0);}) //if there was any error, use the message componenent to alert us

    // print the user to the console
    console.log(user);
}

// map the addUserToFirebase function to the action ADD_USER_ASYNC
function* saga_grab(){
    message.success("reaching out to db ...",0.25)
    yield takeLatest('ADD_USER',addToFirebase)
}

// export all of our sagas, which in this case is just addUserSaga
export default function* rootSaga(){
    yield all([
        fork(update),
        saga_grab(),
    ])
}