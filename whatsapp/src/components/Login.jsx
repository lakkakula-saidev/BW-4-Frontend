import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {Button,Row, Col} from "react-bootstrap";
import "../css/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Row>
        <Col>
        <Button  block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Col>
        <Col>
        <Button block size="lg" disabled={!validateForm()}>
          Register
        </Button>
        </Col>
        </Row>
        
      </Form>
      <Row className="justify-content-md-center">
          <Col>
      <Button  block size="lg" type="submit" disabled={!validateForm()}>
          Login with Google
        </Button>
        </Col>
        </Row>
    </div>
  );
}