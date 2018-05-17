/**
 * Created by eCRF on 2018/5/10.
 */
import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'
import count from './count'



export default  combineReducers({
    count
})