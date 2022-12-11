import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'
import Button from '@mui/material/Button';
import { Card } from '@material-ui/core';
import {Table} from '@material-ui/core';


function Details (){

    
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: currentMovie.id});
    }, []);


    const history = useHistory();
    const dispatch = useDispatch();
    const currentMovie = useSelector(store => store.currentMovie);
    const currentGenre = useSelector(store => store.genres);


    const backToHome = () => {
        console.log('clicked backToHome!');
        history.push('/');   
    }


    return (
        <div className='details'>
            <Card style={{
                borderRadius: '20px',
                backgroundColor: "#f3e5f5",
                fontFamily: 'Roboto'
            }}>
                <h2>{currentMovie.title}</h2>
                <img src={currentMovie.poster}/>
                <h4>{currentMovie.description}</h4>
                {/* <h4>Genres:</h4>
                <ul className="currentGenre">
                    {currentGenre.map(genre => {
                        return (
                            <li key={genre.name}>
                                {genre.name} 
                            </li>
                        );
                    })}
                </ul> */}
                <Table className='genreTable'>
                <th>Genres:</th>
                <tr className="currentGenre">
                    {currentGenre.map(genre => {
                        return (
                            <li key={genre.name}>
                                {genre.name} 
                            </li>
                        );
                    })}
                </tr>
                </Table>
                <Button
                    style={{
                    borderRadius: '20px',
                    backgroundColor: "#0288d1",
                    margin: '2%',
                    padding: "30px"
                    }}
                    className='returnButton'
                    variant="contained"
                    onClick={backToHome}>
                    Back to Movies
                </Button>
            </Card>
        </div>
    )
}

export default Details;