import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

import username_icon from '../Assets/images/username_icon.png';
import email_icon from '../Assets/images/email_icon.png';
import password_icon from '../Assets/images/password_icon.png';

function SignUp() {

  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = validateEmail(email);
    const passwordIsValid = password.length >= 8;

    
    const validationErrors = {};
    if (!emailIsValid) {
      validationErrors.email = 'Please enter a valid email address';
    }
    if (!passwordIsValid) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }

    if (Object.keys(validationErrors).length == 0) {
      setErrors(validationErrors);  
      nav("/");
      return;
    }
  };
  
    const routeLogin = () => {
        nav('/Login')
    }

  return (
    <div className="scontainer">
      <div className="sheader">
        <div className="stext">Sign Up</div>
        <div className="sunderline"></div>
      </div>
      <form className="sinputs" onSubmit={handleSubmit}>
        <div className="sinput">
          <img src={username_icon}/>
          <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} name='username' required/>
        </div>
        <div className="sinput">
          <img src={email_icon}/>
          <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} name='email' required/>
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <div className="sinput">
          <img src={password_icon}/>
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} name='password' required/>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
        <div className="ssubmit-container">
          <button className="ssubmit" onSubmit={handleSubmit}>Sign Up</button>
          <button className="ssubmit sgray" onClick={routeLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
