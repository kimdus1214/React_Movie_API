import styled from 'styled-components';

export const MovieMainBlock = styled.div`
width:100%;
height: 500px;
position: relative;
margin-bottom: 80px;
overflow: hidden;

img{
    position: absolute;
    top: -50px;
    width:100%;
}
`;

export const MovieText = styled.div`
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