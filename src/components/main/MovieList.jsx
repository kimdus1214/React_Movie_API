import React from 'react'
import { Link } from 'react-router-dom';
import { IMG_URL } from '../config';
import {MovieBlock, MovieItem} from '../style/main/mainmovieList';

function MovieList({movies}) {
    return (
        <MovieBlock>
            {movies && 
                movies.map((movie, index)=>(
                    <MovieItem key={index}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.poster_path ? `${IMG_URL}w500${movie.poster_path}`: null}
                                alt={movie.id}
                            />
                        </Link>                            
                    </MovieItem>
            ))}       
        </MovieBlock>
    )
}

export default MovieList;
