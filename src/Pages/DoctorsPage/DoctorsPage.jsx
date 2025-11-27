import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./DoctorsPage.css";
import doctorImg from "../../assets/images/doctor.jpg"; // placeholder doctor image

export default function DoctorsPage() {
  // route param is the department slug, e.g. /departments/orthopedics
  const params = useParams();
  const departmentParam = params.department || params.departmentId || "";
  const departmentName = departmentParam
    ? decodeURIComponent(departmentParam)
    : "";
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const doctorsData = {
      Orthopedics: [
        {
          id: 101,
          name: "Dr. Ahmed",
          specialty: "Orthopedic Surgeon",
          image: doctorImg,
        },
        {
          id: 102,
          name: "Dr. Sara",
          specialty: "Joint Specialist",
          image: doctorImg,
        },
      ],
      Pediatrics: [
        {
          id: 201,
          name: "Dr. Mona",
          specialty: "Pediatrician",
          image: doctorImg,
        },
      ],
      Dermatology: [
        {
          id: 301,
          name: "Dr. Karim",
          specialty: "Dermatologist",
          image: doctorImg,
        },
      ],
      Ophthalmology: [
        {
          id: 401,
          name: "Dr. Youssef",
          specialty: "Ophthalmologist",
          image: doctorImg,
        },
      ],
      Dentistry: [
        { id: 501, name: "Dr. Laila", specialty: "Dentist", image: doctorImg },
      ],
    };

    setDoctors(doctorsData[departmentName] || []);
  }, [departmentName]);
  return (
    <div className="doctors-container">
      <h2 className="section-title">Doctors in {departmentName || ""}</h2>
      <Row>
        {doctors.map((doc) => (
          <Col md={4} key={doc.id} className="mb-4">
            <Card className="doctor-card shadow-lg">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={doc.image}
                  className="doctor-img"
                  alt={doc.name}
                />
              </div>
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Card.Text>{doc.specialty}</Card.Text>
                <Link
                  to={`/departments/${encodeURIComponent(departmentName)}/${
                    doc.id
                  }`}
                  className="btn-book"
                >
                  Book Appointment
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
