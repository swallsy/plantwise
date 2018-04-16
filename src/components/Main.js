import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import AddPlants from './AddPlants.js';
import MyPlants from './MyPlants.js';


const Main = () => (
  <main>
    <AddPlants />
    <MyPlants />
  </main>
)

export default Main;
