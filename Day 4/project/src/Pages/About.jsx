import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './About.css'

const About = () => {
    return(
        <div>
        <Navbar/>
        <div className='main'>
        <Sidebar/>
        <div className="about-container">
            <h1>About Our Online Polling App</h1>
            <p>
                Welcome to our Online Voting and Polling System! We are committed to providing a secure and
                convenient platform for citizens to exercise their democratic rights.
            </p>
            <p>
                Our system allows you to participate in various polls and elections, making your voice heard
                in the decision-making process. We take data privacy and security seriously, ensuring that
                your information is safeguarded at all times.
            </p>
            <p>
                If you have any questions or feedback, please don't hesitate to <a href="/contact">Contact us</a>.
                We appreciate your trust in our platform and look forward to serving you.
            </p>
        </div>
        </div>
        <Footer/>
        </div>
      )
};

export default About;
