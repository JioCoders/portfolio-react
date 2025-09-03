import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React.",
    },
    { title: "E-commerce App", desc: "Spring Boot + React full-stack app." },
    { title: "Mobile App", desc: "Flutter app for task management." },
  ];

  return (
    <section id="projects" className="my-5">
      <h2 className="mb-4">Projects</h2>
      <Row>
        {projects.map((p, idx) => (
          <Col md={4} key={idx} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects;
