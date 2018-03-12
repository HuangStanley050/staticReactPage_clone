import React from 'react';
import './header.css';
import Jumbotron from "react-bootstrap/lib/Jumbotron";
//import Grid from "react-bootstrap/lib/Grid";
import NavigationBar from "./navbar.js";
import Button from "react-bootstrap/lib/Button";

class Header extends React.Component{
    render() {
        return (
          
            <Jumbotron className="head">
              
              <NavigationBar />
              
              <div className="containment">
               <h1>Responsive Flexbox Template</h1>
         
               <h3>A freebie by Tutorialzine</h3>
               <Button bsStyle="primary" bsSize="large">
                Download it Here
               </Button>
              </div>
              
              
              
                
                    
            </Jumbotron>
         
        );
    }
}

export default Header;
