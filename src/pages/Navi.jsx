import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navi() {
    return (
        <NaviBlock>
            <NaviNav><NavLink to="/">Home</NavLink></NaviNav>
        </NaviBlock>
    )
}

export default Navi;

const NaviBlock = styled.ul`
    width:100%;
    position: fixed;
    height: 80px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, .2);
    padding-left: 5%;
    padding-right: 5%;
    z-index: 999;
    background: #fff;
`;
const NaviNav = styled.li`
    height: 100px;
    line-height: 80px;
    font-size: 1.2rem;
`;