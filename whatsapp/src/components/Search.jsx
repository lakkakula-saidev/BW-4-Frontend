import React from "react";
import "../css/Login.css";

import { Form, FormControl } from "react-bootstrap";

export default function Search() {
    return (
        <div className="dov">
            <Form className=" search">
                <FormControl type="search" placeholder="Search or Start a New Chat" className="mr-2" aria-label="Search" />
            </Form>
        </div>
    );
}
