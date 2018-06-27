import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <main>
        <div class="mysite">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron1</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        <div class="fuse">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron2</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        <div class="blog">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron3</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default NavBar;
