import { combineReducers } from "redux";
import { fitnessReducer } from "./fitnessReducer.js";

export const reducers = combineReducers({
  fitness: fitnessReducer,
});
