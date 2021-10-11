import React from 'react'
import Movie from '../components/main/Movie'
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
    margin: auto;
    position: relative;
    top: 100px;
`;
