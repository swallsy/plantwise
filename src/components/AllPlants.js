import React, { Component } from 'react';
import '../App.css';
import App from '../App.js';
import * as firebase from 'firebase';
import { database } from '../App.js';


class AllPlants extends Component {
  constructor(props) {

    super(props);

    this.state = {
      plantsData: {}
    }
    this.deletePlant = this.deletePlant.bind(this);
  }

  deletePlant(e) {
    let keyToDelete = e.target.id;
    database.ref(`/plants/${keyToDelete}`).remove();
  }


  componentDidMount() {
    // get the plant data from the database
    var plantsRef = database.ref('/plants');
    plantsRef.on('value', (snapshot) => {
      let plantsInfo = snapshot.val();
      this.setState({plantsData: plantsInfo})
    })
  }

  render() {
    const plants = this.state.plantsData;
    return (

      <div className="all-plants-container section">
        <h2>Your Plants</h2>
        { Object.keys(plants).map((plant) => {
          let plantKey = plant;
          plant = plants[plant]
          return(
            <div className="individual-plant-container">
              <h3>{plant.plantName}</h3>
              <div className="plant-info">
                <div className="col-1">
                  <div className="image-container">
                    <div className="actions-container">
                      <button
                        id={plantKey}
                        onClick={((e) => { this.deletePlant(e) })}
                        className="btn">Delete Plant
                      </button>
                      <button className="btn">Edit Plant</button>
                    </div>
                    <img src={plant.picture} className="plant-picture"/>
                    </div>
                </div>
                <div className="col-2">
                  <div className="light-needs">
                    <h4>Light Needs</h4>
                    <div>{plant.lightNeeds}</div>
                  </div>
                  <div className="water-needs">
                    <h4>Water Needs</h4>
                    <div>{plant.waterNeedsSummer}</div>
                  </div>
                  <div className="hardiness-zones">
                    <h4>Hardiness Zone Range</h4>
                    <div className="zone-range">{plant.hardinessMin} - {plant.hardinessMax}</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="plant-notes">
                    <h4>Notes</h4>
                    <div>{plant.plantNotes}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}

export default AllPlants;
