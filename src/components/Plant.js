import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import * as firebase from 'firebase';
import { database } from '../App.js';

class Plants extends Component {

  render() {
    return (
      <div class="plant">

        <img src={plant.plantImage} class="plant-picture" />
        <div class="plant-name">{plant.plantName}</div>
      </div>
    )
  }
}

export default Plants;
