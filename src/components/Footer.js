import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, link: "#", name: "GitHub" },
    { icon: <FaLinkedin />, link: "#", name: "LinkedIn" },
    { icon: <FaTwitter />, link: "#", name: "Twitter" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        marginTop: "80px",
        padding: "40px 0 20px",
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              JioCoders
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
              style={{ opacity: 0.9 }}
            >
              Mobile & Backend Developer | Building amazing apps with Flutter &
              Spring Boot
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="d-flex justify-content-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                    padding: "10px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.2,
                    background: "rgba(255,255,255,0.3)",
                    rotate: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </Col>
        </Row>
        <hr style={{ borderColor: "rgba(255,255,255,0.3)", margin: "20px 0" }} />
        <Row>
          <Col md={12} className="text-center">
            <p className="mb-0" style={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} JioCoders | Made with{" "}
              <FaHeart style={{ color: "#f5576c" }} /> using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
