import React from "react";

import { Navbar } from "react-bootstrap";
import { ThreeDots, ThreeDotsVertical } from "react-bootstrap-icons";

export default function TopLeftBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#"> </Navbar.Brand>

            <div>
                <ThreeDotsVertical />
            </div>
        </Navbar>
    );
}
