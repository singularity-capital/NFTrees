import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer (props){
    
    
    return(
        <div className = 'footerContainer'>
           <div className = 'footerContent'>
               <div className = 'footerLeft'></div>
               <div className = 'footerRight'></div>
           </div>
        </div>
    );
}

export default Footer;