import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import * as firebase from 'firebase';
import { database } from '../App.js';


class MyPlants extends Component {

  render() {
    return (
      <div className="my-plants-container">
        <div className="plant-1"></div>
        <div className="plant-2"></div>
        <div className="plant-3"></div>
        <div className="plant-4"></div>
      </div>
    );
  }
}

export default MyPlants;
