import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./DoctorsPage.css";
import doctorImg from "../../assets/images/doctor.jpg";
import orthopedicsDeptImg from "../../assets/images/orthopedics-department2.jpg";

// export default function DoctorsPage() {

//   const params = useParams();
//   const departmentParam = params.department || params.departmentId || "";
//   const departmentName = departmentParam || "";
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const doctorsData = {
//   Orthopedics: [
//     { id: 101, name: "Dr. Ahmed", specialty: "Orthopedic Surgeon", image: doctorImg },
//     { id: 102, name: "Dr. Sara", specialty: "Joint Specialist", image: doctorImg },
//     { id: 103, name: "Dr. Khaled", specialty: "Spine Consultant", image: doctorImg },
//     // { id: 104, name: "Dr. Noor", specialty: "Sports Injury Specialist", image: doctorImg },
//     // { id: 105, name: "Dr. Hany", specialty: "Trauma & Fracture Expert", image: doctorImg },
//   ],

//   Pediatrics: [
//     { id: 201, name: "Dr. Mona", specialty: "Pediatrician", image: doctorImg },
//     { id: 202, name: "Dr. Rania", specialty: "Neonatology Specialist", image: doctorImg },
//     { id: 203, name: "Dr. Omar", specialty: "Child Nutrition Consultant", image: doctorImg },
//     { id: 204, name: "Dr. Salma", specialty: "Pediatric Cardiologist", image: doctorImg },
//   ],

//   Dermatology: [
//     { id: 301, name: "Dr. Karim", specialty: "Dermatologist", image: doctorImg },
//     { id: 302, name: "Dr. Heba", specialty: "Cosmetic Dermatology Specialist", image: doctorImg },
//     { id: 303, name: "Dr. Tarek", specialty: "Skin Allergy Consultant", image: doctorImg },
//     { id: 304, name: "Dr. Dina", specialty: "Laser Treatment Expert", image: doctorImg },
//   ],

//   Ophthalmology: [
//     { id: 401, name: "Dr. Youssef", specialty: "Ophthalmologist", image: doctorImg },
//     { id: 402, name: "Dr. Mariam", specialty: "Retina Specialist", image: doctorImg },
//     { id: 403, name: "Dr. Samir", specialty: "Glaucoma Consultant", image: doctorImg },
//     { id: 404, name: "Dr. Layla", specialty: "Pediatric Ophthalmologist", image: doctorImg },
//   ],

//   Dentistry: [
//     { id: 501, name: "Dr. Laila", specialty: "Dentist", image: doctorImg },
//     { id: 502, name: "Dr. Amr", specialty: "Orthodontist", image: doctorImg },
//     { id: 503, name: "Dr. Nada", specialty: "Endodontics Specialist", image: doctorImg },
//     { id: 504, name: "Dr. Hassan", specialty: "Oral Surgeon", image: doctorImg },
//     { id: 505, name: "Dr. Reem", specialty: "Pediatric Dentist", image: doctorImg },
//   ],
// };

//     setDoctors(doctorsData[departmentName] || []);
//   }, [departmentName]);
//   return (
//     <div className="doctors-container">
//       <h2 className="section-title">Doctors in {departmentName || ""}</h2>
//       <Container>
//       <Row>
//         {doctors.map((doc) => (
//           <Col md={4} key={doc.id} className="mb-4">
//             <Card className="doctor-card shadow-lg">
//               <div className="doctor-image-container">
//                 <Card.Img
//                   variant="top"
//                   src={doc.image}
//                   className="doctor-img"
//                   alt={doc.name}
//                 />
//               </div>
//               <Card.Body>
//                 <Card.Title>{doc.name}</Card.Title>
//                 <Card.Text>{doc.specialty}</Card.Text>
//                 <Link
//                   to={`/departments/${departmentName}/${doc.id}`}
//                   className="btn-book"
//                 >
//                   Book Appointment
//                 </Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       </Container>
//     </div>
//   );
// }
const departmentsData = {
  Orthopedics: {
    info: {
      title: "Orthopedics Department",
      description:
        "Our Orthopedics department specializes in bone, joint, and spine care with advanced surgical techniques. We are leaders in sports injury treatment and trauma recovery.",
      image: orthopedicsDeptImg,
      highlights: [
        "Advanced diagnostic equipment",
        "Sports injury treatments",
        "Spine and joint surgery expertise",
      ],
    },
    doctors: [
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
      {
        id: 103,
        name: "Dr. Khaled",
        specialty: "Spine Consultant",
        image: doctorImg,
      },
      {
        id: 104,
        name: "Dr. Noor",
        specialty: "Sports Injury Specialist",
        image: doctorImg,
      },
      {
        id: 105,
        name: "Dr. Hany",
        specialty: "Trauma & Fracture Expert",
        image: doctorImg,
      },
    ],
  },

  Pediatrics: {
    info: {
      title: "Pediatrics Department",
      description:
        "Our Pediatrics department provides compassionate care for children, from newborns to adolescents. We combine medical expertise with a child‑friendly environment.",
      image: "../../assets/images/pediatrics.jpg",
      highlights: [
        "Neonatal intensive care",
        "Child nutrition programs",
        "Specialized pediatric cardiology",
      ],
    },
    doctors: [
      {
        id: 201,
        name: "Dr. Mona",
        specialty: "Pediatrician",
        image: doctorImg,
      },
      {
        id: 202,
        name: "Dr. Rania",
        specialty: "Neonatology Specialist",
        image: doctorImg,
      },
      {
        id: 203,
        name: "Dr. Omar",
        specialty: "Child Nutrition Consultant",
        image: doctorImg,
      },
      {
        id: 204,
        name: "Dr. Salma",
        specialty: "Pediatric Cardiologist",
        image: doctorImg,
      },
    ],
  },

  Dermatology: {
    info: {
      title: "Dermatology Department",
      description:
        "Our Dermatology department offers comprehensive skin care, from cosmetic treatments to advanced dermatological procedures. We focus on both aesthetics and health.",
      image: "../../assets/images/dermatology.jpg",
      highlights: [
        "Cosmetic dermatology expertise",
        "Laser treatment technology",
        "Skin allergy management",
      ],
    },
    doctors: [
      {
        id: 301,
        name: "Dr. Karim",
        specialty: "Dermatologist",
        image: doctorImg,
      },
      {
        id: 302,
        name: "Dr. Heba",
        specialty: "Cosmetic Dermatology Specialist",
        image: doctorImg,
      },
      {
        id: 303,
        name: "Dr. Tarek",
        specialty: "Skin Allergy Consultant",
        image: doctorImg,
      },
      {
        id: 304,
        name: "Dr. Dina",
        specialty: "Laser Treatment Expert",
        image: doctorImg,
      },
    ],
  },

  Ophthalmology: {
    info: {
      title: "Ophthalmology Department",
      description:
        "Our Ophthalmology department provides world‑class eye care, from routine checkups to complex surgeries. We are pioneers in retina and glaucoma treatments.",
      image: "../../assets/images/ophthalmology.jpg",
      highlights: [
        "Retina and glaucoma specialists",
        "Advanced eye surgery",
        "Pediatric ophthalmology care",
      ],
    },
    doctors: [
      {
        id: 401,
        name: "Dr. Youssef",
        specialty: "Ophthalmologist",
        image: doctorImg,
      },
      {
        id: 402,
        name: "Dr. Mariam",
        specialty: "Retina Specialist",
        image: doctorImg,
      },
      {
        id: 403,
        name: "Dr. Samir",
        specialty: "Glaucoma Consultant",
        image: doctorImg,
      },
      {
        id: 404,
        name: "Dr. Layla",
        specialty: "Pediatric Ophthalmologist",
        image: doctorImg,
      },
    ],
  },

  Dentistry: {
    info: {
      title: "Dentistry Department",
      description:
        "Our Dentistry department provides comprehensive oral health care, from routine checkups to advanced surgeries. We emphasize painless treatments and modern orthodontics.",
      image: "../../assets/images/dentistry.jpg",
      highlights: [
        "Orthodontics and cosmetic dentistry",
        "Pediatric dental care",
        "Advanced oral surgery",
      ],
    },
    doctors: [
      { id: 501, name: "Dr. Laila", specialty: "Dentist", image: doctorImg },
      { id: 502, name: "Dr. Amr", specialty: "Orthodontist", image: doctorImg },
      {
        id: 503,
        name: "Dr. Nada",
        specialty: "Endodontics Specialist",
        image: doctorImg,
      },
      {
        id: 504,
        name: "Dr. Hassan",
        specialty: "Oral Surgeon",
        image: doctorImg,
      },
      {
        id: 505,
        name: "Dr. Reem",
        specialty: "Pediatric Dentist",
        image: doctorImg,
      },
    ],
  },

  Cardiology: {
    info: {
      title: "Cardiology Department",
      description:
        "Our Cardiology department is dedicated to heart health, offering advanced diagnostics, interventional procedures, and preventive care. We are recognized for excellence in treating complex cardiovascular conditions.",
      image: "../../assets/images/cardiology.jpg",
      highlights: [
        "State‑of‑the‑art cardiac catheterization lab",
        "Expertise in interventional cardiology",
        "Comprehensive preventive heart care programs",
      ],
    },
    doctors: [
      {
        id: 601,
        name: "Dr. Sameh",
        specialty: "Cardiologist",
        image: doctorImg,
      },
      {
        id: 602,
        name: "Dr. Hoda",
        specialty: "Interventional Cardiologist",
        image: doctorImg,
      },
      {
        id: 603,
        name: "Dr. Fady",
        specialty: "Electrophysiology Specialist",
        image: doctorImg,
      },
      {
        id: 604,
        name: "Dr. Nour",
        specialty: "Heart Failure Consultant",
        image: doctorImg,
      },
      {
        id: 605,
        name: "Dr. Yara",
        specialty: "Preventive Cardiology Specialist",
        image: doctorImg,
      },
    ],
  },
};
export default function DoctorsPage() {
  const params = useParams();
  const departmentName = params.department || params.departmentId || "";
  const [departmentInfo, setDepartmentInfo] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (departmentsData[departmentName]) {
      const department = departmentsData[departmentName];
      setDepartmentInfo(department.info);
      setDoctors(department.doctors);
    } else {
      setDepartmentInfo(null);
      setDoctors([]);
    }
  }, [departmentName]);

  return (
    <>
      {departmentInfo && (
        // <div
        //   className="department-info mb-4"
        //   style={{ backgroundImage: `url(${departmentInfo.image})` }}
        // >
        //   <div className="department-info-overlay">
        //     <div className="department-info-text">
        //       <h3>{departmentInfo.title}</h3>
        //       <p>{departmentInfo.description}</p>
        //       <ul>
        //         {departmentInfo.highlights.map((h, i) => (
        //           <li key={i}>✔ {h}</li>
        //         ))}
        //       </ul>
        //     </div>
        //   </div>
        // </div>
        <div
          className="department-info mb-4"
          style={{ backgroundImage: `url(${departmentInfo.image})` }}
        >
          <div className="department-info-overlay">
            <div className="department-info-text">
              <h3>{departmentInfo.title}</h3>
              <p>{departmentInfo.description}</p>

              {/* Quick Stats Badges */}
              
              <div className="department-stats">
                <div className="stat-card">🩺 20+ Specialists</div>
                <div className="stat-card">👨‍⚕️ 5000+ Patients Treated</div>
                <div className="stat-card">🏆 ISO Certified</div>
              </div>

              {/* Animated Highlights */}
              <ul className="department-highlights">
                {departmentInfo.highlights.map((h, i) => (
                  <li key={i} className="highlight-item">
                    <span className="highlight-icon">💡</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="doctors-container">
        <Container>
          <h2 className="section-title">Doctors in {departmentName}</h2>

          <Row>
            {doctors.map((doc) => (
              <Col md={4} key={doc.id} className="mb-4">
                <Card className="doctor-card shadow-lg">
                  <div className="doctor-image-container">
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
                      to={`/departments/${departmentName}/${doc.id}`}
                      className="btn-book"
                    >
                      Book Appointment
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
