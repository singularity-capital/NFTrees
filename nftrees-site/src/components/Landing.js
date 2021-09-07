import React from 'react';
import './Landing.css';
import {NavLink} from "react-router-dom";

function Landing (props){

  return(
    
    <div className = 'landingContainer' id = 'landing'>
      <div className = 'landingContent'>
        <div className = 'spacer'/>
        <div className = 'title'>NFTrees</div>
        <div className = 'underlineContainer'>
          <div className = 'underline'></div>
        </div>
        <p className = 'information'>
          The first NFT-backed carbon capture platform.
          <br></br>
          Bringing verifiable carbon credits to the cryptocurrency space.
          <br></br>
          Plant trees and offset your emissions with carbon-negative NFTs.  
        </p>

        <div className = 'buttonContainer'>
          <NavLink exact className = 'landingButton' to = '/home'> <div className = 'landingButtonText'> Learn more </div> </NavLink>
          {/*<button className = 'landingButton'> App coming soon </button>*/}
        </div>

      </div>
    </div>
  );
}

export default Landing;