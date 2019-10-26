import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import rootReducer from "./reducers/main"
//init state  when store is first initialized
const initState ={
    users:[]
}

const mystore= createStore(rootReducer,initState,window.devToolsExtension && window.devToolsExtension());

ReactDOM.render( <Provider store={mystore}><App /></Provider>, document.getElementById('root'));

