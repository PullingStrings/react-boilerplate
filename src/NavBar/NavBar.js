import React, { Component } from 'react';
import './NavBar.css';
import { Motion, spring } from 'react-motion';

class NavBar extends Component {
  state = {
    height: 38
  };

  animate = () => {
    this.setState(state => ({ height: state.height === 233 ? 38 : 233 }));
  };

  render() {
    return (
      <main>
        <div className="mysite">
          <div style={styles.mysite}>
            <div class="container">
              <div style={styles.button} onClick={this.animate}>
                Animate
              </div>
            </div>
          </div>
        </div>
        <Motion style={{ height: spring(this.state.height) }}>
          {({ height }) => (
            <div style={Object.assign({}, styles.menu, { height })}>
              <div className="mysite-info">
                <div class="container">
                  <h1 class="display-4">My site information </h1>
                  <p class="lead">
                    This is where my site information will stay
                  </p>
                </div>
              </div>
            </div>
          )}
        </Motion>
      </main>
    );
  }
}

const styles = {
  mysite: {
    backgroundColor: '#ffa5003b',
    height: '20rem',
    display: 'block',
    position: 'relative'
  },

  menu: {
    height: '20rem',
    position: 'relative',
    top: '-20rem',
    backgroundColor: 'blue',
    alignItems: 'center'
  },
  selection: {
    padding: 10,
    margin: 0,
    borderBottom: '1px solid #ededed'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 200,
    height: 45,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffc107'
  }
};

export default NavBar;
