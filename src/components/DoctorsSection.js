import React from 'react';

function DoctorsSection() {
  return (
    <section id="doctors" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Doctors Specialize in You</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Dr. John Smith" />
              <div className="card-body">
                <h5 className="card-title">Dr. John Smith</h5>
                <p>Specialist in Cardiology</p>
                <p>Dr. Smith is known for his expertise in heart-related diseases and surgeries.</p>
                <a href="#book" className="btn btn-primary">Book an Appointment</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Dr. Sarah Johnson" />
              <div className="card-body">
                <h5 className="card-title">Dr. Sarah Johnson</h5>
                <p>Specialist in Neurology</p>
                <p>Dr. Johnson is an expert in treating nervous system disorders.</p>
                <a href="#book" className="btn btn-primary">Book an Appointment</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Dr. Emily Davis" />
              <div className="card-body">
                <h5 className="card-title">Dr. Emily Davis</h5>
                <p>Specialist in Ophthalmology</p>
                <p>Dr. Davis has a long history of treating complex eye conditions.</p>
                <a href="#book" className="btn btn-primary">Book an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
