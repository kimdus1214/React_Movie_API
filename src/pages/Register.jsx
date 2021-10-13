import React from "react";
import {FormBlock, Form,FormBtn} from '../components/style/form/formStyle';


function Register(){
    return(
        <>
            <FormBlock>
                <h2>회원가입</h2>
                <Form type="text" placeholder="아이디" />
                <Form type="password" placeholder="비밀번호" />
                <FormBtn>회원가입</FormBtn>
            </FormBlock>
        </>
    );
}

export default Register;