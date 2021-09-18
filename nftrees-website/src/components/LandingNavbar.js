import React from 'react';
import './LandingNavbar.css';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar (props){

  return(
    <div className = 'navContainer'>
      <div className = 'navbarLeft'>
        <NavLink exact className = 'logo' to = '/'> <img className = 'logoImage' src = {logo} alt = 'logo' width = {50} height = {50}/> <div className = 'landingTitle'>NF<div className = 'split'/>Trees</div></NavLink>
      </div>
      <div className = 'space'/>
      <div className = 'navbarRight'>
        <NavLink exact activeClassName = 'active-navbar-Link' className = 'textLink' to = '/about'> Resources </NavLink>
        <a className = 'textLink' href = 'https://app.nftrees.com' rel='noreferrer' target = '_blank'> Community </a>
        <a className = 'launchButton' href = 'https://app.nftrees.com' rel='noreferrer' target = '_blank'> <div className = 'launchButtonText'> Launch </div> </a>
      </div>
    </div>
  );
}

export default Navbar;