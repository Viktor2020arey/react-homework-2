import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter-reducer";

const rootReducer = combineReducers({ counter: counterReducer });

// ______________________________________________________

const store = createStore(rootReducer, composeWithDevTools());

export default store;
