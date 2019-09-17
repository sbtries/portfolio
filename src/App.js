import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { Button, Navbar, Nav, NavDropdown, form} from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';

const Home = () => (
  <div className="container">
    <h1>Home</h1>
    <p>"Sed  illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
  </div>
);

function App() {
  return (
    <Router>
     <Navbar bg="light" variant="light">
    <Navbar.Brand>A Basic Portfolio Site</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link class="text-muted"><Link to="/" class="text-muted">Home</Link></Nav.Link>
      <Nav.Link class="link"><Link to="/about" class="text-muted">About</Link></Nav.Link>
      <Nav.Link class="link"><Link to="/contact" class="text-muted">Contact</Link></Nav.Link>

    </Nav>
  </Navbar>

      <AnimatedSwitch
        atEnter={{ opacity: 0, left: -50 }}
        atLeave={{ opacity: 0, left: 50, }}
        atActive={{ opacity: 1, left: 0, }}
        className="switch-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

      </AnimatedSwitch>

      <span className="footer"> HELLO</span>
    </Router>
  );
}


export default App;
