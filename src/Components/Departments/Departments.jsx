import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Departments.css';
import { FaAmbulance, FaBaby, FaFemale, FaHeartbeat, FaBrain, FaUserMd } from 'react-icons/fa';

const Departments = () => {
  const departments = [
    { title: "Emergency Department", icon: FaAmbulance },
    { title: "Pediatric Department", icon: FaBaby },
    { title: "Obstetrics and Gynecology Department", icon: FaFemale },
    { title: "Cardiology Department", icon: FaHeartbeat },
    { title: "Neurology Department", icon: FaBrain },
    { title: "Psychiatry Department", icon: FaUserMd }
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <section className="home-departments-section" id="departments">
      <Container>
        <Row>
          <Col className="text-center mb-5">
          <p className="home-departments-subtitle">For Your Health</p>
            <h2 className="home-departments-section-title">OUR DEPARTMENTS</h2>
          </Col>
        </Row>

        <Row className="home-departments-row">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-4">
                <div
                  ref={el => (cardsRef.current[index] = el)}
                  className="home-department-card fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="home-department-icon">
                    <Icon className="dept-svg" />
                  </div>
                  <div className="home-tit_card">
                    <h4 className="home-department-title">{dept.title}</h4>
                    <a href="#" className="home-department-link">Learn More →</a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Departments;
