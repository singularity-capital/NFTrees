import React from 'react';
import './Landing.css';
import background from '../background.jpg';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
                <div className = 'links'>
                    <a className = 'link'><FaTwitter size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
                    <a className = 'link'><FaDiscord size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
                </div>
                <div className = 'spacer'/>
                <div className = 'title'>NFTrees</div>
                <div className = 'underlineContainer'>
                    <div className = 'underline'></div>
                </div>
                <p className = 'information'>
                    The first NFT-based carbon credit platform.
                    <br></br>
                    Bringing verifiable carbon capture to the cryptocurrency space.
                    <br></br>
                    Displace your protocol's carbon emmissions with NFTrees.  

                </p>

                <p className = 'comingSoon'>
                        coming soon
                </p>
                <p className = 'contact'>contact us at team@NFTrees.com</p>

            </div>
        </div>
    );
}

export default Landing;