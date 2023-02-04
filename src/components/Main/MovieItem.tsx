import React, {FC} from 'react';
import {MovieTypes} from "../../getTypes";
import cl from './movie.module.css'

interface MovieEachItem {
    item:MovieTypes;
}


const MovieItem:FC<MovieEachItem> = ({item}) => {

    const img = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

    // console.log(item)
    return (
        <a href='/' className={cl.Movie_item}>
            <img className={cl.Movie_img} src={`${img}${item.backdrop_path}`} alt="MovieImg"/>
            <div className={cl.Movie_info}>
                <img className='' src="https://cdn-icons-png.flaticon.com/512/477/477406.png" width='18px'/>
                <span> {item.vote_average}</span>
                <p><span>{item.release_date.substring(0,4)}  </span>
                    <span>  {item.title}</span></p>
            </div>
        </a>
    );
};

export default MovieItem;