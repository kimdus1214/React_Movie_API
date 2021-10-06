import React,{useEffect, useState} from 'react'
import styled from 'styled-components';
import { API_KEY, API_URL,IMG_URL } from './config';
import MovieMain from './MovieMain';

function Movie() {
    const [movies, setMovies] = useState([]);
    const [mainImg, setMainImg] = useState(null);

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en&page=1`;
        fetch(endPoint)
            .then(response=>response.json())
            .then(response=>{
                console.log(response);
                setMovies(response.results);
                setMainImg(response.results[0]);
        })
    }, [movies]);

    return (
        <>
            {mainImg && 
                <MovieMain
                    img={`${IMG_URL}w1280${mainImg.backdrop_path}`}
                    title={mainImg.title}
                    text={mainImg.overview}
                />
            }
            <MovieBlock>
                {movies && 
                    movies.map((movie, index)=>(
                        <MovieItem key={index}>
                            <img src={movie.poster_path ? `${IMG_URL}w500${movie.poster_path}`: null}
                                alt={movie.id}
                            />
                        </MovieItem>
                ))}                
            </MovieBlock>
            <MoreBtnWrap>
                <MoreBtn>more</MoreBtn>
            </MoreBtnWrap>
        </>
    )
}

export default Movie;

const MovieBlock = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

const MovieItem = styled.li`
    width: 24%;
    // height: 300px;
    margin-bottom: 15px;
    
    img{
        width:100%;
        height: 100%;
    }
`;

const MoreBtnWrap = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;
const MoreBtn = styled.button`
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
`;