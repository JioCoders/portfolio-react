import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
      variant="dark"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          >
            🚀 JioCoders
          </Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" style={{ gap: "10px" }}>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Nav.Link
                  as={Link}
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? "#fff" : "rgba(255,255,255,0.8)",
                    fontWeight: location.pathname === link.path ? "bold" : "normal",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                    background:
                      location.pathname === link.path
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                  }}
                  className="nav-link-hover"
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.background = "rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
