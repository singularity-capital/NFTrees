import React from 'react';
import './LandingNavbar.css';
import { MdEmail } from 'react-icons/md';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.png';
import {NavDropdown} from 'react-bootstrap';
import {FaTree} from 'react-icons/fa';
import {CgFileDocument} from 'react-icons/cg';
import {FaTwitter, FaGithub, FaDiscord} from 'react-icons/fa';
import {RiDiscordLine} from 'react-icons/ri';
import opensea_logo from '../assets/opensea_logo.png';


class Navbar extends React.Component{
  constructor(props) {
    super(props);

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    // TODO: Fix so menu renders automatically w/out click
    const resourcesToggle = document.getElementById('resources');
    resourcesToggle.click();
    resourcesToggle.click();

    const communityToggle = document.getElementById('community');
    communityToggle.click();
    communityToggle.click();
  }
  render() {
    return(
      <div className = 'navContainer'>
        <div className = 'navbarLeft'>
          <NavLink exact className = 'logo' to = '/'> <img className = 'logoImage' src = {logo} alt = 'logo' width = {50} height = {50}/> <div className = 'landingTitle'>NF<div className = 'split'/>Trees</div></NavLink>
        </div>
        <div className = 'space'/>
        <div className = 'navbarRight'>
          <NavDropdown title="Resources" renderMenuOnMount={true} id="resources" className = 'textLink'>
            <NavDropdown.Item href = "https://offsetra.com/" target = "_blank" onClick={this.donothing}><FaTree style = {{marginRight: '10px'}}/>Offsetra</NavDropdown.Item>
            <NavDropdown.Item href = "https://opensea.io/collection/nftrees-carbon-credits" target = "_blank" onClick={this.donothing}><img src = {opensea_logo} style = {{marginRight: '10px', height: '15px'}}/>Opensea</NavDropdown.Item>
            <NavDropdown.Item href = "https://docs.nftrees.com/" target = "_blank" onClick={this.donothing}><CgFileDocument style = {{marginRight: '10px'}}/>Documention</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Community" id="community" className = 'textLink'>
            <NavDropdown.Item href="https://twitter.com/NFTrees_" target = "_blank"><FaTwitter style = {{marginRight: '10px'}}/>Twitter</NavDropdown.Item>
            <NavDropdown.Item href="https://discord.gg/4Ke8vjmFey" target = "_blank"><FaDiscord style = {{marginRight: '10px'}}/>Discord</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/singularity-capital" target = "_blank"><FaGithub style = {{marginRight: '10px'}}/>Github</NavDropdown.Item>
          </NavDropdown>

          <a className = 'launchButton' href = 'https://app.nftrees.com' rel='noreferrer' target = '_blank'> <div className = 'launchButtonText'> Coming Soon </div> </a>
        </div>
      </div>
    );
  }
}

export default Navbar;