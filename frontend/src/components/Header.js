import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { Navbar  , Nav} from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">

                    <Navbar.Brand href="#home">Coffee  App</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                        <Nav.Link href="#home">

                        <Link to="/">Home</Link>
                            </Nav.Link>

                        <Nav.Link href="/Favorite">
                        <Link to="/Favorite">Favorite List</Link>
                            </Nav.Link>

                    </Nav>
                    
                    </Navbar.Collapse>

                </Navbar>
            </div>
        )
    }
}

export default Header
