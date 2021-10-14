import React,{useState, useCallback} from "react";
import {FormBlock, Form,FormBtn} from '../components/style/form/formStyle';
import {useDispatch} from 'react-redux';
import {registerUser} from '../_action/user_action';

function Register({history}){
    const dispatch = useDispatch();
    const [inputs, setinputs] = useState({
        userid: '',
        userpw: ''
    })
    const {userid, userpw} = inputs;
    const onChange = useCallback(e=>{
        const {name, value} = e.target;
        setinputs({
            ...inputs,
            [name]: value
        });
    },[inputs])

    const onSubmit = e => {
        e.preventDefault();
        let body ={
            id: userid,
            pw: userpw
        }
        if(!userid || !userpw){
            alert("필수 항목을 작성해주세요");
        }else{
            dispatch(registerUser(body))
            .then(response=>{
                if(response.payload.success){
                    alert("회원가입 성공!");
                    history.push('/login');
                }else{
                    alert("회원가입 실패!");
                }
            }).catch(error=>console.log(error))
        }
    }
    return(
        <>
            <FormBlock onSubmit={onSubmit}>
                <h2>회원가입</h2>
                <Form type="text" placeholder="아이디" name="userid" value={userid} onChange={onChange} />
                <Form type="password" placeholder="비밀번호"  name="userpw" value={userpw} onChange={onChange}/>
                <FormBtn type="submit">회원가입</FormBtn>
            </FormBlock>
        </>
    );
}

export default Register;