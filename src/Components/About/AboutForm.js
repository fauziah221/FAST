import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styleAbout.css';

const About = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = event => {
    event.preventDefault();

    console.log('We respond as soon as possible');
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Please enter your full name"
            onChange={onInputChange}/>

        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Please enter your email"
            onChange={onInputChange}/>

        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Please enter subject"
            onChange={onInputChange}/>

        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Please enter your message"
            onChange={onInputChange}/>

        </Form.Group>
        <button class="send" variant="primary" type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default About;