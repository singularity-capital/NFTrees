import React from 'react';
import './Home.css';
import bannerImage from '../assets/banner_image_1.jpg';
import monkeyImage from '../assets/monkey.jpeg';
import amazonImage from '../assets/amazon.jpeg';

function Home (props){
    return(

        <div className = 'homeContainer'>
            <div className = 'bannerTop'>
                NFTrees is an organization that strives to create 
                meaningful change in our environment, today.
            </div>

            <div className = 'line'/>

            <div className = 'contentTop'> 
                <div className = 'contentText'>
                    <div className = 'contentWrapperHome'>
                        <p className = 'contentHeader'> What we do </p>
                        <p className = 'contentParagraph'>
                            Our platform functions as the bridge between Web3 and the carbon markets, 
                            enabling on-chain liquidity to have a direct and immediate impact on Earth's 
                            most valuable ecosystems. <br/> <br/> By giving individuals the power to purchase NFT-backed 
                            carbon credits with their crypto assets, NFTrees is able to effectively combat climate 
                            change by offsetting carbon emissions, planting trees, and spreading awareness.
                        </p>
                    </div>
                </div>

                <div className = 'homeSpacer'/>

                <div className = 'contentImage'> <img className = 'contentImageImg' src = {amazonImage} height = {350} width = {500}/> </div>
            </div>

            <div className = 'contentBottom'>
                <div className = 'contentImage'> <img className = 'contentImageImg' src = {monkeyImage} height = {350} width = {500}/> </div>
                
                <div className = 'homeSpacer'/>

                <div className = 'contentText'> 
                    <div className = 'contentWrapperHome'>
                        <p className = 'contentHeader'> Our platform </p>
                        <p className = 'contentParagraph'>
                            NFTrees are the first NFT-backed carbon credits available to the blockchain space. 
                            This allows anyone with a Web3 wallet to purchase retired carbon credits and offset 
                            their emissions. <br/> <br/> After an NFTree is purchased, our smart contract will mint you an NFTree that represents
                            your carbon offset. Once a week, our organization will convert these cryptocurrencies to USD fiat to
                            purchase carbon credits and plant trees.
                        </p>
                    </div>
                </div>

            </div>

            <div className = 'bannerBottom'>
                <div className = 'bannerBottomText'> Go carbon negative with NFTrees </div>
                <a className = 'bannerBottomButton'> 
                    <div className = 'bannerBottomButtonText'> Get Started </div>
                </a>
            </div>
        </div>
    );
}

export default Home;
