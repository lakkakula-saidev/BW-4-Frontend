import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import "../css/Login.css";
/* import wa from "../"; */

const endpoint = process.env.REACT_APP_BACK_URL;

axios.defaults.withCredentials = true;
export default function Login() {
    const [firstname, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {}

    function handleSubmit(event) {
        event.preventDefault();
        fetch(endpoint + "/users/register", {
            method: "POST",
            body: JSON.stringify({ firstname, surname, email, password }),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())

            .then((data) => {
                setFirstName(data.firstname);
                setSurname(data.surname);
                setEmail(data.email);
                setPassword(data.password);
            });
    }

    async function handleLogin() {
        let res = await axios.post(endpoint + "/users/login", { email, password });
        if (typeof res === "object" && res !== null) {
            let me = await axios.get(endpoint + "/users/login/me");
        }
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control autoFocus type="name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control autoFocus type="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Row>
                    <Col>
                        <Button block size="lg" type="submit">
                            Register
                        </Button>
                    </Col>
                    <Col>
                        <Button block size="lg" onClick={() => handleLogin()}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row className="justify-content-md-center">
                <Col>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login with Google
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
