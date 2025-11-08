import React from "react";
import { Card, Row, Col, Container, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaMobile, FaCode, FaServer } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Flutter Mobile App",
      desc: "A beautiful cross-platform mobile application built with Flutter. Features smooth UI animations, state management with Provider, and integration with REST APIs.",
      tech: ["Flutter", "Dart", "Provider", "REST API"],
      icon: <FaMobile />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
    },
    {
      title: "Spring Boot Backend",
      desc: "A robust backend RESTful API built with Spring Boot and PostgreSQL. Includes JWT-based authentication and secure API endpoints with microservice architecture.",
      tech: ["Spring Boot", "PostgreSQL", "JWT", "Microservices"],
      icon: <FaServer />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f5576c",
    },
    {
      title: "Portfolio Website",
      desc: "A modern, responsive portfolio website built with React and Bootstrap. Features smooth animations, colorful themes, and an elegant user interface.",
      tech: ["React", "Bootstrap", "Framer Motion"],
      icon: <FaCode />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe",
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
        <h1 className="display-4 gradient-text mb-3">🚀 My Projects</h1>
        <p className="lead text-muted">
          Explore some of my recent work and creations
        </p>
      </motion.div>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className="colorful-card h-100 border-0"
                style={{
                  background: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "5px",
                    background: project.gradient,
                    width: "100%",
                  }}
                />
                <Card.Body className="p-4">
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "2.5rem",
                      color: project.color,
                    }}
                  >
                    {project.icon}
                  </div>
                  <Card.Title className="h4 mb-3" style={{ color: "#2d3748" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-3" style={{ minHeight: "100px" }}>
                    {project.desc}
                  </Card.Text>
                  <div className="mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="me-2 mb-2"
                        style={{
                          background: project.gradient,
                          padding: "6px 12px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm"
                      style={{
                        background: project.gradient,
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "8px 16px",
                      }}
                    >
                      <FaGithub className="me-1" />
                      Code
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      style={{
                        borderColor: project.color,
                        color: project.color,
                        borderRadius: "8px",
                        padding: "8px 16px",
                      }}
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Demo
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
