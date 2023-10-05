// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
// import './Contact.css';

// const Contact = () => {
//   return(
//     <div>
//     <Navbar/>
//     <div className='main'>
//     <Sidebar/>
//     <div></div>
//     </div>
//     <Footer/>
//     </div>
//   )
// };

// export default Contact;

// import React from "react"; 
// import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "./Content_Option";

// export default function ContactUs() {
  

//   return (
//       <Container>
     
//         <Row className="mb-5 mt-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Contact Me</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5" className="mb-5">
//             <h3 className="color_sec py-4">Get in touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
//             <form  className="contact__form w-100">
//               <Row>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="Name" 
//                     type="text"
//                     required 
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email" 
//                     required 
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5" 
//                 required
//               ></textarea>
//               <br />
//               <Row>
//                 <Col lg="12" className="form-group">
//                   <button className="btn ac_btn" type="submit"> 
//                   Send
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//   );
// }


// import React from "react";
// import { Container, Row, Col, Form, Button } from "bootstrap";
// import { contactConfig } from "../Config/Content_Option.jsx";

// export default function ContactUs() {
//   return (
//     <Container>
//       <Row className="mb-5 mt-3">
//         <Col lg="8">
//           <h1 className="display-4 mb-4">Contact Me</h1>
//           <hr className="t_border my-4 ml-0" />
//         </Col>
//       </Row>
//       <Row className="sec_sp">
//         <Col lg="5" className="mb-5">
//           <h3 className="color_sec py-4">Get in touch</h3>
//           <address>
//             <strong>Email:</strong>{" "}
//             <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//               {contactConfig.YOUR_EMAIL}
//             </a>
//             <br />
//             <br />
//             {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//               <p>
//                 <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//               </p>
//             ) : (
//               ""
//             )}
//           </address>
//           <p>{contactConfig.description}</p>
//         </Col>
//         <Col lg="7" className="d-flex align-items-center">
//           <Form className="contact__form w-100">
//             <Row>
//               <Col lg="6" className="form-group">
//                 <Form.Control
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   type="text"
//                   required
//                 />
//               </Col>
//               <Col lg="6" className="form-group">
//                 <Form.Control
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   required
//                 />
//               </Col>
//             </Row>
//             <Form.Control
//               id="message"
//               name="message"
//               as="textarea"
//               placeholder="Message"
//               rows={5}
//               required
//             />
//             <br />
//             <Row>
//               <Col lg="12" className="form-group">
//                 <Button className="btn ac_btn" type="submit">
//                   Send
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// // import backgroundImage from '../assets/images/bg.jpeg';
// import Navbar from './Navbar';
// import Footer from './Footer';

// function Contact() {
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
//             <h1 className="display-4 text-center mb-3">Contact Us</h1>
//             <p className="lead text-center mt-3">
//               Get in touch with us for inquiries and support.
//             </p>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-md-6 g-5">
//             <h2>Contact Information</h2>
//             <p>
//               <strong>Address:</strong> 123 Main Street, Coimbatore
//             </p>
//             <p>
//               <strong>Email:</strong> info@example.com
//             </p>
//             <p>
//               <strong>Phone:</strong> +97155678945
//             </p>
//             <p>
//               <strong>Fax:</strong> +98234567856
//             </p>
//           </div>
//           <div className="col-md-6 g-5">
//             <h2>Contact Form</h2>
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Your Name</label>
//                 <input type="text" className="form-control" id="name" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Your Email</label>
//                 <input type="email" className="form-control" id="email" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea className="form-control" id="message" rows="4"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;


// import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';

// class Contact extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     // You can add your form submission logic here, such as sending data to a server.
//     // For now, let's just display a message.
//     alert('Form submitted!'); // You can replace this with your actual submission logic
//   };

//   render() {
//     return (
//       <>
//       <Navbar/>
//       <div className='main'>
//       <Sidebar/>
//       <section className="mb-4">
//         <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//         <p className="text-center w-responsive mx-auto mb-5">
//           Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
//         </p>
//         <div className="row">
//           <div className="col-md-9 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="md-form mb-0">
//                     <input type="text" id="name" name="name" className="form-control" />
//                     <label htmlFor="name" className="">
//                       Your name
//                     </label>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="md-form mb-0">
//                     <input type="text" id="email" name="email" className="form-control" />
//                     <label htmlFor="email" className="">
//                       Your email
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="md-form mb-0">
//                     <input type="text" id="subject" name="subject" className="form-control" />
//                     <label htmlFor="subject" className="">
//                       Subject
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="md-form">
//                     <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
//                     <label htmlFor="message">Your message</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center text-md-left">
//                 <button className="btn btn-primary" type="submit">
//                   Send
//                 </button>
//               </div>
//               <div className="status"></div>
//             </form>
//           </div>
//           <div className="col-md-3 text-center">
//             <ul className="list-unstyled mb-0">
//               <li>
//                 <i className="fas fa-map-marker-alt fa-2x"></i>
//                 <p>San Francisco, CA 94126, USA</p>
//               </li>
//               <li>
//                 <i className="fas fa-phone mt-4 fa-2x"></i>
//                 <p>+ 01 234 567 89</p>
//               </li>
//               <li>
//                 <i className="fas fa-envelope mt-4 fa-2x"></i>
//                 <p>contact@mdbootstrap.com</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       </div>
//       <Footer/>
//       </>
//     );
//   }
// }

// export default Contact;

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Assets/css/Contact.css';

class Contact extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can add your form submission logic here, such as sending data to a server.
    // For now, let's just display a message.
    alert('Message Sent!'); // You can replace this with your actual submission logic
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='main'>
        <Sidebar/>
        <div className="container-fluid contact-container">
          <div className="row">
            <div className="col-md-3">
              <div className="position-fixed"> {/* Add position-fixed class */}
                {/* <Sidebar /> */}
              </div>
            </div>
            <div className="col-md-9 offset-md-2  "> {/* Add offset-md-3 class */}
              <section className="mb-4">
                <h2 className="h1-responsive text-info fw-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
                </p>
                <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="name" className="">
                          Your name
                        </label>
                        <input type="text" id="name" name="name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="email" className="">
                          Your email
                        </label>
                        <input type="text" id="email" name="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <label htmlFor="subject" className="">
                          Subject
                        </label>
                        <input type="text" id="subject" name="subject" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <label htmlFor="message">Your message</label>
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-md-left">
                    <button className="btn btn-primary mt-4 mb-4" type="submit">
                      Send
                    </button>
                  </div>
                  <div className="status"></div>
                </form>
              </section>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
