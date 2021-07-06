import React from 'react';
import './Landing.css';
/*
import background from '../assets/background.jpg';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
*/

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
                    Plant trees and offset your emmissions with carbon-negative NFTs.  

                </p>

                <p className = 'comingSoon'>
                        coming soon
                </p>

            </div>
        </div>
    );
}

export default Landing;