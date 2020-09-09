import {createStore, applyMiddleware} from "redux";
import musicReducer from "./music/musicReducer";
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(musicReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;