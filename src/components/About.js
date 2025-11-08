import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaServer, FaRocket } from "react-icons/fa";

function About() {
  const skills = [
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      desc: "Android (Java/Kotlin) & Flutter expert with 5+ years of experience",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Spring Boot Microservices specialist with robust API design",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <FaCode />,
      title: "Full Stack",
      desc: "React, Node.js, and modern web technologies",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <FaRocket />,
      title: "Available",
      desc: "Part-time, Hybrid, Onsite Full-time (Any Location)",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
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
        <h1 className="display-4 gradient-text mb-3">👋 Hi, I'm JioCoders</h1>
        <p className="lead text-muted">
          A passionate developer skilled in React, Spring Boot, and Flutter.
          I love building scalable applications and learning new tech.
        </p>
      </motion.div>

      <Row className="g-4 mb-5">
        {skills.map((skill, index) => (
          <Col md={6} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className="colorful-card h-100 text-white border-0"
                style={{
                  background: skill.gradient,
                  minHeight: "200px",
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-4">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    {skill.icon}
                  </div>
                  <Card.Title className="h5 mb-3">{skill.title}</Card.Title>
                  <Card.Text style={{ fontSize: "0.9rem" }}>{skill.desc}</Card.Text>
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
        <Card
          className="colorful-card border-0"
          style={{
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
        >
          <Card.Body className="p-5">
            <Row>
              <Col md={6}>
                <h3 className="mb-4" style={{ color: "#667eea" }}>
                  📍 Location & Details
                </h3>
                <p>
                  <strong>📍 Based in:</strong> Delhi NCR & Mumbai
                </p>
                <p>
                  <strong>🏠 From:</strong> Prayagraj, UP
                </p>
                <p>
                  <strong>🎓 Qualification:</strong> MCA
                </p>
                <p>
                  <strong>☎️ Mobile:</strong> 8888899999
                </p>
              </Col>
              <Col md={6}>
                <h3 className="mb-4" style={{ color: "#f5576c" }}>
                  💼 Experience Highlights
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="mb-2">
                    📱 <strong>Android Development</strong> (Java/Kotlin) – 5 years
                  </li>
                  <li className="mb-2">
                    📱 <strong>Flutter</strong> – 4 years
                  </li>
                  <li className="mb-2">
                    ⚙️ <strong>Spring Boot Microservices</strong> – 5 years
                  </li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default About;
