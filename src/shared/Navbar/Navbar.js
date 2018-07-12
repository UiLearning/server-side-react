import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">SSR APP</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Product" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/searchProduct">Search Product</MenuItem>
                            <MenuItem eventKey={3.2} href="/addProduct">Add Product</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="/scheduleProduct">
                            Schedule
                        </NavItem>
                    </Nav>                    
                    
                </Navbar.Collapse>
                </Navbar>;
            </div>
        )
    }
}
export default Header; 