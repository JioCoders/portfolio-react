import React from "react";
import { ListGroup } from "react-bootstrap";

function Experience() {
  const jobs = [
    { company: "TechCorp", role: "Software Engineer", years: "2021–2023" },
    { company: "JioCoders", role: "Full Stack Dev", years: "2019–2021" }
  ];

  return (
    <section id="experience" className="my-5">
      <h2 className="mb-4">Experience</h2>
      <ListGroup>
        {jobs.map((job, idx) => (
          <ListGroup.Item key={idx}>
            <strong>{job.company}</strong> – {job.role} ({job.years})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
}

export default Experience;
