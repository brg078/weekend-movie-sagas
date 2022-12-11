import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h2>Featured Films</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <MovieItem key={movie.id} movie={movie}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;