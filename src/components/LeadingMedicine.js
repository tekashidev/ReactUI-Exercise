import React from 'react';

function LeadingMedicine() {
  return (
    <section id="leading-medicine" className="py-5" style={{ backgroundColor: '#ffe5e0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Leading Medicine</h2>
            <p>We provide advanced medical care using the latest innovations and technologies to help you stay healthy.</p>
            <p>Our experienced medical team is here to help you with all your health concerns. We offer specialized care in multiple areas such as cardiology, neurology, and general medicine.</p>
            <a href="#services" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500x300" alt="Leading Medicine" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadingMedicine;
