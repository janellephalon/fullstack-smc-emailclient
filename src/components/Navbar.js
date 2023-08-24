import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="justify-content-center">
            <Navbar.Brand href="#home">Secure Message Center</Navbar.Brand>
        </Navbar>
    );
};

export default NavigationBar;
