import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Summary from './Summary/Summary';
import ProjectCode from './ProjectCode/ProjectCode';
import Timelog from './Timelog/Timelog';

class Header extends Component {
    render() {
        return (
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Project Management</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/summary">Summary</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/pcode">Project Code</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/timelog">Timelog</Link>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/member">Login</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
        )
    }
}

export default Header;