import React from 'react';
import './LandingNavbar.css';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.png';
import {NavDropdown} from 'react-bootstrap';
import {FaTree} from 'react-icons/fa';
import {CgFileDocument} from 'react-icons/cg';
import {FaTwitter, FaGithub, FaDiscord} from 'react-icons/fa';
import opensea_logo from '../assets/opensea_logo.png';


class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isResourcesOpen: false }
    this.state = { isCommunityOpen: false }
  }

  handleResourcesOpen = () => {
    this.setState({ isResourcesOpen: true })
  }

  handleResourcesClose = () => {
     this.setState({ isResourcesOpen: false })
  }

  handleCommunityOpen = () => {
    this.setState({ isCommunityOpen: true })
  }

  handleCommunityClose = () => {
     this.setState({ isCommunityOpen: false })
  }

  render() {
    return(
      <div className = 'navContainer'>
        <div className = 'navbarLeft'>
          <NavLink exact className = 'logo' to = '/'> <img className = 'logoImage' src = {logo} alt = 'logo' width = {50} height = {50}/> <div className = 'landingTitle'>NF<div className = 'split'/>Trees</div></NavLink>
        </div>
        <div className = 'space'/>
        <div className = 'navbarRight'>
          <NavDropdown title="Resources" renderMenuOnMount={true} id="resources" className = 'textLink' onMouseEnter = {this.handleResourcesOpen} onMouseLeave = { this.handleResourcesClose } show={this.state.isResourcesOpen}>
            <NavDropdown.Item href = "https://offsetra.com/" target = "_blank"><FaTree style = {{marginRight: '10px'}}/>Offsetra</NavDropdown.Item>
            <NavDropdown.Item href = "https://opensea.io/collection/nftrees-carbon-credits" target = "_blank"><img src = {opensea_logo} alt = 'OpenSea' style = {{marginRight: '10px', height: '15px'}}/>OpenSea</NavDropdown.Item>
            <NavDropdown.Item href = "https://docs.nftrees.com/" target = "_blank"><CgFileDocument style = {{marginRight: '10px'}}/>Documention</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Community" id="community" className = 'textLink' onMouseEnter = {this.handleCommunityOpen} onMouseLeave = { this.handleCommunityClose } show={this.state.isCommunityOpen}>
            <NavDropdown.Item href="https://twitter.com/NFTrees_" target = "_blank"><FaTwitter style = {{marginRight: '10px'}}/>Twitter</NavDropdown.Item>
            <NavDropdown.Item href="https://discord.gg/4Ke8vjmFey" target = "_blank"><FaDiscord style = {{marginRight: '10px'}}/>Discord</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/singularity-capital" target = "_blank"><FaGithub style = {{marginRight: '10px'}}/>Github</NavDropdown.Item>
          </NavDropdown>

          <div className = 'launchButton' href = 'https://app.nftrees.com' rel='noreferrer' target = '_blank'> <div className = 'launchButtonText'> Coming Soon </div> </div>
        </div>
      </div>
    );
  }
}

export default Navbar;