import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';

// import './ContactUs.css';

const  Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ts4o9mt', 'template_s1tfq4x', e.target,
'user_DmOjpZwDwFdOihvf2nSrU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div>
      <h2 className="text-center">Contact Form</h2>
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="3"
            placeholder="Enter your message"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
    
  );
}

export default Contact;