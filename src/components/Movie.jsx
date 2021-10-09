import React,{useEffect, useState} from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API_KEY, API_URL,IMG_URL } from './config';
import MovieMain from './MovieMain';

function Movie() {
    const [movies, setMovies] = useState([]);
    const [mainImg, setMainImg] = useState(null);
    const [pagePlus, setPagePlus] = useState(1);

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endPoint)
            .then(response=>response.json())
            .then(response=>{
                console.log(response);
                setMovies(response.results);
                setMainImg(response.results[0]);
        })
    }, []);

    const movieMore = ()=>{
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${pagePlus}` +1;
        fetch(endPoint)
            .then(response=>response.json())
            .then(response=>{
                setMovies([...movies, ...response.results]);
                setMainImg(response.results[0]);
                setPagePlus(response.page);
        })
    }
    return (
        <>
            {mainImg && 
                <MovieMain
                    img={`${IMG_URL}w1280${mainImg.backdrop_path}`}
                    title={mainImg.title}
                    text={mainImg.overview}
                />
            }
            <MovieTit>
                <p>Movies by latest</p>
            </MovieTit>            
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
                <MoreBtn onClick={movieMore}>more</MoreBtn>
            </MoreBtnWrap>
        </>
    )
}

export default Movie;
const MovieTit = styled.div`
    width:100%;
    height: 40px;
    line-height: 40px;
    margin: 35px 0px;
    border-bottom: 1px solid #333;

    p{
        font-size: 1.3rem;
        font-weight: 600;
    }
`;
const MovieBlock = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

const MovieItem = styled.li`
    width: 24%;
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