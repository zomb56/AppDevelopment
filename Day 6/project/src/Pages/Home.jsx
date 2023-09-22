import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='main'>
      <Sidebar/>
      <div className='title'>
        <h1 className='name'>Online Polling App</h1>
        <h3 className='summary'>Introducing our Online Polling App, the ultimate tool for creating, conducting, and analyzing polls and surveys effortlessly. 
        Whether you're a business looking to gather customer feedback, an educator seeking to engage students in discussions, or simply want to make group decisions, our Online Polling App has you covered.</h3>
      </div>
      <div className='bg'></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;