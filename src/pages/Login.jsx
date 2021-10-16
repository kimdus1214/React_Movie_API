import React,{useCallback, useState} from "react";
import { Link } from "react-router-dom";
import {FormBlock, FormBtn, Form} from '../components/style/form/formStyle';
import {useDispatch} from 'react-redux';
import {loginUser} from '../_action/user_action';

function Login({history}){
    const dispatch = useDispatch();
    const [inputs, setinputs] = useState({
        userid:'',
        userpw:''
    })
    const { userid, userpw } = inputs;

    const onChange = useCallback( e=> {
        const {name, value} = e.target;
        setinputs({
            ...inputs,
            [name]:value
        });
    },[inputs]);

    const onSubmit = e=>{
        e.preventDefault();
        let body={
            id: userid,
            password: userpw
        }
        if(!userid || !userpw){
            alert("필수 항목을 작성하세요");
        }else{
            dispatch(loginUser(body))
            .then(response=>{
                if(response.payload.loginSuccess){
                    window.localStorage.setItem('userid', response.payload.userid);
                    history.push('/');
                }else{
                    alert(response.payload.message);
                }
            })
        }
        
    }
    return(
        <>
            <FormBlock onSubmit={onSubmit}>
                <h2>로그인</h2>
                <Form type="text" placeholder="아이디" name="userid" value={userid} onChange={onChange}/>
                <Form type="password" placeholder="비밀번호" name="userpw" value={userpw} onChange={onChange}/>
                <FormBtn type="submit">로그인</FormBtn>
                <p>회원이 아니신가요? <Link to="/register" style={{color:"#0070C0", textDecoration:"none", fontWeight:"bold"}}>회원가입</Link></p>
            </FormBlock>            
        </>
    );
}

export default Login;