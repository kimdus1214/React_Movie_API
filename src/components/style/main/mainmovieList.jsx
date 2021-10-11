import styled from 'styled-components';

export const MovieBlock = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export const MovieItem = styled.li`
    width: 24%;
    margin-bottom: 15px;

    img{
        width:100%;
        height: 100%;
    }

    @media screen and (max-width: 996px) and (min-width: 576px){
        width: 49%;
    }
    @media screen and (max-width: 575px){
        width: 90%;
        margin-left: 5%;
    }
`;