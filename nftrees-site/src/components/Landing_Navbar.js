import React from 'react';
import './Landing_Navbar.css';
import background from '../assets/background.jpg';
import { FaCopy, FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo_white.png';

function Navbar (props){

    return(
        <div className = 'navContainer'>
            <div className = 'navbarLeft'>
                <NavLink exact className = "logo" to = '/'> <img className = 'logoImage' src = {logo} alt = "logo" width = {50} height = {50}/> </NavLink>
                <NavLink exact className = "textLink" to = '/emissions'> CALCULATE EMISSIONS </NavLink>
                <a className = 'textLink' href = 'https://docs.nftrees.com' target = '_blank'> DOCS </a>
            </div>
            <div className = 'space'/>
            <div className = 'navbarRight'>
                <a className = 'logoLink' href = 'mailto:contact@nftrees.com'><MdEmail size={30} fill = {'#fff'} className = 'icon'/></a>
                <a className = 'logoLink' href = 'https://twitter.com/NFTrees_' target = '_blank'><FaTwitter size={30} fill = {'#fff'} className = 'icon'/></a>
                <a className = 'logoLink' href = 'https://discord.gg/4Ke8vjmFey' target = '_blank'><FaDiscord size={30} fill = {'#fff'} className = 'icon'/></a>
            </div>
        </div>
    );
}

export default Navbar;