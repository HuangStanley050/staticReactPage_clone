import React from "react";
import "./join.css";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Button from "react-bootstrap/lib/Button";

import FormControl from "react-bootstrap/lib/FormControl";


const Join = function(){
    return (
        
            <Jumbotron className="join">
                <h1>Join our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi</p>
                <p>vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                <hr/>
                <div className="formContain">
                    <form>
                        <FormControl
                        type="text"
                   
                        placeholder="Enter text"
                        className="textbox"
                    
                         />
                    </form>
                    <Button bsStyle="primary">
                     <span>Subscribe Now</span>
                    </Button>
                    
                 
                  
                </div>
            </Jumbotron>
        
        );
    
}

export default Join;