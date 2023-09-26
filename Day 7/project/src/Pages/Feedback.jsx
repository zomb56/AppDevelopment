import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Assets/css/Feedback.css';

class Feedback extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Feedback Submitted!'); 
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='main'>
          <Sidebar/>
        <section className="container-fluid feedback-container">
          <div className="row">
            <div className="col-md-3">
              <div className="position-fixed"> 
              </div>
            </div>
            <div className="col-md-9 offset-md-2  "> 
              <section className="mb-4">
                <h2 className="h1-responsive text-info fw-bold text-center my-4">Feedback</h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Do you have any feedback? What could we improve upon?
                </p>
                <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example6">Your feedback</label>
                        <textarea class="form-control" id="form4Example6" rows="4">
                        </textarea>
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
        </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Feedback;
