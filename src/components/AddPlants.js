import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import ConfirmPlantModal from './ConfirmPlantModal.js';
import ImageUpload from './ImageUpload.js';
import * as firebase from 'firebase';
import { database } from '../App.js';

class AddPlants extends Component {

  constructor(props) {
    //on initialization, renders it to the DOM
    super(props);

    this.state = {
      plantName: '',
      plantPicture: '',
      lightNeeds: '',
      waterNeeds: '',
      lastWatered: ''
      //whatever is in this pbject is the state of the compontent
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    let plantName = this.state.plantName;
    let lightNeeds = this.state.lightNeeds;
    database.ref(`plant/${plantName}`).set({
      plantName: plantName,
      lightNeeds: lightNeeds
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-plant-container">
        <form className="add-plant-form" onSubmit={this.handleSubmit}>
          <div className="plant-information">
            <div className="left-column">
              <div className="plant-name">
                <label>What's the name of your plant?</label>
                <input
                  onChange={ this.handleChange }
                  name="plantName"
                  type="text"
                  className="text-field" />
              </div>
              <div className="light-requirements">
                <label>How much light does your plant need?</label>
                  <select
                    name="lightNeeds"
                    onChange={ this.handleChange }>
                    <option value="low light">Low Light</option>
                    <option value="low to medium light">Low to Medium Light</option>
                    <option value="medium to high light">Medium to High Light</option>
                    <option value="high light">High Lights</option>
                  </select>
              </div>
            </div>
            <div className="right-column">
              <ImageUpload />
            </div>
          </div>
          <div className="submission-section">
            <input
              className="submit-button"
              type="submit"
              value="Submit">
            </input>
          </div>
        </form>
        <ConfirmPlantModal
          plantName={this.state.plantName}
          plantPicture={this.state.plantPicture}
          lightNeeds={this.state.lightNeeds}
          />
      </div>
    );
  }
}

export default AddPlants;
