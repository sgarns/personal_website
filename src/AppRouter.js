import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from './AboutMe';
import Museums from './Museums';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaLinkedin, FaMedium, FaTwitterSquare } from 'react-icons/fa';

function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Sara Garner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/museums/">Museums</a>
            </li>
          </ul>
            <Nav className="justify-content-end" style={{ width: "100%"}}>
              <a href="https://www.linkedin.com/in/garnersara/"><FaLinkedin className="icon" size="25" /></a>
              <a href="https://www.twitter.com/sgarns"><FaTwitterSquare className="icon" size="25" /></a>
              <a href="https://medium.com/@saragarner"><FaMedium className="icon" size="25" /></a>
            </Nav>
        </Navbar>
        <Route path="/" exact component={AboutMe} />
        <Route path="/museums/" component={Museums} />
      </div>
    </Router>
  );
}

export default AppRouter;
