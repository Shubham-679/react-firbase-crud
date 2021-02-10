import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase'

function postReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_POST':
        return  [action.payload]
      case 'GET_POST':
        return [action.payload]
      case 'UPDATE_POST':
        return  []
      case 'REMOVE_POST':
        return {  }
      default:
        return state
    }
  }

  export default combineReducers({
      posts : postReducer,
      firebase: firebaseReducer
  })