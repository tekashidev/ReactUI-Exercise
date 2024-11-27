import React from 'react';

function PricingSection() {
  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Pricing</h2>
        <p className="text-center mb-5">Choose the perfect plan that suits your medical needs.</p>
        <div className="row">
          {/* Free Plan */}
          <div className="col-md-4">
            <div className="card text-center mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Free</h3>
                <p className="mb-0">$0 / month</p>
                <i className="fas fa-user fa-3x mt-3"></i> {/* Ikona użytkownika */}
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Basic medical consultations</li>
                  <li>Email support</li>
                  <li>Access to general information</li>
                </ul>
                <a href="#contact" className="btn btn-primary mb-3">Sign Up for Free</a>
                <div className="text-start">
                  <h6 className="text-muted">Includes:</h6>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success"></i> Free email support</li>
                    <li><i className="fas fa-check text-success"></i> Access to general health articles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-md-4">
            <div className="card text-center mb-4">
              <div className="card-header bg-info text-white">
                <h3 className="mb-0">Standard</h3>
                <p className="mb-0">$19 / month</p>
                <i className="fas fa-user-md fa-3x mt-3"></i> {/* Ikona lekarza */}
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Unlimited appointments</li>
                  <li>Personalized treatment plan</li>
                  <li>Access to all specialists</li>
                </ul>
                <a href="#contact" className="btn btn-info mb-3">Get Started</a>
                <div className="text-start">
                  <h6 className="text-muted">Includes:</h6>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success"></i> Unlimited appointments</li>
                    <li><i className="fas fa-check text-success"></i> Personalized treatment plan</li>
                    <li><i className="fas fa-check text-success"></i> 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-4">
            <div className="card text-center mb-4">
              <div className="card-header bg-warning text-white">
                <h3 className="mb-0">Premium</h3>
                <p className="mb-0">$49 / month</p>
                <i className="fas fa-stethoscope fa-3x mt-3"></i> {/* Ikona stetoskopu */}
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Priority scheduling</li>
                  <li>Home visits by doctors</li>
                  <li>Personal health manager</li>
                </ul>
                <a href="#contact" className="btn btn-warning mb-3">Get Premium</a>
                <div className="text-start">
                  <h6 className="text-muted">Includes:</h6>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success"></i> Home visits</li>
                    <li><i className="fas fa-check text-success"></i> Priority scheduling</li>
                    <li><i className="fas fa-check text-success"></i> Annual health checkups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
