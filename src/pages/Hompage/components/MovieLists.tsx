import React, {FC} from 'react';
import {MovieTypes} from "../../../utils/getTypes";
import MovieItem from "./MovieItem"
import cl from './movie.module.css'

interface movieListsTypes{
    items?:MovieTypes[];
}

const MovieLists :FC<movieListsTypes> = ({items}) => {
    return (
        <div className={cl.Movies}>
            <div className={cl.Movie_Lists}>
                {items?.map((item)=>
                        <MovieItem key={item.id} item={item}/>
                )}
            </div>
        </div>
    );
};

export default MovieLists;
