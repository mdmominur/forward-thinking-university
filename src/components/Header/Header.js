import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const backToHomeHandler = () => {
        history.push('/');
    }
    return (
        <Navbar bg="success" sticky="top" variant="dark" expand="lg" className="rounded shadow">
        <Container>
           
            <Navbar.Brand href="#" onClick={() => backToHomeHandler()}>Forward Thinking University</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/courses">Courses</NavLink>
                <NavLink className="nav-link" to="/events">Events</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;