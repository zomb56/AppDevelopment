import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';
import '../Assets/css/Login.css';

import username_icon from '../Assets/images/username_icon.png';
import password_icon from '../Assets/images/password_icon.png';

function Login() {
  
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const passwordIsValid = password.length >= 8;

        const validationErrors = {};

        if (!passwordIsValid) {
          validationErrors.password = 'Password must be at least 8 characters long';
        }

        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        dispatch(login(username)) 
        nav('/');

    }

    const routeSignUp = () => {
      nav('/SignUp')
    }

    

  return (
    <div>
    {/* <div className='popup'>Logged in Successfully!</div> */}
    <div className="lcontainer">
      <div className="lheader">
        <div className="ltext">Login</div>
        <div className="lunderline"></div>
      </div>
      <form className="linputs" onSubmit={handleSubmit}>
        <div className="linput">
          <img src={username_icon}/>
          <input type="text" value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)} name='username' required/>
        </div>
        <div className="linput">
          <img src={password_icon}/>
          <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} name='password' required/>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
        <div className="lsubmit-container">
          <button className="lsubmit" onSubmit={handleSubmit}>Login</button>
          <button className="lsubmit lgray" onClick={routeSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;