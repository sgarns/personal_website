import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutMe from './AboutMe';
import Museums from './Museums';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaLinkedin, FaMedium, FaTwitterSquare } from 'react-icons/fa';

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currPage: '/'
    };
  }

  route(path) {
    return this.setState({currPage: path});
  }

  render() {
    return (
      <Router>
        <div>
        <Navbar collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand href="/">Sara Garner</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav style={{ width: "100%"}}>
              <Nav.Link activeClassName="chosen" href="/">About</Nav.Link>
              <Nav.Link activeClassName="chosen" href="/museums/">Museums</Nav.Link>
            </Nav>
        </Navbar>
          <Route path="/" exact component={AboutMe} />
          <Route path="/museums/" component={Museums} />
        </div>
        <hr></hr>
        <footer>
          <div className="centered">
            <a href="https://www.linkedin.com/in/garnersara/"><FaLinkedin className="icon" size="25" /></a>
            <a href="https://www.twitter.com/sgarns"><FaTwitterSquare className="icon" size="25" /></a>
            <a href="https://medium.com/@saragarner"><FaMedium className="icon" size="25" /></a>
          </div>
        </footer>
      </Router>
    );
  }
}

export default AppRouter;
