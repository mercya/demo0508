/**
 * Created by eCRF on 2018/5/10.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as TodoAction from '../actions';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Detail=({count})=> (
    <div>
        {count.map(movie=>
            <div>
                {movie.title}{
                movie.releaseYear}
            </div>
        )
        }
    </div>
)



const mapStateToProps= state=>({
    count:state.movies
})
Detail.PropTypes={
    movies:PropTypes.objectOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        releaseYear:PropTypes.string.isRequired
    })).isRequired
}

export default connect(
    mapStateToProps
)(Detail)