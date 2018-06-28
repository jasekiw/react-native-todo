// @flow

import {Dimensions} from "react-native";

import {guid} from "../util";
import {SYNC_ACTION} from "../types/todo";


export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo: {...todo, uuid: guid(), sync_action: SYNC_ACTION.CREATE}
});

export const updateTodo = (todo, sync = true) => ({
  type: 'UPDATE_TODO',
  todo: {...todo, sync_action: sync ? SYNC_ACTION.UPDATE: undefined},
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

export const submitNewTodo = (newTodo) => function(dispatch) {
  dispatch(addTodo(newTodo));
  dispatch(clearNewTodoText());
};
