import React from "react";
import "./footer.css";
//import Glyphicon from "react-bootstrap/lib/Glyphicon";


const Footer = function(){
    
    return (
            <div className="footerWrapper">
                <div className="iconWrapper">
                    <i className="fa fa-twitter-square"></i>
                    <i className="fa fa-facebook-square"></i>
                    <i className="fa fa-snapchat-square"></i>
                    <i className="fa fa-github"></i>
                    <i className="fa fa-google-plus-square"></i>
                </div>
                <p>MADE BY TUTORIALZINE. IMAGES COURTESY TO UNSPLASH.</p>
            </div>
        );
    
}




export default Footer;