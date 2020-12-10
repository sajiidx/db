import React, { useState } from 'react'
import { loginUser } from './action/auth'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import "./Login.css"
const Login = ({ isLoggedIn,loginUser}) => {

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    if(isLoggedIn) return <Redirect to="/" />

    let {username, password} = data;

    const onChange = e =>{
        console.log(e.target.name);
        setData({...data,[e.target.name]: e.target.value})
    }

    const submitData = () =>{
        loginUser(username,password)
        //console.log(data);
    }

    

    return (
        <div className="login">
            <h1>WELCOME BACK</h1>
            <div className="entry">
                <div className="input">
                    <input onChange={(e) => onChange(e)} value={username} type="text" id="username" name="username" placeholder="username/email" required/>
                </div>
                <div className="input">
                    <input onChange={(e) => onChange(e)} value={password} type="password" id="password" name="password" placeholder="password" required/>
                </div>
                <button onClick={()=>submitData()} id='login'>Login</button>
            </div>
                <div className="operations">
                    <p>Don't have an Account? </p>
                    <a href="/register">Sign Up</a>

                </div>
                
            
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {loginUser})(Login)