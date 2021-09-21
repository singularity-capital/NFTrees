import './App.css';
import LandingNavbar from './components/LandingNavbar';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path = '/'>
              <div className = 'landingBackground'>
                <LandingNavbar/>
                <Landing/>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
