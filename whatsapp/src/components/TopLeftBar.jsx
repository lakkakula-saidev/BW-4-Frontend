import React from "react";


import {
  Navbar,
  Nav,
  Button,
  Form,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

export default function TopLeftBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">Navbar scroll <i class="fas fa-circle"></i> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
      
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
       
      </Nav>
     
    </Navbar.Collapse>
  </Navbar>
  );
}
