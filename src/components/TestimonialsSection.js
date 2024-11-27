import React from 'react';

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center p-4">
              <p>"Amazing service and care!"</p>
              <h5>- Jane Doe</h5>
              <span>Patient</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4">
              <p>"Highly professional and friendly staff!"</p>
              <h5>- John Smith</h5>
              <span>Patient</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4">
              <p>"They helped me recover quickly!"</p>
              <h5>- Emily Davis</h5>
              <span>Patient</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
