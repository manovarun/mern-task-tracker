import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./reducers/Reducers";

const middlewares = [thunk];

const initialState = {};

const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
