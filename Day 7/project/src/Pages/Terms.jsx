import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Assets/css/Terms.css';
class Terms extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='main'>
      <Sidebar/>
      <div className='terms-container'>
        <h1 className='text-center mt-3 mb-3 pb-2 text-info fw-bold mb-5'>Terms and Conditions</h1>
        {/* <p className='mb-5'>
          <strong className='mx-5'>Last Updated: 26 September, 2023</strong>
        </p> */}
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>1. Acceptance of Terms and Conditions</div></h2>
        <p className='mx-5'>
        By using CarPolland related services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use the CarPoll.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>2. Service Description</div></h2>
        <p className='mx-5'>
        CarPoll provides a platform that enables users to vote for their favorite cars.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>3.  Eligibility</div></h2>
        <p className='mx-5'>
        You must be at least 13 years old to use the Service. By using CarPoll, you represent and warrant that you are of legal age and have the legal capacity to enter into this agreement.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>4. User Accounts</div></h2>
        <p className='mx-5'>
        a. Registration: To use certain features of the App, you may be required to register for an account. You agree to provide accurate and complete information during the registration process.
        </p>
        <p className='mx-5'>
        b. Account Security: You are responsible for maintaining the security of your account and password. You agree not to share your account credentials with others.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>5. Your Choices</div></h2>
        <p className='mx-5'>
          Welcome to CarPoll. At CarPoll, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information. By accessing or using our website or application, you consent to the practices described in this Privacy Policy.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>6. User Conduct</div></h2>
        <p className='mx-5'>
        a. You agree to use the Service in compliance with all applicable laws and regulations.
        </p>
        <p className='mx-5'>
        b. You shall not use the Service for any unlawful, fraudulent, or harmful purposes.
        </p>
        <p className='mx-5'>
        c. You shall not harass, threaten, or harm other users of the Service.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>7. Privacy Policy</div></h2>
        <p className='mx-5'>
        CarPoll's <a href='/Privacy'>Privacy Policy</a> governs the collection, use, and disclosure of personal information. By using the Service, you consent to the practices described in the Privacy Policy.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>8. Changes To Terms And Conditions</div></h2>
        <p className='mx-5'>
        CarPoll reserves the right to modify these Terms and Conditions at any time. Updated Terms and Conditions will be posted in the App, and your continued use of the Service will constitute acceptance of the updated terms.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>9. Contact Information</div></h2>
        <p className='mx-5 mb-5'>
        If you have any questions or concerns regarding these Terms and Conditions, please <a href='/Contact'>Contact Us</a>.
        </p>
      </div>
      </div>  
      <Footer/>
      </>
    );
  }
}

export default Terms;