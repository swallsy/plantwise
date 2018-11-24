import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import AddPlants from './AddPlants.js';
import AllPlants from './AllPlants.js';
import Header from './Header.js';

class Main extends Component {
    render() {
        return (
            <main>
              <Header />
              <AddPlants />
              <AllPlants />
            </main>
        )
    }
}

export default Main;
