// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the About component to be used below
import About from './About/About'
// Import the NavBar component to be used below
import NavBar from './NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="">
          <NavBar />
          <About />
        </div>
    );
  }
}

export default App;
