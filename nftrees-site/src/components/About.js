import React from 'react';
import './About.css';

function About (props){
    
    
    return(
        <div className = 'aboutContainer'>
            <div className = 'bannerTopAbout'> 
                <p className = 'bannerTopTextAbout'> ABOUT </p>
            </div>

            <div className = 'paragraphContainerAbout'>
                <p className = 'paragraph'>
                    We founded NFTrees because climate change affects everyone, 
                    and we must solve it together. Our organization is composed of environmentalists, 
                    developers, and entrepreneurs who are passionate about making a meaningful impact. 
                    NFTrees is taking the initiative to combat the rapid increase in carbon emissions by 
                    enabling on-chain liquidity to be directed at high-impact carbon sequestration projects.
                </p>
            </div>

            <div className = 'contentTopAbout'>
                <div className = 'contentTextAbout'>
                    <div className = 'contentWrapper'>
                        <p> The base-level NFTree costs $10 and represents the following: </p>
                        <ul>
                            <li> 1 tonne of carbon offset </li>
                            <li> 1 tree planted </li>
                            <li> NFT mint/transfer emissions offset </li>
                        </ul>
                        <p>
                            Higher-level NFTrees are scaled versions of the above and represent larger environmental contributions. 
                            <br/><br/>
                            An additional 5% will be added to cover business expenses.
                        </p>
                        
                    </div>
                </div>

                <div className = 'aboutSpacer'/>

                <div className = 'contentImageAbout'/>

            </div>

            <div className = 'bannerMiddleAbout'>
                <p className = 'bannerMiddleTextAbout'> 
                    NFTrees are the first NFT-backed carbon credits 
                    available to the blockchain space. 
                </p>
            </div>

            <div className = 'paragraphContainerAbout'>
                <p className = 'paragraph'>
                    Unlike other projects who mint a limited number of NFTs to create 
                    value in the secondary market, our platform has an uncapped supply of NFTrees. 
                    Our non-fungible tokens provide value in verifiable environmental impact rather 
                    than rarity and exclusivity. This means there is no limit to the amount of carbon-negative 
                    NFTrees that can be purchased, and no limit to the number of emissions our platform can offset!
                </p>
            </div>

            <div className = 'paragraphContainerAbout'>
                <p className = 'paragraph'>
                    We are providing a solution for Web3 users to have a tangible, 
                    positive impact on the environment through the purchase of NFTrees. 
                    To help us achieve these goals, we are working with trustworthy and 
                    credible organizations that have extensive experience in the environmental 
                    industry. NFTrees is partnering with <a className = 'aboutLink' href = 'https://pachama.com/' rel='noreferrer' target = '_blank'>Pachama</a> to
                    acquire carbon credits and <a className = 'aboutLink' href = 'https://www.arborday.org/' rel='noreferrer' target = '_blank'>Arbor Day Foundation</a> to
                    plant trees. If you are interested in learning more you can read our docs <a className = 'aboutLink' href = 'https://docs.nftrees.com/' rel='noreferrer' target = '_blank'>here</a>.
                </p>
            </div>

            <div className = 'bannerBottomAbout'> 
                <p className = 'bannerBottomTextAbout'>
                    The Earth is our home, and we must 
                    work together to protect it.
                </p>
            </div>

        </div>
    );
}

export default About;