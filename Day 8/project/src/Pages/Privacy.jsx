// import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// // import './Faq.css';

// const Privacy = () => {
//   return (
//     <>
//       <Navbar />
//       <div className='main'>
//         <Sidebar/>
//       <section className='faq-container'>
//         <h3 className=" text-center mt-3 mb-3 pb-2 text-primary fw-bold">FAQ</h3>
//         <p className="text-center mb-5">
//           Find the answers to the most frequently asked questions below
//         </p>

//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-lg-5 mb-4 mx-auto">
//               <div className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i>What is CarPoll</div>
//               <p><strong><u>CarPoll</u></strong> is a dynamic online platform designed for automotive enthusiasts and consumers to voice their opinions and preferences in the ever-evolving world of automobiles. Our website empowers users to engage in exciting polls and surveys related to cars, allowing them to express their views on various automotive topics and trends.</p>
//             </div>

//             <div className="col-md-12 col-lg-5  mb-4 mx-auto">
//               <div className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i>Do you have a newsletter?</div>
//               <p><strong><u>Unfortunately no.</u></strong> We do not have a Newsletter at the moment but there are plans for one!</p>
//             </div>

//             <div className="col-md-12 col-lg-5 mb-4 mx-auto">
//               <div className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i> How can i contact you?</div>
//               <p>The best way to contact us is by visiting our <strong><u>Contact Page!</u></strong></p>
//             </div>

//             <div className="col-md-12 col-lg-5 mb-4 mx-auto">
//               <div className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i> Is CarPoll Free?</div>
//               <p><strong><u>Yes!</u></strong> CarPoll is completely free! We do not monetize CarPoll as it does not align with our principles.</p>
//             </div>

//             <div className="col-md-12 col-lg-5 mb-4 mx-auto">
//               <div className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i> Question 5</div>
//               <p><strong><u></u>.</strong>Placeholder Text</p>
//             </div>

//             <div className="col-md-12 col-lg-5 mb-4 mx-auto">
//               <div className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i> Question 6</div>
//               <p>Placeholder Text</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Privacy;

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Assets/css/Privacy.css';

class Privacy extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='main'>
      <Sidebar/>
      <div className='privacy-container'>
        <h1 className='text-center mt-3 mb-3 pb-2 text-info fw-bold mb-5'>Privacy Policy</h1>
        <p className='mb-5'>
          <strong className='mx-5'>Last Updated: 26 September, 2023</strong>
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>1. Introduction</div></h2>
        <p className='mx-5'>
          Welcome to CarPoll. At CarPoll, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information. By accessing or using our website or application, you consent to the practices described in this Privacy Policy.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>2. Information We Collect</div></h2>
        <p className='mx-5'>
          When you sign up for CarPoll, we may collect your name, email address, phone number, and other information you provide during registration.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>3. How We Use Your Information</div></h2>
        <p className='mx-5'>
          We analyze user data to enhance our website and services, ensuring a better experience.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>4. Data Security</div></h2>
        <p className='mx-5'>
          We take reasonable measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no online platform is entirely secure, and we cannot guarantee absolute security.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>5. Your Choices</div></h2>
        <p className='mx-5'>
          You can review and update your account information by logging in to CarPoll.
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>6. Changes To Privacy Policy</div></h2>
        <p className='mx-5'>
          We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website..
        </p>
        <h2><div className="mb-3 text-primary mx-4"><i className="far fa-paper-plane text-primary pe-2 mx-2"></i>7. Contact Information</div></h2>
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

export default Privacy;


// import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import './Privacy.css';

// function Privacy() {
  //   return (
    //     <>
    //     <div className="terms-container">
    //       <h1 className="header">JobSymphony</h1>
    //       <h2 className="subheader"></h2>

//       <section className="section">
//         <h3 className="section-title">Privacy Policy        :</h3>
//         <p>
//         This Privacy Policy applies to the online services offered by JobSymphony at jobsymphony.com, its subdomains, and JobSymphony's mobile app. These are collectively referred to as "Services."
//         </p>
//       </section>

