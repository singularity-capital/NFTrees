import React from 'react';
import './LandingNavbar.css';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo_white.png';

function Navbar (props){

  return(
    <div className = 'navContainer'>
      <div className = 'navbarLeft'>
        <NavLink exact className = 'logo' to = '/'> <img className = 'logoImage' src = {logo} alt = 'logo' width = {50} height = {50}/> </NavLink>
        <NavLink exact activeClassName = 'active-navbar-Link' className = 'textLink' to = '/home'> HOME </NavLink>
        <NavLink exact activeClassName = 'active-navbar-Link' className = 'textLink' to = '/about'> ABOUT </NavLink>
        <a className = 'textLink' href = 'https://docs.nftrees.com' rel='noreferrer' target = '_blank'> DOCS </a>
        {/*<NavLink exact className = 'textLink' to = '/emissions'> CALCULATE EMISSIONS </NavLink>*/}
      </div>
      <div className = 'space'/>
      <div className = 'navbarRight'>
        <a className = 'logoLink' href = 'mailto:contact@nftrees.com' rel='noreferrer'><MdEmail size={30} fill = {'#fff'} className = 'icon'/></a>
        <a className = 'logoLink' href = 'https://twitter.com/NFTrees_' rel='noreferrer' target = '_blank'><FaTwitter size={30} fill = {'#fff'} className = 'icon'/></a>
        <a className = 'logoLink' href = 'https://discord.gg/4Ke8vjmFey' rel='noreferrer' target = '_blank'><FaDiscord size={30} fill = {'#fff'} className = 'icon'/></a>
      </div>
    </div>
  );
}

export default Navbar;