import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from "redux";
import rootReducer from "./reducers/main"
import createSagaMiddleware from "redux-saga"
//init state  when store is first initialized
const initState ={
    users:[]
}
const mid=createSagaMiddleware()
const mystore= createStore(rootReducer,initState,window.devToolsExtension && window.devToolsExtension(),applyMiddleware(mid));

mid.run()

ReactDOM.render( <Provider store={mystore}><App /></Provider>, document.getElementById('root'));

