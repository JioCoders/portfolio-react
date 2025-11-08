import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMobile, FaServer } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Android Development",
      years: "5 years",
      description: "Expert in Java and Kotlin for Android app development",
      icon: <FaMobile />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: ["Java", "Kotlin", "Android SDK", "Material Design"],
    },
    {
      title: "Flutter Development",
      years: "4 years",
      description: "Cross-platform mobile app development with Flutter and Dart",
      icon: <FaMobile />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: ["Flutter", "Dart", "Provider", "REST API"],
    },
    {
      title: "Spring Boot Microservices",
      years: "5 years",
      description: "Building scalable backend services with Spring Boot",
      icon: <FaServer />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: ["Spring Boot", "Java", "Microservices", "PostgreSQL"],
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
        <h1 className="display-4 gradient-text mb-3">💼 Experience</h1>
        <p className="lead text-muted">
          Years of expertise in mobile and backend development
        </p>
      </motion.div>

      <Row className="g-4">
        {experiences.map((exp, index) => (
          <Col md={12} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className="colorful-card h-100 border-0 text-white"
                style={{
                  background: exp.gradient,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div style={{ fontSize: "3rem" }}>{exp.icon}</div>
                    <div
                      className="badge"
                      style={{
                        background: "rgba(255,255,255,0.3)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <FaCalendarAlt className="me-1" />
                      {exp.years}
                    </div>
                  </div>
                  <Card.Title className="h4 mb-3">{exp.title}</Card.Title>
                  <Card.Text className="mb-4" style={{ opacity: 0.95 }}>
                    {exp.description}
                  </Card.Text>
                  <div>
                    <h6 className="mb-2" style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                      Key Skills:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="badge"
                          style={{
                            background: "rgba(255,255,255,0.25)",
                            padding: "5px 10px",
                            fontSize: "0.8rem",
                            borderRadius: "15px",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-5"
      >
        <Card
          className="colorful-card border-0"
          style={{
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
        >
          <Card.Body className="p-5 text-center">
            <FaBriefcase style={{ fontSize: "3rem", color: "#667eea", marginBottom: "1rem" }} />
            <h3 className="mb-3" style={{ color: "#2d3748" }}>
              Available for Opportunities
            </h3>
            <p className="lead text-muted mb-4">
              Open to Part-time, Hybrid, and Onsite Full-time positions
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <span
                className="badge"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "10px 20px",
                  fontSize: "1rem",
                }}
              >
                Part-time
              </span>
              <span
                className="badge"
                style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  padding: "10px 20px",
                  fontSize: "1rem",
                }}
              >
                Hybrid
              </span>
              <span
                className="badge"
                style={{
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  padding: "10px 20px",
                  fontSize: "1rem",
                }}
              >
                Full-time
              </span>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Experience;
