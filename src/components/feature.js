import React from "react";
import "./feature.css";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Glyphicon from "react-bootstrap/lib/Glyphicon";


class Feature extends React.Component{
    
    render(){
        
        return (
                <Jumbotron className="feature">
                    <Grid>
                        <h1>Features and Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi </p>
                        <p>vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                        <hr/>
                        
                        <Row>
                            <Col className="first"md={4}>
                                <div>
                                    <h1><Glyphicon glyph="camera" /></h1>
                                    <h3>Photography</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <p>Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                                    
                                </div>
                            </Col>
                            
                            <Col className="first"md={4}>
                                <div>
                                    <h1><Glyphicon glyph="console" /></h1>
                                    <h3>Web Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum </p>
                                    <p>bibendum ultrices vitae pulvinar velit.</p>
                                </div>
                            
                            </Col>
                            
                            <Col className="first"md={4}>
                                <div>
                                    <h1><Glyphicon glyph="file"/></h1>
                                    <h3>Content Editing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum </p>
                                    <p>bibendum ultrices vitae pulvinar velit.</p>
                                </div>
                            
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            
            
            
            );
        
    }
}


export default Feature;