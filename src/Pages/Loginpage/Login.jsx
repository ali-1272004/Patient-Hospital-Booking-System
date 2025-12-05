import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginImg from "../../assets/images/Doctors-amico.png"; // تأكد من الامتداد الصحيح
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <section className="login-section">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          
          {/* صورة على الشمال */}
          <Col md={6} lg={6} className="d-none d-md-block">
            <div className="login-image">
              <img src={LoginImg} alt="Login Visual" />
            </div>
          </Col>

          {/* الفورم على اليمين */}
          <Col md={6} lg={5}>
            <div className="login-card p-4">
              <h2 className="text-center mb-4">Login to Your Account</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-login w-100 mb-3">
                  Login
                </Button>
               <p className="text-center mb-0">
                Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>

              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Login;
