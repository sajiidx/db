import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT
} from '../constants/constants.js'
import {setToken} from '../setToken'
import axois from 'axios'
export const loadUser = () => async dispatch =>{
    if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
    }
    try{

       const respone = await axois.get("http://localhost:5040/customer")


       dispatch({
           type: LOAD_USER,
           payload: respone.data
       })

    } catch(error){
        dispatch({
           type: AUTH_ERROR,
           payload: error
       })
    }
}

export const registerUser = (fname,lname,username, email,password, phone) => async dispatch =>{
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({fname,lname,username, email,password, phone})
        console.log(`Body: ${body}`)
        
        const response = await axois.post("http://localhost:5040/customer/register",body,config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser());
    } catch(error){
        dispatch({
           type: REGISTER_FAIL,
           payload: error
       })
    }
}

export const loginUser = (username,password) => async dispatch =>{
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({username,password})

        console.log(body)

        const response = await axois.post('http://localhost:5040/customer/login',body,config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser());
    } catch(error){
        dispatch({
           type: LOGIN_FAIL,
           payload: error
       })
    }
}

export const logout = () => async dispatch =>{
    dispatch({type: LOGOUT})
}