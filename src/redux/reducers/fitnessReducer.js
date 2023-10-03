import { ActionTypes } from "../constants/actionTypes.js";
import { exerciseData, foodData, goalData } from "../../Data/index.js";

export const initialState = {
  exercises: [],
  foods: [],
  goals: [],
};

export const fitnessReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EXERCISE:
      return { ...state, exercises: payload };
    case ActionTypes.ADD_EXERCISE:
      return { ...state, exercises: [...state.exercises, payload] };
    case ActionTypes.DELETE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise._id === payload._id
        ),
      };
    case ActionTypes.SET_FOOD:
      return { ...state, foods: payload };
    case ActionTypes.ADD_FOOD:
      return { ...state, foods: [...state.foods, payload] };
    case ActionTypes.DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter((food) => food._id === payload._id),
      };
    case ActionTypes.SET_GOAL:
      return { ...state, goals: payload };
    case ActionTypes.ADD_GOAL:
      return { ...state, goals: [...state.goals, payload] };
    case ActionTypes.DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter((goal) => goal._id === payload._id),
      };
    default:
      return state;
  }
};
