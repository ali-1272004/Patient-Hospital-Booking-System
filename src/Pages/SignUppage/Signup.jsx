import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SignupImg from "../../assets/images/Doctors-pana.png"; // ممكن تستخدم نفس صورة الـLogin
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // هنا ممكن تضيف API call للباك إند
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <section className="signup-section">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          
          {/* صورة على الشمال */}
          <Col md={6} lg={6} className="d-none d-md-block">
            <div className="signup-image">
              <img src={SignupImg} alt="SignUp Visual" />
            </div>
          </Col>

          {/* الفورم على اليمين */}
          <Col md={6} lg={5}>
            <div className="signup-card p-4">
              <h2 className="text-center mb-4">Create Your Account</h2>
              <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-signup w-100 mb-3">
                  Sign Up
                </Button>

                <p className="text-center mb-0">
                  Already have an account? <a href="/login">Login</a>
                </p>

              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Signup;
