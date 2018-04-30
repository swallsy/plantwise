import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import ConfirmPlantModal from './ConfirmPlantModal.js';
import ImageUpload from './ImageUpload.js';
import * as firebase from 'firebase';
import { database, storage } from '../App.js';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class AddPlants extends Component {

  constructor(props) {
    //on initialization, renders it to the DOM
    super(props);

    this.state = {
      plantName: '',
      plantImage: {},
      lightNeeds: '',
      waterNeedsSummer: '',
      waterNeedsWinter: '',
      plantNotes: '',
      placementNeeds: [],
      //whatever is in this object is the state of the compontent
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.imageSubmitted = this.imageSubmitted.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
  }

  // Grab the image and upload it to

  imageSubmitted(imgData){

    console.log('this is the imgData', imgData)
    // Add to Firebase storage
    let imgName = imgData.name;
    var imgRef = firebase.storage().ref(imgName);
    var file = imgData;
    console.log('this is this in the beginning of imasgeSubmitted function', this)
    imgRef.put(file).then(function(snapshot) {
    })
    storage.child(imgName).getDownloadURL().then( (url) => {
        this.setState({plantImage: url})
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handlePlacementChange = (directions) => {
        console.log('this is this in the PlacementChange function', this)
    this.setState({placementNeeds: directions})
  }

  handleSubmit(event) {
    let plantName = this.state.plantName;
    let lightNeeds = this.state.lightNeeds;
    let waterNeedsWinter = this.state.waterNeedsWinter;
    let waterNeedsSummer = this.state.waterNeedsSummer;
    let plantNotes = this.state.plantNotes;
    let placementNeeds = this.state.placementNeeds;
    let plantImage = this.state.plantImage;
    console.log('this is the plantImage', plantImage)
    database.ref(`/plants/${plantName}`).set({
      plantName: plantName,
      lightNeeds: lightNeeds,
      waterNeedsWinter: waterNeedsWinter,
      waterNeedsSummer: waterNeedsSummer,
      plantNotes: plantNotes,
      placementNeeds: placementNeeds,
      picture: plantImage,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-plant-container">
        <form className="add-plant-form" onSubmit={this.handleSubmit}>
          <div className="plant-information">

            <div className="left-column">


              <div className="plant-name plant-section">
                <label>Add a New Plant to the Database</label>
                <input
                  onChange={ this.handleChange }
                  name="plantName"
                  type="text"
                  className="text-field" />
              </div>


              <div className="light-requirements plant-section">
                <label>How much light does your plant need daily?</label>
                  <select
                    name="lightNeeds"
                    onChange={ this.handleChange }>
                    <option value="low light">Low Light</option>
                    <option value="low to medium light">Low to Medium Light</option>
                    <option value="medium to high light">Medium to High Light (5-6 Hours)</option>
                    <option value="high light">High Light(6+ Hours)</option>
                  </select>
              </div>

              <div className="placement-requirements plant-section">
                <label>What direction does this plant strive in? Select all that Apply.</label>
                  <CheckboxGroup
                  name="placementNeeds"
                  value={this.state.placementNeeds}
                  onChange={this.handlePlacementChange}
                  checkboxDepth={2}>
                    <label><Checkbox value="North"/>North</label>
                    <label><Checkbox value="East"/>East</label>
                    <label><Checkbox value="South"/>South</label>
                    <label><Checkbox value="West"/>West</label>
                  </CheckboxGroup>
              </div>


              <div className="water-requirements plant-section">
                <label>What are the water needs in the Summer?</label>
                  <select
                    name="waterNeedsSummer"
                    onChange={this.handleChange}>
                    <option value="Every 5 Days">Daily</option>
                    <option value="Every 5 Days">Every 5 Days</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Every 10 Days">Every 10 Days</option>
                    <option value="Monthly">Monthly</option>
                  </select>
              </div>

              <div className="water-requirements plant-section">
                <label>What are the water needs in the Winter?</label>
                  <select
                    name="waterNeedsWinter"
                    onChange={this.handleChange}>
                    <option value="Daily">Daily</option>
                    <option value="Every 5 Days">Every 5 Days</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Every 10 Days">Every 10 Days</option>
                    <option value="Monthly">Monthly</option>
                  </select>
              </div>


              <div className="notes plant-section">
                <label>Additional Notes About this Plant</label>
                <textarea
                  name="plantNotes"
                  value={this.state.value}
                  onChange={this.handleChange}>
                </textarea>
              </div>

            </div>
            <div className="right-column">
              <ImageUpload passThroughImage={this.imageSubmitted} />
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
          placementNeeds={this.state.placementNeeds}
          waterNeedsWinter={this.state.waterNeedsWinter}
          waterNeedsSummer={this.state.waterNeedsSummer}
          plantNotes={this.state.plantNotes}
          />
      </div>
    );
  }
}

export default AddPlants;
