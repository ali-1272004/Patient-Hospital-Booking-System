import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <Container>
        <Row
          className="justify-content-start align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <Col lg={6}>
            <div className="hero-content">
              <h1 className="hero-title">
                Compassionate care, exceptional results
              </h1>
              <p className="hero-subtitle">
                Our team of experienced doctors and health professionals are
                committed to providing the best and personalized attention to
                our patients.
              </p>
              <div className="hero-buttons">
                <Link to="/departments" className="btn-primary-custom">
                  Book Appointment
                </Link>
                <Link to="/" className="btn-secondary-custom">
                  Learn More
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
