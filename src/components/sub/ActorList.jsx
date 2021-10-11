import React from 'react'
import { IMG_URL } from '../config';
import {MovieBlock, MovieItem} from '../style/main/mainmovieList';

function MovieList({castings}) {
    return (
        <MovieBlock>
            {castings && 
                castings.map((casting, index)=>(
                    <MovieItem key={index}>
                        <img src={casting.profile_path ? `${IMG_URL}w500${casting.profile_path}`: null}
                            alt={casting.name}
                        />                  
                    </MovieItem>
            ))}       
        </MovieBlock>
    )
}

export default MovieList;
