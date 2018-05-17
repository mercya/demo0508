/**
 * Created by eCRF on 2018/5/10.
 */
import * as types from '../constants/ActionTypes';
const loginApp = movies =>({
        type:types.LOGIN,
        movies:movies
    }
)
export const getUserDetail=movies=>({
        type:types.DETAIl,
        movies:movies
    }
)
export  const  getMoviesDetail = () => dispatch=>{
    // $.ajax({
    //     type : 'get',
    //     url : '../api/movies.json',
    //     dataType:"json",
    //     success : function (text) {
    //        loginApp(text.json())
    //     },
    //     async : true
    // });
    fetch('../api/movies.json').
    then(response => response.json()).
    then(json => dispatch(loginApp(json)))
}
