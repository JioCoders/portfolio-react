import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <Container className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Card
          className="colorful-card border-0"
          style={{
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Card.Body className="p-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <FaExclamationTriangle
                style={{
                  fontSize: "5rem",
                  color: "#f5576c",
                  marginBottom: "1rem",
                }}
              />
            </motion.div>
            <h1
              className="display-1 mb-3"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
              }}
            >
              404
            </h1>
            <h3 className="mb-3" style={{ color: "#2d3748" }}>
              Page Not Found
            </h3>
            <p className="lead text-muted mb-4">
              Oops! The page you're looking for doesn't exist.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as={Link}
                to="/"
                className="btn-gradient"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "12px 30px",
                  fontSize: "1.1rem",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <FaHome className="me-2" />
                Go Back Home
              </Button>
            </motion.div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default NotFound;
