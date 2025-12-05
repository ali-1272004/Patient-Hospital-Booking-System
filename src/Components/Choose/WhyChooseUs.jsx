import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers,
  FaDoorClosed,
  FaMoneyBillWave,
  FaHospital,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import doctorImg from "../../assets/images/doc.png";
import "./WhyChooseUs.css";

const features = [
  {
    title: "Whole-Body, Whole-Family Care",
    icon: <FaUsers size={30} color="#007bff" />,
  },
  {
    title: "Door-to-Door Service Options",
    icon: <FaDoorClosed size={30} color="#007bff" />,
  },
  {
    title: "Transparent, Wallet-Friendly Pricing",
    icon: <FaMoneyBillWave size={30} color="#007bff" />,
  },
  {
    title: "Hospital-Level Technology, Boutique Feel",
    icon: <FaHospital size={30} color="#007bff" />,
  },
  {
    title: "Rapid Results, Proven Outcomes",
    icon: <FaCheckCircle size={30} color="#007bff" />,
  },
  {
    title: "Compassion Centred Culture",
    icon: <FaHeart size={30} color="#007bff" />,
  },
];

const WhyChooseUs = () => {
  return (
        <section className="why-choose-us py-5">
          <Container>
            <div className="text-center mb-5">
              <p className="text-primary">WHY CHOOSE US</p>
              <h2>The Health Partner You’ve Been Looking For</h2>
            </div>

         <Row className="align-items-center">

      {/* Left Features */}
      <Col md={4}>
        {features.slice(0, 3).map((item, index) => (
          <Card key={index} className="mb-4 shadow-sm border-0 feature-card left-card">
            <Card.Body className="d-flex align-items-start ">

              <div className="feature-text right-text">
                <Card.Title className="item_title">{item.title}</Card.Title>
                <Card.Text>
                  High-quality care and services for all your family members.
                </Card.Text>
              </div>

              <div className="icon_choo">{item.icon}</div>

            </Card.Body>
          </Card>
        ))}
      </Col>

      {/* Center Image */}
      <Col md={4} className="d-flex justify-content-center">
        <img src={doctorImg} alt="Doctor" className="img-fluid rounded" />
      </Col>

      {/* Right Features */}
      <Col md={4}>
        {features.slice(3).map((item, index) => (
          <Card key={index} className="mb-4 shadow-sm border-0 feature-card right-card">
            <Card.Body className="d-flex align-items-start">

              <div className="icon">{item.icon}</div>

              <div className="feature-text left-text">
                <Card.Title className="item_title">{item.title}</Card.Title>
                <Card.Text>
                  High-quality care and services for all your family members.
                </Card.Text>
              </div>

            </Card.Body>
          </Card>
        ))}
      </Col>

    </Row>

          </Container>
        </section>
  //   <section className="why-section">
  // <Container>
  //   {/* Header */}
  //   <div className="why-header">
  //     <p className="why-subtitle">WHY CHOOSE US</p>
  //     <h2 className="why-title">The Health Partner You’ve Been Looking For</h2>
  //   </div>

  //   <Row className="why-content">
  //     {/* Left Features */}
  //     <Col md={4} className="why-left">
  //       {features.slice(0, 3).map((item, index) => (
  //         <Card key={index} className="why-card why-card-left">
  //           <Card.Body className="why-card-body">
  //             <div className="why-text why-text-right">
  //               <Card.Title className="why-card-title">{item.title}</Card.Title>
  //               <Card.Text>
  //                 High-quality care and services for all your family members.
  //               </Card.Text>
  //             </div>
  //             <div className="why-icon">{item.icon}</div>
  //           </Card.Body>
  //         </Card>
  //       ))}
  //     </Col>

  //     {/* Center Image */}
  //     <Col md={4} className="why-center">
  //       <img src={doctorImg} alt="Doctor" className="why-image" />
  //     </Col>

  //     {/* Right Features */}
  //     <Col md={4} className="why-right">
  //       {features.slice(3).map((item, index) => (
  //         <Card key={index} className="why-card why-card-right">
  //           <Card.Body className="why-card-body">
  //             <div className="why-icon">{item.icon}</div>
  //             <div className="why-text why-text-left">
  //               <Card.Title className="why-card-title">{item.title}</Card.Title>
  //               <Card.Text>
  //                 High-quality care and services for all your family members.
  //               </Card.Text>
  //             </div>
  //           </Card.Body>
  //         </Card>
  //       ))}
  //     </Col>
  //   </Row>
  // </Container>
// </section>

  );
};

export default WhyChooseUs;
