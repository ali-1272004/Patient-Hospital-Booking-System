import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./DepartmentsPage.css";
import orthopedicsImg from "../../assets/images/orthopedics.jpg";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  // Mock data for now
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
        image: orthopedicsImg,
      },
      {
        id: 3,
        name: "Dermatology",
        description: "Skin treatments and care",
        image: orthopedicsImg,
      },
      {
        id: 4,
        name: "Ophthalmology",
        description: "Eye care and vision",
        image: orthopedicsImg,
      },
      {
        id: 5,
        name: "Dentistry",
        description: "Dental and oral health",
        image: orthopedicsImg,
      },
    ]);
  }, []);

  return (
    <div className="departments-container">
      <h2 className="section-title">Our Departments</h2>
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
                  to={`/departments/${encodeURIComponent(dep.name)}`}
                  className="btn-department"
                >
                  View Doctors
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
