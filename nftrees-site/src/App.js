import './App.css';
import LandingNavbar from './components/LandingNavbar';
import Landing from './components/Landing';
import Emissions from './components/Emissions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

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

          <Route exact path = '/emissions'>
            <div className = 'landingBackground'>
             <LandingNavbar/>
              <Emissions/>
            </div>
          </Route>

          <Route exact path = '/home'>
            <ScrollToTop/>
            <Navbar/>
            <Home/>
            <Footer/>
          </Route>

          <Route exact path = '/about'>
            <ScrollToTop/>
            <Navbar/>
            <About/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
