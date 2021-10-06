import React from 'react'
import styled from 'styled-components';

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

const MovieMainBlock = styled.div`
    height: 500px;
    position: relative;
    margin-bottom: 100px;
    overflow: hidden;

    img{
        position: absolute;
        top: -50px;  
    }
`;

const MovieText = styled.div`
    width: 85%;
    position: absolute;
    bottom: 50px;
    left: 35px;

    h2{         
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
    p{
        color: #fff;
        font-size: 1rem;
    }
`;