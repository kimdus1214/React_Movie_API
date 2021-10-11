import styled from 'styled-components'

export const InfoTable = styled.div`
    font-family:  Arial, Helvetica, sans-serif;
    width: 100%;
    border: 1px solid #D7D7D7;
`;
export const TableRow = styled.ul`
    display: flex;
    width:100%;

    &:nth-child(2){
        border-bottom:1px solid #D7D7D7;
        border-top:1px solid #D7D7D7;
    }
`;
export const TableColDif = styled.li`
    width:25%;
    padding: 15px 10px;   
    &:nth-child(2n+1){
        background: #F0F0F0;
    }
`;
export const TableCol = styled.li`
    width:20%;
    padding: 8px;
    &:nth-child(2n+1){
        background: #F0F0F0;
    }
`;
