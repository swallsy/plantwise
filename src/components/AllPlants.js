import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import * as firebase from 'firebase';
import { database } from '../App.js';


class AllPlants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: {}
    }
  }

  componentDidMount() {
    var plantsRef = database.ref('/plants');
    plantsRef.on('value', (snapshot) => {
      console.log(snapshot)
      let plantsInfo = snapshot.val();
      this.setState({plants: plantsInfo});
      console.log(this.state.plants);
    })
  }

  render() {
    let plantsToAdd = this.state.plants;
    var plantsDiv = '';
    for (var plant in plantsToAdd) {
      let plantContainer =
      `
      <div className="plantContainer">
        <div className="plantName">${plantsToAdd[plant].plantName}</div>
         <img href="${plantsToAdd[plant].plantImage}"></img>
      </div>
      `
      plantsDiv += plantContainer;
    }



    return (
      `
      <div className="my-plants-container">
        ${plantsDiv}
      </div>
      `
    );
  }
}

export default AllPlants;
