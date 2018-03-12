import React from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Grid from 'react-bootstrap/lib/Grid';
import './navbar.css'



class NavigationBar extends React.Component {


  render() {


    return (
      
      <Grid>
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Website Logo</a>
      </Navbar.Brand>
    </Navbar.Header>
    
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
      <NavItem eventKey={2} href="#">
        Products
      </NavItem>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Contacts
      </NavItem>
  
      
    </Nav>
  </Navbar>
  </Grid>








    );

  }



}


export default NavigationBar;
