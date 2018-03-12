import React from "react";
import "./work.css";
import Grid from "react-bootstrap/lib/Grid.js";
import Col from "react-bootstrap/lib/Col.js";
import Row from "react-bootstrap/lib/Row.js";
import Image from "react-bootstrap/lib/Image.js";




const Work = function() {
  return (
            <Grid bsClass="workbox">
                <h1>Some Of Our Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi</p>
                <p>vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                <hr/>
                <Row >
                  <Col md={5}>
                    <Image  src="http://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbe0bd1ecfaaa91394e0c9effb8b0415&auto=format&fit=crop&w=1350&q=80"/>
                  </Col>
                  <Col md={7}>
                    <Image  src="http://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ebe04dfc7c0713079bd12e06d35ddec&auto=format&fit=crop&w=1350&q=80"/>
                    
                  </Col>
                </Row>
                
                <Row>
                  <Col md={7}>
                    <Image src="http://images.unsplash.com/photo-1477209560495-270790f2251a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42dc70ee5e560c7e090b959c6c52fbc0&auto=format&fit=crop&w=1050&q=80"/>
                  </Col>
                  
                  <Col md={5}>
                    <Image src="https://images.unsplash.com/photo-1493680772813-f6ffe1e96087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=48fbeaa563bc97f1ae48d872f2a671a2&auto=format&fit=crop&w=1050&q=80"/>
                  </Col>
                
                </Row>
            
            
            
            </Grid>
      );
};




export default Work;