import React from "react";
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/index.js";

export default function Profile() {
    const user = useSelector((store) => store.user.currentUser);
    const dispatch = useDispatch();
    const [username, setUsername] = useState(user.username);
    const [surname, setSurname] = useState(user.surname);
    const inputFile = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(allActions.userActions.update_User({ username, surname }));
    }
    function handleImageChange() {
        console.log("heelo you should only see me once ideally");
        inputFile.current.click();
        if (inputFile !== null) {
            const formData = new FormData();
            formData.append("avatar", inputFile.current.files[0]);
            dispatch(allActions.userActions.update_Avatar(formData));
        }
    }

    return (
        <div className="profileDiv p-3">
            <div className="profileImgDiv" onClick={() => handleImageChange()}>
                <input type="file" id="file" ref={inputFile} style={{ display: "none" }} />
                <img type="file" src={user.avatar} /* style={{ borderRadius: "50%" }} */ className="profile-rounded-circle" alt="" />
            </div>

            <Form className="profileForm" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Profile Name</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
