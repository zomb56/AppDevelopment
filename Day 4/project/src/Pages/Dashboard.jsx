import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className='main'>
    <Sidebar/>
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="polls1">
        <div className='d1'>
            <h2>No. of Candidates</h2>
            <h3>5</h3>
        </div>
        <div className='d2'>
            <h2>No. of Voters</h2>
            <h3>50,000</h3>
        </div>
      </div>
      <div className="polls2">
        <div className='d3'>
            <h2>Votes Tallied</h2>
            <h3>34,823</h3>
        </div>
        <div className='d4'>
            <h2>Vote Ratio</h2>
            <h3>70%</h3>
        </div>
      </div>
      {/* <div className="upcoming-polls-container">
        <h2>Upcoming Polls</h2>
      </div> */}
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Dashboard;