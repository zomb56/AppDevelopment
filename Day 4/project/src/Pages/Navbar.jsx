import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../Redux/UserSlice';
import './Navbar.css';

function Navbar() {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector(selectUser);
  const username = user.username;

  const handleLogout = () => {
    dispatch(logout());
    nav('/');
  };

  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <ul className='right'>
        <li>
        <div className="actions">
        {username ? (
          <>
          
          <Link className='link' onClick={handleLogout}>
          Logout
          </Link>
          Hello, {username}
          </>
        )
         : (
          <>
            <Link to="/">
                Login
            </Link>
          </>
        )
      }
      </div>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;