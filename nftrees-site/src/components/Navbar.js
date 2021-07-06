import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar (props){

    return(
        <nav className = 'navbar'>
            {/* display navbar links */}
            <NavLink exace className = "navbar-Brand" to = '/'> <img src = {logo} height = {50}/> </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link" className = "navbar-Link" to = '/home'> Home </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link" className = "navbar-Link" to = '/about'> About </NavLink>
            <p className = 'spacer'/>
            <a className = "navbar-Link" href = 'https://docs.nftrees.com/'> Docs </a>
            <p className = 'spacer'/>

            {/* display user address */}
            <p className = "address my-auto"> app </p>

        </nav>
    );
}

export default Navbar;