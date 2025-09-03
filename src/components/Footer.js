import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        © {new Date().getFullYear()} Jio Coders | Built with React-Bootstrap
      </Container>
    </footer>
  );
}

export default Footer;
