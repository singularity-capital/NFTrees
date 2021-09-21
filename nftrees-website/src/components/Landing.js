import React from 'react';
import './Landing.css';

class Landing extends React.Component{

  render() {
    return(
      <div className = 'landingContainer' id = 'landing'>
        <div className = 'landingContent'>
          <div className = 'spacer'/>
          <div className = 'title'>Carbon Credits,<br></br>Tokenized</div>
          <div className = 'underlineContainer'>
            <div className = 'underline'></div>
          </div>
          <p className = 'information'>
            Bridging the gap between crypto and the carbon markets.
            <br></br>
            Plant trees and offset your emissions with carbon-negative NFTs.  
          </p>
  
          <div className = 'buttonContainer'>
            <div className = 'landingButton' href = 'https://app.nftrees.com' rel='noreferrer' target = '_blank'> <div className = 'landingButtonText'> Coming Soon </div> </div>
            <a className = 'landingButton' href = 'https://docs.nftrees.com' rel='noreferrer' target = '_blank'> <div className = 'landingButtonText'> Documentation </div> </a>
          </div>
        
        </div>
        <div className = 'nftreeStats'>
          <div className = 'statCol'>
            NFTrees Minted
            <br></br>
            <div className = 'statValue'>0</div>
          </div>
          <div className = 'statCol'>
            Carbon Offset
            <br></br>
            <div className = 'statValue'>0 kg</div>
          </div>
          <div className = 'statCol'>
            Trees Planted
            <br></br>
            <div className = 'statValue'>0</div>
          </div>
        </div>
        <a className = 'attribution' href="https://www.vecteezy.com/free-vector/forest" rel='noreferrer' target = '_blank'>Forest Vectors by Vecteezy</a>
      </div>
    );
  }
}

export default Landing;