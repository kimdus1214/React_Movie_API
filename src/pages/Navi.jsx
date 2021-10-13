import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navi() {
    return (
        <NaviBlock>
            <NaviNav><NavLink to="/">Home</NavLink></NaviNav>
            <NaviNav><NavLink to="/login">로그인</NavLink></NaviNav>
        </NaviBlock>
    )
}

export default Navi;

const NaviBlock = styled.ul`
    width:100%;
    position: fixed;
    height: 80px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, .2);
    padding-left: 10%;
    padding-right: 10%;
    z-index: 999;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`;
const NaviNav = styled.li`
    height: 100px;
    line-height: 80px;
    font-size: 1.2rem;
`;