//       <section className="section">
//         <h3 className="section-title">Overview:</h3>
//         <p className="section-content">
//         At JobSymphony, we value your privacy and are committed to providing a safe and secure user experience. This Privacy Policy outlines our data collection and usage practices. By using our Services, you agree to the policies and practices described in this statement. Your data may be stored and processed on our servers, which could be located inside or outside your country of residence. Our Services may contain links to other websites over which we have no control. We are not responsible for the privacy policies or practices of third-party websites. We encourage you to review the privacy policies of these websites to understand how they collect, use, and share your information. This Privacy Policy applies solely to the information collected on jobsymphony.com and its subdomains.        </p>

//       </section>

//       <section className="section">
//         <h3 className="section-title">Collection of Information        </h3>
//         <h3 className="section-title">1. Personal Information Provided by You:        </h3>
//         <p className="section-content">
//         In certain areas of our Services, we may request personal information such as your name, address, email address, telephone number, contact information, billing information, education details, work details, and any other information from which your identity is discernible. We may also collect demographic information, such as your ZIP code, age, preferences, and gender.        </p>

//       </section>
//       <section className="section">
//         <h3 className="section-title">2. Information Collected When You Use Third-Party Services: </h3>
//         <p className="section-content">
//         To enhance your experience and provide our service, we may require you to provide certain personally identifiable information, including but not limited to your username. This information will be used as described in this Privacy Policy. We may use third-party services that collect information used to identify you. Please refer to the privacy policies of these services for details.        </p>

//       </section>
//       <section className="section">
//         <h3 className="section-title">3. Information About Your Contacts: </h3>
//         <p className="section-content">
//         When you choose to share content from JobSymphony with friends through our sharing features or sign in using a third-party account, we may collect, process, and store information about your contacts associated with that account.        </p>
 
//       </section>
//       <section className="section">
//         <h3 className="section-title">4. Information Collected Through Use of Service: 
//         </h3>
//         <p className="section-content">
//         We gather information about your use of our Services, such as the areas you visit and the features you access. Additionally, we may collect information about your computer hardware and software, including your IP address, browser type, domain names, access times, and referring website addresses.        </p>

//       </section>


//       <section className="section">
//         <h3 className="section-title">Editing Information
//         </h3>
//         <p className="section-content">
//         You can edit your personal information and profile details through your account settings. Some data, such as applications you have made, may not be editable.        </p>

//       </section>
//       <section className="section">
//         <h3 className="section-title">Downloading Information
//         </h3>
//         <p className="section-content">
//         For assistance with downloading your information, please contact our customer support team at +91 9489183456 .        </p>

//       </section>
//       <section className="section">
//         <h3 className="section-title"> Communication Policy
//         </h3>
//         <p className="section-content">
//         Opt-In: Users must verify their email address by clicking on a verification link sent to their email to receive our newsletters and marketing communications.        </p>
//         <p className="section-content">
//         Opt-Out: Every email we send contains an 'Unsubscribe' link to stop receiving newsletters and promotional content. Unsubscriptions may take up to 7 days to process.        </p>
//       </section>
//       <section className="section">
//         <h3 className="section-title">Children</h3>
//         <p className="section-content">
//         JobSymphony is not intended for children under 13 years of age. Users under 13 should only use the website under parental guidance.        </p>
//       </section>
//       <section className="section">
//         <h3 className="section-title">Changes to this Privacy Policy
//         </h3>
//         <p className="section-content">
//         We may update this Privacy Policy from time to time. Significant changes will be announced on our Services, and notifications may be sent to your provided email address. Please refer to this page to stay informed about our latest Privacy Policy.           </p>
//       </section>
//       <section className="section">
//         <h3 className="section-title">Grievance Officer
//         </h3>
//         <p className="section-content">
//         Harish
//         </p>
//         <p className="section-content">
//         CTO
//         </p>
//         <p className="section-content">
//         privacy@jobsymphony.com
//         </p>
//       </section>
//     </div>
//     </>
//   );
// }

// export default Privacy;
