import React, { Component } from 'react';
import './App.css';

const fStyle = {
  position: 'fixed',
  bottom: "0",
  fontSize: '10px',
  color: 'gray'
};

class Foot extends Component {

render() {
    return (
      <p style={fStyle}>  Copyright © 2018. vuk  </p>
    );
  }
}

export default Foot;
