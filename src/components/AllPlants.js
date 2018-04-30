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
      let plantsInfo = snapshot.val();
      this.setState({plants: plantsInfo});
    })
  }



  render() {
      function markup() {
        let plantsToAdd = this.state.plants;
          return (
              <div>
              (Object.keys(plantsToAdd).map(function (plant, index) {
                  <div className="plantContainer">
                    <div className="plantName">{JSON.stringify(plantsToAdd[plant]["plantName"])}</div>
                     <img src='{JSON.stringify(plantsToAdd[plant]["plantImage"])}'></img>
                  </div>
              })
              </div>
          )
      }
    return (
      <div className="my-plants-container">
         {markup()}
      </div>
    );
  }
}

export default AllPlants;
