// https://dashboard.emailjs.com/admin
import React, { useState } from "react";
import { Form, Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShow(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "jiocoders@email.com",
      link: "mailto:jiocoders@email.com",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "8888899999",
      link: "tel:8888899999",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Delhi NCR & Mumbai",
      link: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <Container className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h1 className="display-4 gradient-text mb-3">📧 Get In Touch</h1>
        <p className="lead text-muted">
          Have a project in mind? Let's work together!
        </p>
      </motion.div>

      <Row className="g-4 mb-5">
        {contactInfo.map((info, index) => (
          <Col md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className="colorful-card text-white border-0 text-center"
                style={{ background: info.gradient }}
              >
                <Card.Body className="p-4">
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    {info.icon}
                  </div>
                  <Card.Title className="h5 mb-2">{info.title}</Card.Title>
                  <Card.Text>
                    <a
                      href={info.link}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        opacity: 0.9,
                      }}
                    >
                      {info.info}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="colorful-card border-0 shadow-lg">
          <Card.Body className="p-5">
            <h3 className="mb-4" style={{ color: "#667eea" }}>
              Send me a message
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label style={{ fontWeight: "600", color: "#2d3748" }}>
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "2px solid #e2e8f0",
                    fontSize: "1rem",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label style={{ fontWeight: "600", color: "#2d3748" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "2px solid #e2e8f0",
                    fontSize: "1rem",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label style={{ fontWeight: "600", color: "#2d3748" }}>
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "2px solid #e2e8f0",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="btn-gradient"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "12px 40px",
                  fontSize: "1.1rem",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <FaPaperPlane className="me-2" />
                Send Message
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
          }}
        >
          <Modal.Title>Message Sent ✅</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <p className="mb-0">
            Thank you for reaching out! I'll get back to you soon.
          </p>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button
            onClick={handleClose}
            style={{
              background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
              border: "none",
              borderRadius: "20px",
              padding: "8px 20px",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;