import React from "react";
import { Card } from "react-bootstrap";

function About() {
  return (
    <Card className="shadow p-4">
      <Card.Body>
        <Card.Title>👋 Hi, I'm Jio Coders</Card.Title>
        <Card.Text>
          A passionate developer skilled in React, Spring Boot, and Flutter.
          I love building scalable applications and learning new tech.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
