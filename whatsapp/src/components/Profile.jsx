import React from "react";
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/index.js";

export default function Profile() {
    const user = useSelector((store) => store.user.currentUser);
    const dispatch = useDispatch();
    const [username, setUsername] = useState(user.username);
    const [firstname, setFirstname] = useState(user.firstname);
    const [surname, setSurname] = useState(user.surname);

    const inputFile = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(allActions.userActions.update_User({ username, surname, firstname })); // :(
    } //yeah its just a request to backend the redux data is updated by response from
    function handleImageChange() {
        if (inputFile !== null) {
            inputFile.current.click();

            //console.log(inputFile.current.files[0]);
        }
    }

    const handleFileChange = () => {
        const formData = new FormData();
        formData.append("avatar", inputFile.current.files[0]);
        dispatch(allActions.userActions.update_Avatar(formData));
    };

    return (
        <div className="profileDiv py-3 border rounded">
            <div className="" onClick={() => handleImageChange()}>
                <input onClick={(e) => e.stopPropagation()} type="file" id="file" ref={inputFile} style={{ display: "none" }} onChange={handleFileChange} />
                <img type="file" src={user.avatar} className="profile-rounded-circle avatar" alt="" />
            </div>

            <Form className="profileForm" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
