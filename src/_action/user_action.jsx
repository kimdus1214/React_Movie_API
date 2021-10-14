import axios from "axios";
import { USER_LOGIN, USER_LoGOUT, USER_REGISTER } from "./type";

export function registerUser(dataToSubmit){
    const request = axios.post('/register',dataToSubmit)
    .then(respose=> respose.data)

    return {
        type: USER_REGISTER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post('/login',dataToSubmit)
    .then(respose=> respose.data)

    return {
        type: USER_LOGIN,
        payload: request
    }
}

export function logoutUser(dataToSubmit){
    const request = axios.post('/logout',dataToSubmit)
    .then(respose=> respose.data)

    return {
        type: USER_LoGOUT,
        payload: request
    }
}