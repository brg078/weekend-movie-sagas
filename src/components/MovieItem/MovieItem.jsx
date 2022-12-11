import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea } from '@mui/material';
import './MovieItem.css'

function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();



    const item = () => {

        console.log('clicked item!', movie);
    
        dispatch({type: 'CURRENT_MOVIE', payload: movie})

        history.push('/details');   
    }

    return (
        <Card className='movieCard'
            onClick={item}
            style={{
            borderRadius: '5px',
            backgroundColor: "#f3e5f5",
            fontFamily: 'Roboto'
        }}>
            <CardActionArea>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.title}</p>
            </CardActionArea>
        </Card>
    )
}

export default MovieItem;