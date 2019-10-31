import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from "redux";
import rootReducer from "./reducers/main"
import createSagaMiddleware from "redux-saga"
import allSagas from "./midware/listen"
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
//init state  when store is first initialized
const initState ={
    users:[]
}
const mid=createSagaMiddleware()
const mystore= createStore(rootReducer,initState,
    composeWithDevTools(applyMiddleware(mid),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

mid.run(allSagas)

ReactDOM.render( <Provider store={mystore}><App /></Provider>, document.getElementById('root'));

