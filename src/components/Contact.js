// https://dashboard.emailjs.com/admin
import React, { useState } from "react";
import { Form, Button, Modal, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShow(true);
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="my-5">
      <Container>
        <h2 className="mb-4">Contact Me</h2>
        <p>
          Email me at{" "}
          <a href="mailto:jiocoders@email.com" className="text-blue-500 underline">
            jiocoders@email.com
          </a>
        </p>
        <br />
        {/* Contact Form */}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>

        {/* Confirmation Modal */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Message Sent ✅</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for reaching out! I’ll get back to you soon.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default Contact;