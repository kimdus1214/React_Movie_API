import React from 'react';
import Detail from '../components/sub/Detail';
import styled from 'styled-components';

function MovieDetail() {
    return (
        <MovieDetailBlock>
            <Detail />
        </MovieDetailBlock>
    )
}

export default MovieDetail;

const MovieDetailBlock = styled.div`
    width: 85%;
    margin: auto;
    position: relative;
    top: 100px;
`;
