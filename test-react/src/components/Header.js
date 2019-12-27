import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Login from './Login'

class Header extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/catalog">Catalog</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
                <Login />
            </Navbar>
        )
    }
}

export default Header;
