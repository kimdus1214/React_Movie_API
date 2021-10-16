import React from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import {logoutUser} from '../_action/user_action';
import styled from "styled-components";

const LogOut = styled.div`
    cursor: pointer;
`;
function LogoutBtn({children, props}){
    const dispatch = useDispatch();
    const onLogout = ()=>{
        dispatch(logoutUser())
        .then(response=>{
            if(response.payload.loginSuccess){
                localStorage.removeItem("userid");
                props.history.push('/');
            }else{
                alert("로그아웃에 실패했습니다");
            }
        })
    }
    return (
        <LogOut onClick={onLogout}>{children}</LogOut>
    );
}

export default withRouter(LogoutBtn);