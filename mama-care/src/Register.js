import React,{ useState} from 'react'
import { connect } from 'react-redux'
import "./Register.css"
import {registerUser} from './action/auth'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const Register = ({isLoggedIn, registerUser}) => {

    let [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        password: '',
        phone: ''
    })

    if(isLoggedIn) return <Redirect to="/" />

    let {fname, lname, email, username, password, phone} = data;

    const onChange = e =>{
        console.log(e.target.name);
        setData({...data,[e.target.name]: e.target.value})
    }

    const submitData = async () =>{
        if(fname === '' || lname === '' ||
        username === '' || email === '' ||
        password === '' || phone === ''){
            return alert("All Fields are required")
        }
        registerUser(
           fname,
            lname,
            username,
            email,
            password,
            phone
        )
        localStorage.setItem('username',username)
        const response = await axios({
            url: 'http://localhost:5040/cart/store',
            method: 'POST',
            data:{
                cart_id: Date.now(),
                cusername: username
            }
        })
        console.log(data, response);
    }

    return (
        <div id="registration">
        <a className="back" href="/login"><span className="material-icon">
            BACK
            </span></a>
        <h1>Register</h1>
            <div className="input">
                <label htmlFor="fname">First Name: </label>
                <input onChange={(e) => onChange(e)} value={fname}  type="text" id="fname" name="fname" required/>
            </div>
            <div className="input">
                <label htmlFor="lname">Last Name: </label>
                <input onChange={(e) => onChange(e)} value={lname}  type="text" id="lname" name="lname" required/>
            </div>
            <div className="input">
                <label htmlFor="username">Username: </label>
                <input onChange={(e) => onChange(e)} value={username}  type="text" id="username" name="username" required/>
            </div>
            <div className="input">
                <label htmlFor="email">Email: </label>
                <input onChange={(e) => onChange(e)} value={email}  type="email" id="email" name="email" required/>
            </div>
            <div className="input">
                <label htmlFor="password">Password: </label>
                <input onChange={(e) => onChange(e)} value={password}  type="password" id="password" name="password" required/>
            </div>
            <div className="input">
                <label htmlFor="phone">Phone: </label>
                <input onChange={(e) => onChange(e)} value={phone}  type="text" id="phone" name="phone" required/>
            </div>
            <button onClick={()=>submitData()} id='signup'>Sign Up</button>
    </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, {registerUser})(Register)
