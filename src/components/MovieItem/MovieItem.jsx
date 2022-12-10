import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({movie}) {

    const history = useHistory();

    const dispatch = useDispatch();

    const item = () => {

        console.log('clicked item!', movie);
    
        dispatch({type: 'CURRENT_MOVIE', payload: movie})

        history.push('/details');   
    }

    return (
        <li>
            <img src={movie.poster} alt={movie.title} onClick={item}/>
            <p>{movie.title}</p>
        </li>
    )
}

export default MovieItem;