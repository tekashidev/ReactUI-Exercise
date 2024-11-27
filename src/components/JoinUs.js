import React from 'react';

function JoinUs() {
  return (
    <section id="join-us" className="py-5 text-center">
      <div className="container">
        <h2>Join Us</h2>
        <p>Sign up for our newsletter to stay updated on our services and offers.</p>
        <form className="d-flex justify-content-center">
          <input type="email" className="form-control me-2" placeholder="Enter your email" style={{ maxWidth: '400px' }} />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default JoinUs;
