import { ActionTypes } from "../constants/actionTypes.js";

export const setExercises = (exercises) => {
  return {
    type: ActionTypes.SET_EXERCISE,
    payload: exercises,
  };
};

export const addExercise = (exercise) => {
  return {
    type: ActionTypes.ADD_EXERCISE,
    payload: exercise,
  };
};

export const deleteExercise = (exercise) => {
  return {
    type: ActionTypes.DELETE_EXERCISE,
    payload: exercise,
  };
};

export const setFood = (foods) => {
  return {
    type: ActionTypes.SET_FOOD,
    payload: foods,
  };
};

export const addFood = (food) => {
  return {
    type: ActionTypes.ADD_FOOD,
    payload: food,
  };
};

export const deleteFood = (food) => {
  return {
    type: ActionTypes.DELETE_FOOD,
    payload: food,
  };
};

export const setGoal = (goals) => {
  return {
    type: ActionTypes.SET_GOAL,
    payload: goals,
  };
};

export const addGoal = (goal) => {
  return {
    type: ActionTypes.ADD_GOAL,
    payload: goal,
  };
};

export const deleteGoal = (goal) => {
  return {
    type: ActionTypes.DELETE_GOAL,
    payload: goal,
  };
};
