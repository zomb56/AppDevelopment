// import React from 'react';
// import './Faq.css'; 

// import Navbar from './Navbar';

// export default function Faq() {
//   const faqData = [
//     {
//       question: 'What is Our App?',
//       answer: 'Our app is a platform designed to help individuals find their dream jobs...'
//     },
//     {
//       question: ' How can I create an account?',
//       answer: ' To create an account, click on the "Sign Up" button...'
//     },
//     {
//       question: ' Can I update my profile information?',
//       answer: ' Yes, you can update your profile information at any time...'
//     },
//     {
//       question: 'How do I create an account on the job portal app?',
//       answer: 'To create an account, click on the "Sign Up" or "Register" button on the apps homepage. Fill in your details, such as name, email, and password. You may also have the option to sign up using your social media accounts.'
//     },
//     {
//       question: 'How do I search for job listings on the app?',
//       answer: 'After logging in, go to the search or job listings section. Enter keywords, location, or other filters to narrow down your search. You can also browse by category or industry.'
//     },
//     {
//       question: 'Is my personal information safe on the app?',
//       answer: 'Job portal apps take data privacy seriously. They often use encryption and security measures to protect your personal information. Read the apps privacy policy to understand how your data is handled.'
//     },
//     {
//         question:'How can I contact the support team for assistance or inquiries?',
//         answer:'You can typically find a "Contact Us" or "Support" section within the app. Use this to reach out to the apps customer support team for any questions or issues you may have.'
//     }
//   ];

//   return (
//     <>
//     <Navbar/>
//     <div className="faq-container">
//       <h1>Frequently Asked Questions</h1>
//       <div className="faq-list">
//         {faqData.map((item, index) => (
//             <div className="faq-item" key={index}>
//             <div className="question">{item.question}</div>
//             <div className="answer">{item.answer}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }


// import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import './Faq.css';

// const FAQ = () => {
//   return (
//     <>
//     <Navbar/>
//     <section>
//       <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
//       <p className="text-center mb-5">
//         Find the answers for the most frequently asked questions below
//       </p>

//       <div className="row">
//         <div className="col-md-6 col-lg-4 mb-4">
//           <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i> A simple
//             question?</h6>
//           <p>
//             <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
//             your
//             safety and
//             security. All billing information is stored on our payment processing partner.
//           </p>
//         </div>

//         <div className="col-md-6 col-lg-4 mb-4">
//           <h6 className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i> A question
//             that
//             is longer than the previous one?</h6>
//           <p>
//             <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
//             your
//             account. Once the subscription is
//             cancelled, you will not be charged next month.
//           </p>
//         </div>

//         <div className="col-md-6 col-lg-4 mb-4">
//           <h6 className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i> A simple
//             question?
//           </h6>
//           <p>
//             Currently, we only offer a monthly subscription. You can upgrade or cancel your monthly
//             account at any time with no further obligation.
//           </p>
//         </div>

//         <div className="col-md-6 col-lg-4 mb-4">
//           <h6 className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i> A simple
//             question?
//           </h6>
//           <p>
//             Yes. Go to the billing section of your dashboard and update your payment information.
//           </p>
//         </div>

//         <div className="col-md-6 col-lg-4 mb-4">
//           <h6 className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i> A simple
//             question?
//           </h6>
//           <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
//             reason.</p>
//         </div>

//         <div className="col-md-6 col-lg-4 mb-4">
//           <h6 className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i> Another
//             question that is longer than usual</h6>
//           <p>
//             Of course! We’re happy to offer a free plan to anyone who wants to try our service.
//           </p>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     </>
//   );
// };

// export default FAQ;

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Assets/css/Faq.css';

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar/>
      <section className='faq-container'>
        <h3 className="text-center mt-3 mb-3 pb-2 text-info fw-bold">FAQ</h3>
        <p className="text-center mb-5">
          Find the answers to the most frequently asked questions below
        </p>

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i>What is CarPoll?</div>
              <p><strong><u>CarPoll</u></strong> is a dynamic online platform designed for automotive enthusiasts and consumers to voice their opinions and preferences in the ever-evolving world of automobiles. Our website empowers users to engage in exciting polls and surveys related to cars, allowing them to express their views on various automotive topics and trends.</p>
            </div>

            <div className="col-md-12 col-lg-5  mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i>Do you have a newsletter?</div>
              <p><strong><u>Unfortunately no.</u></strong> We do not have a Newsletter at the moment but there are plans for one!</p>
            </div>

            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i> How can i contact you?</div>
              <p>The best way to contact us is by visiting our <strong><u>Contact Page!</u></strong></p>
            </div>

            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i> Is CarPoll Free?</div>
              <p><strong><u>Yes!</u></strong> CarPoll is completely free! We do not monetize CarPoll as it does not align with our principles.</p>
            </div>

            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i> Question 5</div>
              <p><strong><u></u>.</strong>Placeholder Text</p>
            </div>

            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i> Question 6</div>
              <p>Placeholder Text</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
