import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  FILTER_TASK,
} from "./constants";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const filterTasks = (filter) => ({
  type: FILTER_TASK,
  payload: filter,
});
