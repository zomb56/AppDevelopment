import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Assets/css/About.css';

const About = () => {
    return(
        <div>
        <Navbar/>
        <div className='main'>
        <Sidebar/>
        <div className="about-container mx-auto">
            <h1 className='text-center text-info mt-3 mb-5'>About CarPoll</h1>
            <p className='col-lg-10 mx-auto mb-5'>
                Welcome to CarPoll! We are committed to providing a secure and
                convenient platform for polling and voting.
            </p>
            <p className='col-lg-10 mx-auto mb-5'>
                Our system allows you to participate in various polls and elections, making your voice heard
                in the decision-making process. We take data privacy and security seriously, ensuring that
                your information is safeguarded at all times. Read our <a href='/Privacy'>Privacy Policy</a> for more information.
            </p>
            <p className='col-lg-10 mx-auto mb-5'>
                If you have any questions or feedback, please don't hesitate to <a href="/Contact">Contact Us</a> or give us <a href="/Feedback">Feedback</a>.
                Make sure to also read the <a href='/Terms'>Terms and Conditions</a>.
                We appreciate your trust in our platform and look forward to serving you.
            </p>
        </div>
        </div>
        <Footer/>
        </div>
      )
};

export default About;

// import Navbar from './Navbar';
// import Footer from './Footer';

// function About() {
//   const wrapperStyle = {
//     // background: `url(${backgroundImage}) center/cover no-repeat fixed`,
//     minHeight: '100vh', // Ensure the background covers the entire viewport height
//   };

//   const contentStyle = {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
//   };

//   return (
//     <div className="wrapper" style={wrapperStyle}>
//       <Navbar />
//       <div className="container my-5" style={contentStyle}>
//         <div className="row">
//           <div className="col-md-12">
//             <h1 className="display-4 text-center mb-3">About Our Smaag</h1>
//             <p className="lead text-center mt-3">
//               Welcome to Smaag Enterprises, your trusted source for high-quality agricultural equipment.
//             </p>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6 g-5">
//             <h2>Our Story</h2>
//             <p>
//               Smaag was founded with a passion for agriculture and a commitment to
//               providing farmers with the best equipment available. Our journey began in 2021
//               when Mahesh started the business from Coimbatore. Since then, we have
//               grown into a leading provider of agricultural equipment in the region.
//             </p>
//           </div>
//           <div className="col-md-6 g-5">
//             <h2>Our Mission</h2>
//             <p>
//               Our mission is to empower farmers with reliable and efficient agricultural
//               equipment that enhances productivity and ensures sustainable farming practices.
//               We strive to offer a wide range of products that cater to the diverse needs of
//               our customers while maintaining the highest standards of quality and service.
//             </p>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-md-6 g-5">
//             <h2>Our Values</h2>
//             <ul>
//               <li>Quality: We believe in delivering products that meet or exceed industry standards.</li>
//               <li>Customer-Centric: Our customers satisfaction is our top priority.</li>
//               <li>Sustainability: We promote environmentally responsible farming practices.</li>
//               <li>Innovation: We stay updated with the latest advancements in agricultural technology.</li>
//               <li>Community: We support and engage with the agricultural community.</li>
//             </ul>
//           </div>
//           <div className="col-md-6 g-5">
//             <h2>Our Team</h2>
//             <p>
//               At Smaag Enterprises, our team consists of dedicated professionals who share a
//               passion for agriculture. Our experts are always ready to assist you in selecting
//               the right equipment, providing technical support, and addressing any inquiries
//               you may have.
//             </p>
//           </div>
//         </div>
        
//         {/* Additional Content Here */}
//         <div className="row mt-4">
//           <div className="col-md-12">
//             <h2>Our Awards</h2>
//             <p>
//               Smaag Enterprises has received numerous awards for excellence in the field of agriculture.
//             </p>
//           </div>
//         </div>
        
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default About;
