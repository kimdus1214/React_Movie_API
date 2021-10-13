import React from "react";
import { Link } from "react-router-dom";
import {FormBlock, FormBtn, Form} from '../components/style/form/formStyle';


function Login(){
    return(
        <>
            <FormBlock>
                <h2>로그인</h2>
                <Form type="text" placeholder="아이디" />
                <Form type="password" placeholder="비밀번호" />
                <FormBtn>로그인</FormBtn>
                <p>회원이 아니신가요? <Link to="/register">회원가입</Link></p>
            </FormBlock>            
        </>
    );
}

export default Login;