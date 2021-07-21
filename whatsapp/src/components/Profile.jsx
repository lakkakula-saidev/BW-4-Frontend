import React from "react";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ChatList } from "react-chat-elements";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../store/index.js";

export default function Profile() {
    const user = useSelector((store) => store.user.currentUser);
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState(user.firstname);
    const [surname, setSurname] = useState(user.surname);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(allActions.userActions.update_User({ firstname, surname }));
    }

    return (
        <div class="profileForm">
            <Form class="profileForm" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Profile Name</Form.Label>
                    <Form.Control type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
