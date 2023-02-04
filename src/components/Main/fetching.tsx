import axios from "axios";
import {MovieTypes} from "../../getTypes";

const KEY = '30374d93788ff5494fd5e7e5b43d5f17'


export const fetchMovies = () => {
    console.log('loading')
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then(res => res.data.results)
        .catch(err => console.log(err))
        .finally(() => console.log('loaded'))
}


