import React from 'react'
import Movie from '../components/Movie'
import styled from 'styled-components';

function Main() {
    return (
        <MainBlock>
            <Movie />
        </MainBlock>
    )
}

export default Main;

const MainBlock = styled.div`
    width: 85%;
    margin: 0 auto;
`;
