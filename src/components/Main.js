import React, { Component } from 'react';
import '../styles/Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <div className="app-bar">
          <h2>Syno Down App</h2>
        </div>
        <div className="main-container container">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}

export default Main