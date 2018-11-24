import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { fetchPlants } from './actions/fetchPlants.js';

// initialize Firebase
var config = {
  apiKey: "AIzaSyDbXa4QsNbvqNlgalJK8RusQwGH6wSP-Bc",
  authDomain: "plantwise-2d159.firebaseapp.com",
  databaseURL: "https://plantwise-2d159.firebaseio.com",
  projectId: "plantwise-2d159",
  storageBucket: "plantwise-2d159.appspot.com",
  messagingSenderId: "417967778433"
};

firebase.initializeApp(config);

export var database = firebase.database();
export var storage = firebase.storage().ref();

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 fetchPlants: () => dispatch(fetchPlants())
})

const fetchPlantsAction = (event) => {
  this.props.fetchPlants();
}

const App = () => (
  <div className="app">
    <pre>{JSON.stringify(this.props)}</pre>
    <button onClick={this.fetchPlants}>Test Redux</button>
    // <Main />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
