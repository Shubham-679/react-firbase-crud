import { combineReducers } from "redux";

function postReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_POST':
        return state
      case 'GET_POST':
        return action.payload
      case 'UPDATE_POST':
        return state
      case 'REMOVE_POST':
        return state
      default: 
        return state
    }
  }

  export default combineReducers({
      posts : postReducer,
  })