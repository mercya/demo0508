/**
 * Created by eCRF on 2018/5/8.
 */
import React, { Component } from 'react';
import {
 BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from 'antd/lib/button';
import '../../node_modules/antd/dist/antd.css';
// import 'src/components/main.css';
import Detail from '../components/Details';


const Basic =()=>(
    <Router >
        <div >
            <Route exact path="/" component={Detail}/>
        </div>
    </Router>
)

export default connect()(Basic);