/**
 * Created by eCRF on 2018/5/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import { getMoviesDetail } from './actions';
import Detail from './components/Details'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Basic from './components/main'


import App from './components/main.js';
if (__DEV__){
    console.log("123456");
}
const middleware=[thunk]
const logger =createLogger();
if(process.env.NODE_ENV!=='production') {
    middleware.push(createLogger())
}

const store=createStore(reducer,
    applyMiddleware(...middleware)
)


store.dispatch(getMoviesDetail())
// store.dispatch(getMoviesDetail())


ReactDOM.render(
    <Provider store={store}>
        <Basic/>
    </Provider> ,
    document.getElementById('app')
);
