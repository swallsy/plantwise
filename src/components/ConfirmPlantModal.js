import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import AddPlants from './AddPlants.js';
// import * as firebase from 'firebase';
// import { database } from '../App.js';

class ConfirmPlantModal extends Component {


  render() {
    return (
      <div className="confirm-plant-modal">
        <div className="plant-row">
          <h2>{this.props.plantName}</h2>
          <p>{this.props.lightNeeds} </p>
        </div>
      </div>
    )
  };
}

export default ConfirmPlantModal;
