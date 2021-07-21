import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import "../css/Login.css";
import { Redirect, useHistory } from "react-router-dom";
/* import wa from "../"; */

const endpoint = process.env.REACT_APP_BACK_URL;

export default function Login() {
    let history = useHistory();
    const [firstname, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {}

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            let user = await axios.post(endpoint + "/users/register", { firstname, surname, email, password });
        } catch (error) {
            console.log(error, "I am here");
        }
        if (firstname) {
            // All redux store actions are to be performed to get the 'User' and his 'Chat' details
            console.log("i am not redirected");
            history.push("/");
        }
    }

    async function handleLogin() {
        try {
            let res = await axios.post(endpoint + "/users/login", { email, password });
            if (typeof res === "object" && res !== null) {
                let me = await axios.get(endpoint + "/users/me", { withCredentials: true });
            }
        } catch (error) {
            console.log(error);
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
                    <Col>
                    <Button block size="lg" type="submit" >
                        Login with Google
                    </Button>
                </Col>
                </Row>
            </Form>
            <Row className="justify-content-md-center">
                
            </Row>
        </div>
    );
}
