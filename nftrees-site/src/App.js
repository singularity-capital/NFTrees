import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Emissions from './components/Emissions';
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
            <Navbar/>
            <Landing/>
          </Route>

          <Route exact path = '/emissions'>
            <Navbar/>
            <Emissions/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
