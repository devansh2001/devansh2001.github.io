import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import NavbarToggle from "react-bootstrap/NavbarToggle";

class MyNavbar extends Component{
  render() {
    return (
        <div>
          <Navbar fixed={'top'} expand="lg" bg="dark" variant="dark">
            <a href={'#Home'}><Navbar.Brand>devanshponda</Navbar.Brand></a>
            <NavbarToggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={'ml-auto'}>
                <Nav.Link href={"#Home"}>Home</Nav.Link>
                <Nav.Link href={'#About'}>About</Nav.Link>
                <Nav.Link href={"#Experience"}>Experience</Nav.Link>
                <Nav.Link href={'#Skills'}>Skills</Nav.Link>
                <Nav.Link href={'#Projects'}>Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}

export default MyNavbar;