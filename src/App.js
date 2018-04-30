import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import * as firebase from 'firebase';

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

const App = () => (
  <div className="app">
    <Main />
  </div>
)

export default App;
