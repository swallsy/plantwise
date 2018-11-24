import * as types from './actionTypes.js';
import * as firebase from 'firebase';
import { database } from '../App.js';
import { FETCH_PLANTS } from './actionTypes.js';


export const fetchPlants = () => dispatch => {
 dispatch({
  type: 'FETCH_PLANTS',
  payload: 'result_of_simple_action'
 })
}
