import React from 'react';

function ActivitySection() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Activity</h2>
        <p className="text-center">We offer a wide range of medical services to help you live a healthier life.</p>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="card p-4">
              <h4>Emergency Care</h4>
              <p>We provide emergency care 24/7 to ensure you're taken care of at all times.</p>
              <a href="#learn-more" className="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card p-4">
              <h4>Medical Checkup</h4>
              <p>Regular checkups to ensure your health is always in top shape.</p>
              <a href="#learn-more" className="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card p-4">
              <h4>Patient Services</h4>
              <p>We offer comprehensive services to take care of all your health needs.</p>
              <a href="#learn-more" className="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivitySection;
