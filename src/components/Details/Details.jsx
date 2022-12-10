import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'



function Details (){

    

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: currentMovie.id});
    }, []);


    const history = useHistory();
    const dispatch = useDispatch();
    const currentMovie = useSelector(store => store.currentMovie);
    const currentGenre = useSelector(store => store.genres);

    const backToHome = () => {
        // dispatch({type: 'DELETE_FRUIT', payload: props.basketItem.id})
        console.log('clicked backToHome!');
        history.push('/');   
    }








    return (
        <div className='details'>
            {/* <p>Details</p> */}
            <p>{currentMovie.title}</p>
            {/* <p>{currentMovie.id}</p> */}
    
            <img src={currentMovie.poster}/>
            <p>{currentMovie.description}</p>
            {/* <p>{JSON.stringify(currentGenre)}</p> */}
            <button onClick={backToHome}>Back to Movies</button>
            {/* <p>{JSON.stringify(currentMovie)}</p> */}
            <p>Genres:</p>
            <ul className="currentGenre">
                {currentGenre.map(genre => {
                    return (
                        <li key={genre.name}>
                            {genre.name} 
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Details;