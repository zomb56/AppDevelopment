import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Assets/css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const nav = useNavigate();
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a semi-transparent white background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const exploreButtonStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <Navbar/>
      <div className='main'>
      <Sidebar/>
      <div className='title'>
        <div className='home-text mt-5' style={contentStyle}>
        <h1 className='text-primary text-center mt-4 mb-3'>CarPoll</h1>
        <p className='col-lg-12 mb-5'>Introducing CarPoll. CarPoll is a dynamic online platform designed for automotive enthusiasts and consumers to voice their opinions and preferences in the ever-evolving world of automobiles. Our website empowers users to engage in exciting polls and surveys related to cars, allowing them to express their views on various automotive topics and trends. It is the ultimate tool for creating, conducting, and analyzing polls and surveys effortlessly. 
        Whether you're a business looking to gather customer feedback, an educator seeking to engage students in discussions, or simply want to make group decisions, CarPoll has you covered!</p>
        <div className='text-center mb-4' style={exploreButtonStyle}><button className='btn btn-primary' onClick={()=>{nav("/Poll")}}>Explore!</button></div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;