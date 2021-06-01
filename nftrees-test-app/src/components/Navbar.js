import React from 'react';
import './Navbar.css';
import background from '../background.jpg';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {NavLink} from "react-router-dom";

function Navbar (props){

    return(
        <div className = 'navContainer'>
            <div className = 'navbarLeft'>
            <NavLink exact className = "logo" to = '/'> logo </NavLink>
                <NavLink exact className = "calculateEmissions" to = '/emissions'> Calculate my emissions </NavLink>
            </div>
            <div className = 'space'></div>
            <div className = 'navbarRight'>
                <a className = 'link' href = 'mailto:contact@nftrees.com' target = '_blank'><MdEmail size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
                <a className = 'link' href = 'https://twitter.com/NFTrees_' target = '_blank'><FaTwitter size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
                <a className = 'link' href = 'https://discord.gg/asZ6HNEF' target = '_blank'><FaDiscord size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
            </div>
        </div>
    );
}

export default Navbar;