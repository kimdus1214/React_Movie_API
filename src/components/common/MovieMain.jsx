import React from 'react'
import {MovieMainBlock, MovieText} from '../style/common/mainImage';

function MovieMain({img, title, text}) {
    return (
        <MovieMainBlock>
            <img src={img} alt={img}/>
            <MovieText>
                <h2>{title}</h2>
                <p>{text}</p>
            </MovieText>
        </MovieMainBlock>
    )
}

export default MovieMain;