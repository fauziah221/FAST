import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Router, Link } from "react-router-dom"

//<img className="photo" src={FASTLOGO}></img>
function  navbar() {
    return (
        <Router>
            <div className="Navbar">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>
                        FAST
                    </Navbar.Brand>
                    
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Connect">Connect</Nav.Link>
                        <Nav.Link as={Link} to="/Challanges">Challanges</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
        </Router>
        
        
        
        
        
        
        
        
        
        
        /*<Router>
            <div className="navbar">
                <Navbar bg="dark" variant="dark" expand="sm" >
                    <Container >
                        <Navbar.Brand >FAST</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav fill className="me-auto" fill={"true"}>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Connect">Connect</Nav.Link>
                                <Nav.Link as={Link} to="/Challanges">Challanges</Nav.Link>
                                <Nav.Link as={Link} to="/About">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
            <Switch>
                <Route exact path="/"> 
                <Home/>
                </Route>
                <Route exact path="/Connect"> 
                <Connect/>
                </Route>
                <Route exact path="/Challanges"> 
                <Challanges/>
                </Route>
                <Route exact path="/About"> 
                <About/>
                </Route>
          </Switch>
            </div>
        </Router>*/
    )}

export default navbar;