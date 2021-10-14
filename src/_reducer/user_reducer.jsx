import { USER_LOGIN, USER_LoGOUT, USER_REGISTER } from "../_action/type";

export default function user(state={}, action){
    switch(action.type){
        case USER_REGISTER:
            return {...state, register: action.payload}
        case USER_LOGIN:
            return {...state, loginSuccess: action.payload}
        case USER_LoGOUT:
            return {...state, loginSuccess: action.payload}
        default:
            return state;        
    }
}