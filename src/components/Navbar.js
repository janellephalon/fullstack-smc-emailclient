import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';

import dmLogo from '../assets/DataMotion-Logo-White-1 copy (1).png'

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="https://datamotion.com/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
                <img
                    alt="DataMotion logo"
                    src={dmLogo}
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/janelle-phalon-7b743a157/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://twitter.com/devreljanelle" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://dev.to/janellephalon" target="_blank" rel="noopener noreferrer">
                            Dev Blog
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/janellephalon" target="_blank" rel="noopener noreferrer">
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
