import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./DepartmentsPage.css";
import orthopedicsImg from "../../assets/images/orthopedics.jpg";
import pediatricsImg from "../../assets/images/pediatrics.jpg";
import dermatologyImg from "../../assets/images/dermatology.jpg";
import ophthalmologyImg from "../../assets/images/ophthalmology.jpg";
import dentistryImg from "../../assets/images/dentistry.jpg";
import cardiologyImg from "../../assets/images/cardiology.jpg";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments([
      {
        id: 1,
        name: "Orthopedics",
        description: "Bone and joint care",
        image: orthopedicsImg,
      },
      {
        id: 2,
        name: "Pediatrics",
        description: "Child health and wellness",
        image: pediatricsImg,
      },
      {
        id: 3,
        name: "Dermatology",
        description: "Skin treatments and care",
        image: dermatologyImg,
      },
      {
        id: 4,
        name: "Ophthalmology",
        description: "Eye care and vision",
        image: ophthalmologyImg,
      },
      {
        id: 5,
        name: "Dentistry",
        description: "Dental and oral health",
        image: dentistryImg,
      },
      {
        id: 6,
        name: "Cardiology",
        description: "Heart and vascular health",
        image: cardiologyImg,
      },
    ]);
  }, []);

  return (
    <section className="department-page">
      <div className="departments-container">
        <h2 className="section-title">Our Departments</h2>
        <Container>
          <Row>
            {departments.map((dep) => (
              <Col md={4} key={dep.id} className="mb-4">
                <Card className="department-card shadow-lg">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={dep.image}
                      className="department-img"
                      alt={dep.name}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{dep.name}</Card.Title>
                    <Card.Text>{dep.description}</Card.Text>
                    <Link
                      to={`/departments/${dep.name}`}
                      className="btn-department"
                    >
                      View Doctors
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}
