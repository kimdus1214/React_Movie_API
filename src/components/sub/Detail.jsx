import React,{useState,useEffect} from 'react';
import { API_KEY, API_URL,IMG_URL } from '../config';
import {useParams} from 'react-router-dom';
import MovieMain from '../common/MovieMain';
import Info from './Info';
import {ActorButtonBlock, ActorButton} from '../style/sub/actorbutton';
import ActorList from './ActorList';

function Detail() {
    let {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [castings, setCastings] = useState([]);
    const [castiongToggle, setcastiongToggle] = useState(false);

    useEffect(() => {
        // 영화 정보 가져오기
        let endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        fetch(endPointInfo)
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            setMovie(response);
        })

        // 배우 정보 가져오기
        let endPointActor = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        fetch(endPointActor)
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            setCastings(response.cast);
        })
        
    }, []);

    const onToggle = ()=>setcastiongToggle(!castiongToggle);

    return (
        <div>
            <MovieMain 
                img={`${IMG_URL}w1280${movie.backdrop_path}`}
                title={movie.original_title}
                text={movie.overview}
            />

            <Info movie={movie}/>
            <ActorButtonBlock>
                <ActorButton onClick={onToggle}>Actor View</ActorButton>
            </ActorButtonBlock>

            {castiongToggle &&
                <ActorList castings={castings}/>
            }
        </div>
    )
}

export default Detail;
