import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Contact.css';

const Contact = () => {
  return(
    <div>
    <Navbar/>
    <div className='main'>
    <Sidebar/>
    <div></div>
    </div>
    <Footer/>
    </div>
  )
};

export default Contact;
