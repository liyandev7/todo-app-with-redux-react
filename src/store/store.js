import { createStore } from "redux";
import reducers from "./reducer/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools=composeWithDevTools();

const store=createStore(reducers,devTools);

export default store;