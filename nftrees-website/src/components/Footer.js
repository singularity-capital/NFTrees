import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import {NavLink} from "react-router-dom";

function Footer (props){
    
    
  return(
    <div className = 'footerContainer'>
      <div className = 'footerContent'>
        <div className = 'footerLeft'>
          <div className = 'footerImage'>
            <img className = 'footerImageImg' alt = '' src = {logo} height = {150} width = {150}/>
          </div>
        </div>

        <div className = 'footerRight'>
          <div className = 'footerCol'>
            <h1 className = 'footerHeader'> PAGES </h1>
            <div className = 'footerLinkContainer'>
                <NavLink exact className = 'footerLink' to = '/'> Landing </NavLink>
                <NavLink exact className = 'footerLink' to = '/home'> Home </NavLink>
                <NavLink exact className = 'footerLink' to = '/about'> About </NavLink>
                <a className = 'footerLink' href = 'https://docs.nftrees.com' rel='noreferrer' target = '_blank'>Docs </a>
            </div>
          </div>
          <div className = 'footerCol'>
            <h1 className = 'footerHeader'> APP </h1>
            <div className = 'footerLinkContainer'>
                <a className = 'footerLink'> Coming soon </a>
                {/*<a className = 'footerLink'> Plant </a>
                <a className = 'footerLink'> Dashboard </a>
                <a className = 'footerLink'> Wallet </a>*/}
            </div>
          </div>
          <div className = 'footerCol'>
            <h1 className = 'footerHeader'> SOCIALS </h1>
            <div className = 'footerLinkContainer'>
              <a className = 'footerLink' href = 'https://twitter.com/NFTrees_' rel='noreferrer' target = '_blank'> Twitter </a>
              <a className = 'footerLink' href = 'https://discord.gg/4Ke8vjmFey' rel='noreferrer' target = '_blank'> Discord </a>
              <a className = 'footerLink' href = 'mailto:contact@nftrees.com' rel='noreferrer'> Email </a>
            </div>
          </div>
          <div className = 'footerCol'>
            <h1 className = 'footerHeader'> OTHER </h1>
            <div className = 'footerLinkContainer'>
                <a className = 'footerLink' href = 'https://pachama.com/' rel='noreferrer' target = '_blank'> Pachama </a>
                <a className = 'footerLink' href = 'https://www.arborday.org/' rel='noreferrer' target = '_blank'> Arbor Day </a>
                <a className = 'footerLink' href = 'https://opensea.io/collection/nftrees-carbon-credits' rel='noreferrer' target = '_blank'> Open Sea </a>
                <a className = 'footerLink'> Contracts </a>
            </div>
          </div>
        </div>
      </div>
      <div className = 'copyright'> Copyright © 2021 NFTrees. All rights reserved. </div>
    </div>
  );
}

export default Footer;