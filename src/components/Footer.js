import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>We are a leading medical service provider offering a wide range of healthcare solutions for all age groups.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-white">Our Services</a></li>
              <li><a href="#doctors" className="text-white">Doctors</a></li>
              <li><a href="#pricing" className="text-white">Pricing</a></li>
              <li><a href="#testimonials" className="text-white">Testimonials</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>Email: info@medicalservice.com</p>
            <p>Phone: +123 456 789</p>
            <p>Address: 123 Medical Street, City, Country</p>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <a  className="text-white me-2"><i className="fab fa-facebook"></i> Facebook</a><br/>
            <a  className="text-white me-2"><i className="fab fa-twitter"></i> Twitter</a><br/>
            <a  className="text-white"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2024 Medical Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
