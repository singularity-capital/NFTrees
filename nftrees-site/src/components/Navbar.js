import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar (props){

    return(
        <nav className = 'navbar'>
            {/* display navbar links */}
            <NavLink exact className = "navbar-Brand" to = '/'> <img className = 'logoImageHome' src = {logo} height = {50}/> </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link" className = "navbar-Link" to = '/home'> HOME </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link" className = "navbar-Link" to = '/about'> ABOUT </NavLink>
            <p className = 'spacer'/>
            <a className = "navbar-Link" href = 'https://docs.nftrees.com/'> DOCS </a>
            <p className = 'spacer'/>

            {/* display user address */}
            <a className = 'enterAppButton'> 
                <div className = 'enterAppButtonText'> APP COMING SOON </div>
            </a>
        </nav>
    );
}

export default Navbar;