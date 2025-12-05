import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col >
          
            <div className="about-content">
              <h2 className="section-title">ABOUT US</h2>
              <p className="about-text">
                ProHealth is a team of experienced medical professionals dedicated to providing 
                top-quality healthcare services. We believe in a holistic approach to healthcare 
                that focuses on treating the whole person, not just the illness or symptoms.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="feature-icon">✓</i>
                  <span>Experienced medical professionals</span>
                </div>
                <div className="feature-item">
                  <i className="feature-icon">✓</i>
                  <span>Personalized patient care</span>
                </div>
                <div className="feature-item">
                  <i className="feature-icon">✓</i>
                  <span>Holistic healthcare approach</span>
                </div>
                <div className="feature-item">
                  <i className="feature-icon">✓</i>
                  <span>State-of-the-art facilities</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;