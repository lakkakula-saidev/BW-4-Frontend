import React from "react";

import { Navbar, Form, FormControl } from "react-bootstrap";

export default function Search() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Form className="d-flex">
                <FormControl type="search" placeholder="Search or Start a New Chat" className="mr-2" aria-label="Search" />
            </Form>
        </Navbar>
    );
}
