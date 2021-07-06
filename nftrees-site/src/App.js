import React, {useState, useEffect} from 'react';
import './App.css';
import Landing_Navbar from './components/Landing_Navbar';
import Landing from './components/Landing';
import Emissions from './components/Emissions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Landing_Navbar/>
            <Landing/>
          </Route>

          <Route exact path = '/emissions'>
            <Landing_Navbar/>
            <Emissions/>
          </Route>

          <Route exact path = '/home'>
            <Navbar/>
            <Home/>
          </Route>

          <Route exact path = '/about'>
            <Navbar/>
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
