import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
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
      plantImage: '',
      lightNeeds: '',
      waterNeedsSummer: '',
      waterNeedsWinter: '',
      plantNotes: '',
      placementNeeds: [],
      hardinessZoneMax: '',
      hardinessZoneMin: '',
      attractsButterflies: false,
      attractsBees: false,
      attractsHummingbirds: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.imageSubmitted = this.imageSubmitted.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture)
      });
  }

  // Grab the image and upload it to

  addToState(imgName) {

  }

  imageSubmitted(imgData){
    // Add to Firebase storage
    let imgName = imgData.name;
    var imgRef = firebase.storage().ref(imgName);
    var file = imgData;
    imgRef.put(file).then((snapshot) =>  {
      console.log('this image has been added!');
      storage.child(imgName).getDownloadURL().then( (url) => {
          this.setState({plantImage: url})
      });
    })

  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value});
  }

  clearForm = () => {
    var form = document.getElementById("add-plant-form");
    form.reset();
    this.setState({
      plantName: '',
      plantImage: '',
      lightNeeds: '',
      waterNeedsSummer: '',
      plantNotes: '',
      hardinessZoneMax: '',
      hardinessZoneMin: '',
      attractsButterflies: null,
      attractsHummingbirds: null,
      attractsBees: null
    });
  }

  handleSubmit(event) {
    let plantName = this.state.plantName;
    let lightNeeds = this.state.lightNeeds;
    let waterNeedsWinter = this.state.waterNeedsWinter;
    let waterNeedsSummer = this.state.waterNeedsSummer;
    let plantNotes = this.state.plantNotes;
    let placementNeeds = this.state.placementNeeds;
    let plantImage = this.state.plantImage;
    let hardinessZoneMax = this.state.hardinessZoneMax;
    let hardinessZoneMin = this.state.hardinessZoneMin;
    let attractsButterflies = this.state.attractsButterflies;
    let attractsBees = this.state.attractsBees;
    let attractsHummingbirds = this.state.attractsHummingbirds;
    database.ref('/plants').push({
      plantName: plantName,
      lightNeeds: lightNeeds,
      waterNeedsSummer: waterNeedsSummer,
      plantNotes: plantNotes,
      picture: plantImage,
      hardinessMin: hardinessZoneMin,
      hardinessMax: hardinessZoneMax,
      attractsButterflies: attractsButterflies,
      attractsBees: attractsBees,
      attractsHummingbirds: attractsHummingbirds
    });
    this.clearForm();
  }

  render() {
    return (
      <div className="add-plant-container section">
        <h2>Add A Plant</h2>
        <div className="plant-info-wrapper">
          <form id="add-plant-form" className="add-plant-form" onSubmit={this.handleSubmit}>
            <div className="plant-information">

              <div className="left-column">

                <div className="plant-name plant-section">
                  <label>Plant Name</label>
                  <input
                    onChange={ this.handleChange }
                    name="plantName"
                    type="text"
                    className="text-field" />
                </div>

                <div className="hardiness plant-section">
                  <label>What is the lowest zone this plant is hardy to?</label>
                    <select
                      name="hardinessZoneMin"
                      onChange={ this.handleChange }>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <span>  to  </span>
                    <select
                      name="hardinessZoneMax"
                      onChange={ this.handleChange }>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                </div>


                <div className="light-requirements plant-section">
                  <label>How much light does your plant need daily?</label>
                    <select
                      name="lightNeeds"
                      onChange={ this.handleChange }>
                      <option value="Full Shade (little to 3 hours a day)">Full Shade</option>
                      <option value="Partial Sun (Less than 5 hours a day)">Partial Sun</option>
                      <option value="Partial Shade (5-6 hours a day)">Partial Shade (5-6 Hours)</option>
                      <option value="Full Sun (6+ hours a day)">Full Sun(6+ Hours)</option>
                    </select>
                </div>


                <div className="water-requirements plant-section">
                  <label>What are the water requirements?</label>
                    <select
                      name="waterNeedsSummer"
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
                <div className="attracts-section">
                  <h4>What does the plant attract?</h4>
                    <div className="attract-options">
                      <input
                        name="attractsButterflies"
                        type="checkbox"
                        checked={this.state.attractsButterflies}
                        onChange={this.handleChange}
                      />
                      <label>Butterflies</label>

                      <input
                        name="attractsHummingbirds"
                        type="checkbox"
                        checked={this.state.attractsHummingbirds}
                        onChange={this.handleChange}
                      />
                      <label>Hummingbirds</label>

                      <input
                        name="attractsBees"
                        type="checkbox"
                        checked={this.state.attractsBees}
                        onChange={this.handleChange}
                      />
                      <label>Bees</label>
                    </div>
                </div>
              </div>
            </div>

            <div className="submission-section">
              <input
                className="submit-button btn"
                type="submit"
                value="Submit"
                name="submitButton"
                >
              </input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPlants;
