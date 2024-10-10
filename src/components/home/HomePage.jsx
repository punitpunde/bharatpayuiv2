import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
const HomePage = () => {
  const sectionsRef = useRef([]);
  const  nav = useNavigate()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Automatically set ref for each section
  const addToRefs = el => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="home-section" ref={addToRefs}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-6 text-section">
              <h1 className="main-heading">Secure & Fast Payments</h1>
              <p className="sub-heading">
                Make transactions quickly and securely with our seamless UPI integration.
              </p>
              <Link to="/get-started" className="btn btn-primary cta-btn">
                Get Started
              </Link>
            </div>
            <div className="col-md-6">
              <div className="image-container">
                <img
                  src="/images/secure-payment.avif"
                  alt="Payment Illustration"
                  className="animated-image shadow-sm p-3 mb-5 bg-white rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5 animated-image mt-0" ref={addToRefs}>
        <div className="container text-center">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 feature-box">
              <img src="/images/secure.jpg" alt="Secure" className="feature-icon w-75" />
              <h3>Secure Transactions</h3>
              <p>Your transactions are protected with top-notch security protocols.</p>
            </div>
            <div className="col-md-4 feature-box">
              <img src="/images/fast-pay.jpg" alt="Fast" className="feature-icon w-75"  />
              <h3>Quick Payments</h3>
              <p>Experience lightning-fast payments with no delays or errors.</p>
            </div>
            <div className="col-md-4 feature-box">
              <img src="/images/easy.jpg" alt="Easy" className="feature-icon w-75" />
              <h3>Easy to Use</h3>
              <p>An intuitive user interface ensures effortless transactions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section bg-light py-5" ref={addToRefs}>
        <div className="container text-center">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <img src="/images/Punit.jpg" alt="User 1" className="testimonial-img rounded-circle" />
                <p>"This is the fastest payment app I've ever used!"</p>
                <h5>— Punit P.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <img src="/images/Punit_Punde.png" alt="User 2" className="testimonial-img rounded-circle" />
                <p>"I love how secure my transactions are. Highly recommend!"</p>
                <h5>— Raj K.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <img src="/images/Katrina.jpg" alt="User 3" className="testimonial-img rounded-circle" />
                <p>"Super easy to use. Even my parents can manage their payments!"</p>
                <h5>— Katrina K.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section py-5 text-center" ref={addToRefs}>
        <div className="container">
          <h2 className="cta-heading">Ready to Experience the Best Payment App?</h2>
          <a href="/get-started" className="btn btn-lg btn-success me-4">Join Now</a>
          <a href="/learn-more" className="btn btn-lg btn-outline-primary ml-3 text-white">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;