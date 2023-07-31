import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import dmLogo from "../assets/dmLogo.png";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ justifyContent: 'space-around', padding: '10px' }}>
            <Navbar.Brand href="#home">Email Client</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#inbox">Inbox</Nav.Link>
                    <Nav.Link href="#sent">Sent</Nav.Link>
                    <Nav.Link href="#compose">Compose</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavigationBar;


