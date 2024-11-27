import React from 'react';

function Header() {
  return (
    <header className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Online Appointment</h1>
            <p>We provide fast and easy access to medical services for all your health needs.</p>
            <a href="#join-us" className="btn btn-primary">Register Now</a>
            <a href="#services" className="btn btn-outline-secondary ms-2">Learn More</a>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500x300" alt="Online Appointment" className="img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
