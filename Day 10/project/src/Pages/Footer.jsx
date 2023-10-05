// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-left">
//           <h3 className='contact'>Contact Us</h3>
//           <p>Email: gowtham@gmail.com</p>
//           <p>Phone: +1 (123) 456-7890</p>
//           <div className="social-media">
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>
//         <div className="footer-right">
//           <p>&copy; {new Date().getFullYear()}Online Polling App</p>
//           <p>All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';
// import './Footer.css';

// import twitter_icon from '../Assets/images/Footer/twitter.png';
// import facebook_icon from '../Assets/images/Footer/facebook.png';
// import instagram_icon from '../Assets/images/Footer/instagram.png';
// import logo from '../Assets/images/Footer/logo.png';

// function Footer() {

//   return (

//     <div className='footer-container'>
//       <div className='footer-upper'>
//         <a className='footer-logo'>
//           {/* <img src={logo}/> */}
//         </a>
//         <ul className='footer-links'>
//           <li>
//             <a className='footer-link'>Home</a>
//           </li>
//           <li>
//             <a className='footer-link'>About</a>
//           </li>
//           <li>
//             <a className='footer-link'>Contact</a>
//           </li>
//           <li>
//             <a className='footer-link'>Dashboard</a>
//           </li>
//           <li>
//             <a className='footer-link'>Feedback</a>
//           </li>
//           <li>
//             <a className='footer-link'>FAQ</a>
//           </li>
//           {/* <li>
//             <a className='footer-link'>FAQ</a>
//           </li> */}
//         </ul>
//         <div className='social'>
//           <a className='footer-social'>
//             <img src={twitter_icon} href="/www.twitter.com"/>
//           </a>
//           <a className='footer-social'>
//             <img src={facebook_icon}/>
//           </a>
//           <a className='footer-social'>
//             <img src={instagram_icon}/>
//           </a>
//         </div>
//       </div>
//       <hr className='line'/>  
//       <div className='footer-lower'>
//         <div className='copy'>© 2023 All Rights Reserved.</div>
//       </div>
//     </div>

//   );

// }

// export default Footer;


import React from 'react';
import Facebook from '../Assets/images/Footer/facebook.png';
import Twitter from '../Assets/images/Footer/twitter.png';
import Instagram from '../Assets/images/Footer/instagram.png';
import LinkedIn from '../Assets/images/Footer/linkedin.png';
import GitHub from '../Assets/images/Footer/github.png';

class Footer extends React.Component {  

  render() {
    const footerStyle = {
      backgroundColor: '#929fba',
      color: 'white',
    };

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
    };

    const containerStyle = {
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1000, // Adjust the z-index as needed
    };

    return (
      <div style={containerStyle}>
        {/* Remove the container if you want to extend the Footer to full width */}
        {/* <div className="container my-5"> */}
          {/* Footer */}
          <footer className="text-center text-lg-start" style={footerStyle}>
            {/* Grid container */}
            <div className="container p-4 pb-0">
              {/* Section: Links */}
              <section>
                {/*Grid row*/}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">CarPoll</h6>
                    <p>
                      CarPoll is a dynamic online platform designed for automotive enthusiasts and consumers to voice their opinions and preferences in the ever-evolving world of automobiles.
                    </p>
                  </div>
                  {/* Grid column */}

                  <hr className="w-100 clearfix d-md-none" />

                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Pages</h6>
                    <p>
                      <a href="#" style={linkStyle}>
                        Feedback
                      </a>
                    </p>
                    <p>
                      <a href="#" style={linkStyle}>
                        FAQ
                      </a>
                    </p>
                    <p>
                      <a href="#" style={linkStyle}>
                        Terms and Conditions
                      </a>
                    </p>
                    <p>
                      <a href="#" style={linkStyle}>
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  {/* Grid column */}

                  <hr className="w-100 clearfix d-md-none" />

                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p>
                      <i className="fas fa-home mr-3"></i> Coimbatore, Tamil Nadu, India
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> gowtham@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 9384405120
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 0123456789
                    </p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-3 mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                    
                    <a href='https://www.facebook.com' target='_blank'><img src={Facebook}/></a>
                    <a href='https://www.twitter.com' target='_blank'><img src={Twitter}/></a>
                    <a href='https://www.instagram.com' target='_blank'><img src={Instagram}/></a>
                    <a href='https://www.linkedin.com' target='_blank'><img src={LinkedIn}/></a>
                    <a href='https://www.github.com' target='_blank'><img src={GitHub}/></a>

                    {/* <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: '#55acee' }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </a> */}
            
                  </div>
                </div>
                {/* Grid row */}
              </section>
              {/* Section: Links */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2023 Copyright:
              <a className="text-white" href="/Home">
                CarPoll.com
              </a>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        {/* </div> */}
        {/* End of .container */}
      </div>
    );
  }
}

export default Footer;

