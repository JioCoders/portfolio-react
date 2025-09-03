import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll';

function DarkHome() {
  const [darkMode, setDarkMode] = useState(false);

  const themeClass = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
  document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
  document.body.style.color = darkMode ? '#ffffff' : '#000000';
}, [darkMode]);

  return (
    <>
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Jiocoders</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <ScrollLink to="home" smooth duration={500} className="nav-link">Home</ScrollLink>
              <ScrollLink to="skills" smooth duration={500} className="nav-link">My Skill</ScrollLink>
              <ScrollLink to="about" smooth duration={500} className="nav-link">About Us</ScrollLink>
              <ScrollLink to="contact" smooth duration={500} className="nav-link">Contact Us</ScrollLink>
              <Nav.Link onClick={toggleTheme}>{darkMode ? '☀️ Light' : '🌙 Dark'}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <div className={`min-vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Element name="home" className={`py-5 text-center ${themeClass}`}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Profile Avatar"
          style={{ width: '120px', borderRadius: '50%' }}
        />
        <h1 className="mt-3">Jiocoders</h1>
        <p>📍 Delhi NCR & Mumbai | From Prayagraj, UP</p>
        <p>🎓 MCA | ☎️ 8888899999</p>
        <p>🧑‍💼 Available: Part-time, Hybrid, Onsite Full-time (Anywhere)</p>
      </Element>

      {/* Other sections use the same `themeClass` */}
      <Element name="skills" className={`py-5 container ${themeClass}`}>
        <h2 className="text-center mb-4">👨‍💻 Skills & Experience</h2>
        <ul>
          <li>📱 Android (Java/Kotlin) – 5 years</li>
          <li>📱 Flutter – 4 years</li>
          <li>⚙️ Spring Boot Microservices – 5 years</li>
        </ul>
      </Element>

      <Element name="about" className={`py-5 container ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
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
      </Element>

      <Element name="contact" className={`py-5 container ${themeClass}`}>
        <h2 className="text-center mb-4">📞 Contact Me</h2>
        <Form
          style={{ maxWidth: '500px', margin: '0 auto' }}
          action="https://formspree.io/f/mwkgaeqd"
          method="POST"
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>

          <Button type="submit" variant="primary">Send Message</Button>
        </Form>
      </Element>
    </div>

      <footer className={`text-center py-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <p>© 2025 Jiocoders | Mobile & Backend Developer</p>
        <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="me-3 text-decoration-none text-info">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="text-decoration-none text-info">LinkedIn</a>
      </footer>
    </>
  );
}

export default DarkHome;
