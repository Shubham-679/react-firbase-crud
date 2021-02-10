import {createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducer";
import {getFirebase} from "react-redux-firebase"
import {firebase} from "../firebase";

const initialState = window && window.__INITIAL_STATE__
const store = createStore(combineReducers,initialState, compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const rrfProps = {
    firebase,
    config: {userProfile: 'users'},
    dispatch: store.dispatch
}
export { store, rrfProps};