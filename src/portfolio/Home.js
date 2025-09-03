import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Jiocoders</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">My Skill</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="py-5 text-center bg-light">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Profile Avatar"
          style={{ width: '120px', borderRadius: '50%' }}
        />
        <h1 className="mt-3">Jiocoders</h1>
        <p>📍 Delhi NCR & Mumbai | Originally from Prayagraj, UP</p>
        <p>🎓 MCA | ☎️ 8888899999</p>
        <p>🧑‍💼 Part-time, Hybrid, Full-time (Any Location)</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 container">
        <h2 className="text-center mb-4">👨‍💻 Skills & Experience</h2>
        <ul>
          <li>📱 Android (Java/Kotlin) – 5 years</li>
          <li>📱 Flutter – 4 years</li>
          <li>⚙️ Spring Boot Microservices – 5 years</li>
        </ul>
      </section>

      {/* About Us */}
      <section id="about" className="py-5 bg-light container">
        <h2 className="text-center mb-4">📘 About My Projects</h2>
        <h5>📱 Flutter Mobile App</h5>
        <ul>
          <li>Flutter + Dart, REST API integration</li>
          <li>State Management (Provider)</li>
          <li>Deployed to Android & iOS</li>
        </ul>
        <h5>💻 Spring Boot Backend</h5>
        <ul>
          <li>Spring Boot + PostgreSQL</li>
          <li>JWT authentication, secure APIs</li>
          <li>Microservice architecture</li>
        </ul>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-5 container">
        <h2 className="text-center mb-4">📞 Contact Me</h2>
        <p className="text-center">Mobile: 8888899999</p>
        <p className="text-center">Email: yourname@example.com (replace with real one)</p>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2025 Jiocoders | Mobile & Backend Developer
      </footer>
    </>
  );
}

export default Home;
