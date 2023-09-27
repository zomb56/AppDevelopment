import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../Redux/UserSlice';
import CarPoll from '../Assets/images/CarPoll.png';
import '../Assets/css/Navbar.css';

function Navbar() {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector(selectUser); 
  const username = user.username;

  const handleLogout = () => {
    dispatch(logout());
    nav('/Login');
  };

  return (
    <nav className='navbar'>
      <div className='left'>
      <div className='navbar-logo'>
        <a href='/'><img src={CarPoll}/></a>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Poll">Poll</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Feedback">Feedback</Link>
        </li>
        <li>
          <Link to="/Faq">FAQ</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Terms">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/Privacy">Privacy Policy</Link>
        </li>
      </ul>
      </div>
      <ul className='right'>
        <li>
        <div className="actions">
        {username ? (
          <>
          <button className='link btn btn-primary' onClick={handleLogout}>
          Logout
          </button>
          <div className='hello'>Hello, {username}</div>
          </>
        )
        : (
          <>
            <button className='link btn btn-primary' onClick={handleLogout}>
                Login
            </button>
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


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {

//   const nav = useNavigate();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" onClick={()=>{nav("/About")}}>
//                 About
//               </a>
//             </li>
//             {/* <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li> */}
//             <li className="nav-item">
//               <a className="nav-link contact" 
//               href="#" tabIndex="-1" aria-disabled="true">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;