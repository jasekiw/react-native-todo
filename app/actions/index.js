import {Dimensions} from "react-native";

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const setNewTodoText = text => ({
  type: 'SET_NEW_TODO_TEXT',
  text
});

export const clearNewTodoText = () => ({
  type: 'CLEAR_NEW_TODO_TEXT'
});

export const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  index
});

export const updateDimensions = () => ({
  type: 'UPDATE_DIMENSIONS',
  dims: Dimensions.get("window")
});