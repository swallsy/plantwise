import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import AddPlants from './AddPlants.js';
import AllPlants from './AllPlants.js';


const Main = () => (
  <main>
    <AddPlants />
    <AllPlants />
  </main>
)

export default Main;
