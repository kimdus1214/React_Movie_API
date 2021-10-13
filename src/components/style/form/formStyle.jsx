import styled from 'styled-components';

export const FormBlock = styled.form`
    width: 450px;
    padding: 25px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, .2);
    position: relative;
    top: 150px;
    left: 50%;
    margin-left: -175px;
    text-align: center;
    box-sizing: border-box;

    h2{
        font-size: 2rem;
        margin-bottom: 35px;
        margin-top: 35px;
    }
    p{
        margin-top: 15px;
        margin-bottom: 35px;
    }
`;

export const Form = styled.input`
    width: 100%;
    height: 50px;
    line-height:50px;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 1.1rem;
    margin-bottom: 25px;
    border: 0;
    border-bottom: 1px solid #ddd;
    &:focus {
        outline: 2px solid #5978C9;
        transition: .3s;
    }
`;

export const FormBtn = styled.button`
    width: 100%;
    height: 50px;
    line-height:50px;
    margin-bottom: 35px;
    margin-top: 35px;
`;