import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import "../css/Login.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/index.js";
/* import wa from "../"; */

const endpoint = process.env.REACT_APP_BACK_URL;

export default function Login() {
    const user = useSelector((store) => store.user.currentUser);
    const dispatch = useDispatch();
    let history = useHistory();
    const [firstname, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {}

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            /*  let user = await axios.post(endpoint + "/users/register", { firstname, surname, email, password }); */
            dispatch(allActions.userActions.register_User({ firstname, surname, email, password }));
        } catch (error) {
            console.log(error, "I am here");
        }
        if (user.currentUser && Object.keys(user.currentUser).length !== 0) {
            // All redux store actions are to be performed to get the 'User' and his 'Chat' details
            history.push("/");
        }
    }

    function handleLogin() {
        dispatch(allActions.userActions.login_User({ email, password }));
        if (user.currentUser && Object.keys(user.currentUser).length !== 0) {
            history.push("/");
        }
    }

    function handleGoogleLogin() {
        dispatch(allActions.userActions.login_Google_User());
        /*   if (user) {
            history.push("/");
        } */
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
                        <Button block size="lg" onClick={() => handleGoogleLogin()}>
                            Login with Google
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row className="justify-content-md-center"></Row>
        </div>
    );
}
