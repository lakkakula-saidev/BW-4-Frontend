import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col, Spinner } from "react-bootstrap";
import "../css/Login.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/index.js";

export default function Login() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    let history = useHistory();
    const [firstname, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(allActions.userActions.persist_user_login());
        if (Object.keys(user.currentUser).length > 0 && user.currentUser._id) {
            // All redux store actions are to be performed to get the 'User' and his 'Chat' details
            history.push("/");
        }
    }, []);

    /*     function validateForm() {}
     */
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            /*  let user = await axios.post(endpoint + "/users/register", { firstname, surname, email, password }); */
            dispatch(allActions.userActions.register_User({ firstname, surname, email, password }));
        } catch (error) {
            console.error(error);
        }
        if (Object.keys(user.currentUser).length > 0 && user.currentUser._id) {
            // All redux store actions are to be performed to get the 'User' and his 'Chat' details

            history.push("/");
        }
    }

    function handleLogin() {
        dispatch(allActions.userActions.login_User({ email, password }));
        if (Object.keys(user.currentUser).length > 0 && user.currentUser._id) {
            // All redux store actions are to be performed to get the 'User' and his 'Chat' details

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
        <>
            {user.loading ? (
                <Spinner animation="grow" variant="success" />
            ) : (
                <div className="Login">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control autoFocus type="name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group size="lg" controlId="surname">
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

                        <Form.Group className="d-flex">
                            <Button block className="flex-grow-1 pr-1" type="submit">
                                Register
                            </Button>
                            <Button block className="flex-grow-1 pl-1" onClick={() => handleLogin()}>
                                Log in
                            </Button>
                        </Form.Group>
                        <Form.Group>
                            <Button disabled onClick={() => handleGoogleLogin()}>
                                Log in with Google
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            )}
        </>
    );
}
