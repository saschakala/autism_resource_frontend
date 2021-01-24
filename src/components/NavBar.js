import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar sticky="top" id="navbar" >
        <Navbar.Brand href="http://localhost:3001/" id="nav-brand">Compendium</Navbar.Brand>
        <Nav className="justify-content-end" >
            <Nav.Link href="http://localhost:3001/" id="nav-text" >Home</Nav.Link>
            <Nav.Link href="http://localhost:3001/books" id="nav-text" >Books</Nav.Link>
            <Nav.Link href="http://localhost:3001" id="nav-text" >Articles</Nav.Link>
            <Nav.Link href="http://localhost:3001" id="nav-text" >Social Media Accounts</Nav.Link>
        </Nav>
    </Navbar>
    )


}

export default NavBar 