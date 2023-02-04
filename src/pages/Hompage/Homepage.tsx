import React, {useEffect, useState} from 'react';
import {MovieTypes} from '../../utils/getTypes';
import MovieLists from "./components/MovieLists";
import {fetchMovies} from "../../utils/fetching";
import cl from './components/movie.module.css'

const Homepage = () => {
    const [movie, setMovie] = useState<MovieTypes[]>([])

    const fetchMoves = () => {
        fetchMovies().then(res => setMovie(res))
    }

    useEffect(() => {
        fetchMoves()
    }, [])

    return (
        <div className={cl.Main}>
            <MovieLists items={movie}/>
        </div>
    );
};

export default Homepage;
