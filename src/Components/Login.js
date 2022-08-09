import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {

    const login = () =>{
        console.log("You are logged in");
    }
  return (
    <div className='loginpage'>
        <div className='inputfield'>
        <label>
            Username:
        </label>
        <input type="text"/><br /><br />
        </div>
        <div className='inputfield'>
        <label>
            Password:
        </label>
        <input type="password"/><br /><br />
        </div>
        <br />
        <div className='login-btn'>
        <Button val="Login" add = {login}/>
        </div>
        <br />
        <div className="accountcreate">
            <p>Don't Have an Account ? <Link to="/signup">Sign up</Link></p>
        </div>
        
    </div>
  )
}

export default Login;