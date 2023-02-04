import React, {useEffect, useState} from 'react';
import {MovieTypes} from '../getTypes';
import MovieLists from "../components/Main/MovieLists";
import {fetchMovies} from "../components/Main/fetching";
import cl from '../components/Main/movie.module.css'


const Homepage = () => {
    const [movie , setMovie] = useState<MovieTypes[]>([])


    const fetchMoves = () =>{
        fetchMovies().then(res =>setMovie(res))
    }

    useEffect(()=>{
        fetchMoves()
    },[])

    return (
        <div className={cl.Main}>
            <MovieLists items={movie}/>
        </div>
    );
};

export default Homepage;
