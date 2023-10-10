import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';

// Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

// DataMotion Logo Import
import dmLogo from '../assets/DataMotion-Logo-White-1 copy (1).png';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="flex-column navbar-style">
            <div className="d-flex w-100 justify-content-between">
                {/* DataMotion Logo */}
                <Navbar.Brand href="https://datamotion.com/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
                    <img
                        alt="DataMotion logo"
                        src={dmLogo}
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                {/* Connect Icons */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/janelle-phalon-7b743a157/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com/devreljanelle" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://dev.to/janellephalon" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDev} />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/janellephalon" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </div>

            <div className="w-100 d-flex justify-content-start pl-4 subtitle" style={{ marginLeft: '40px' }}>
               <h6 className="text-start">Secure Message Center Inbox</h6>
            </div>

            {/* Badge Pills */}
            <div className="w-100 d-flex justify-content-start pl-4" style={{ marginLeft: '35px' }}>
                <span className="badge badge-light badge-pill mr-2">
                    Secure Message Center API
                </span>
                <span className="badge badge-pill">
                    React
                </span>
                <span className="badge badge-pill">
                    Bootstrap
                </span>
                <span className="badge badge-pill">
                    CSS
                </span>
            </div>
        </Navbar>
    );
};

export default NavigationBar;
