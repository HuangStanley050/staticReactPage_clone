import React, { Component } from 'react';
import Work from "./components/work.js";
import './App.css';
//import NavigationBar from "./components/navbar.js";
import Header from "./components/header.js";
import Feature from "./components/feature.js"
import Other from "./components/other.js";
import Join from "./components/join.js";
import Footer from "./components/footer.js"


class App extends Component {
  render() {
    
    return (
        <div>
          <Header />
          <Work />
          <Feature />
          <Other />
          <Join />
          <Footer />
        </div>
        
        
        
        );
  }
}

export default App;
