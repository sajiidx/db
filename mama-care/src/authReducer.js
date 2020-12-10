import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT
} from './constants/constants.js'
const initialState = {
    token: localStorage.getItem('token'),
    isAllowedToLogIn: false,
    errors: {}
}

const authReducer = (state =  initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isLoggedIn: true
            }
        case LOAD_USER:
            localStorage.getItem('token');
            return{
                ...state,
                isLoggedIn: true,
                
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                isLoggedIn: false,
                errors: payload
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                isLoggedIn: false
            }
        default:
            return state;
    }
}

export default authReducer;