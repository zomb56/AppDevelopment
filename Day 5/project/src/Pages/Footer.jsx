import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className='contact'>Contact Us</h3>
          <p>Email: gowtham@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>&copy; {new Date().getFullYear()}Online Polling App</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;