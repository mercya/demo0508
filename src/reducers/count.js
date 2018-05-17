/**
 * Created by eCRF on 2018/5/11.
 */

import {LOGIN} from '../constants/ActionTypes'
const  movies=(state=[],action)=>{
    console.log('userReducer was called with state', state, 'and action', action.movies)
    switch (action.type){
        case LOGIN:
            // return {
            //     ...state,
            //     movies: action.movies
            // }
            return {
                ...state,
                ...action.movies.reduce((obj, movie) => {
                    obj[movie.id] = movie
                    return obj
                }, {})
            }

        default:
          return state
    }
}
export  default movies