import { combineReducers } from "redux";

function postReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_POST':
        return  []
      case 'GET_POST':
        return []
      case 'UPDATE_POST':
        return  []
      case 'REMOVE_POST':
        return {  }
      default:
        return state
    }
  }

  export default combineReducers({
      posts : postReducer
  })