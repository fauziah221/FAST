import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Connect from './Pages/Connect';
import Challanges from './Pages/Challanges';
import About from './Pages/About';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Contect">
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
      </div>
    </Router>
  )
}

export default App;