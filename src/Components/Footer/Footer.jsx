import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5">
          {/* About */}
          <Col md={4} sm={12} className="mb-4">
            <h4 className="footer-title">ProHealth Hospital</h4>
            <p>
              Providing quality healthcare with experienced medical professionals.
              We care for your health and well-being with a holistic approach.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={12} className="mb-4">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#departments">Departments</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} sm={12} className="mb-4">
            <h5 className="footer-subtitle">Contact Us</h5>
            <p>123 Health Street, Alexandria, Egypt</p>
            <p>Email: info@prohealth.com</p>
            <p>Phone: +20 123 456 789</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center pt-3 border-top">
            <p>&copy; {new Date().getFullYear()} ProHealth Hospital. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
