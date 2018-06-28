import type {Todo} from "../types/todo";
import {SYNC_ACTION} from "../types/todo";
import config from "../config";
import type {Todo} from "../types/todo";

export const syncTodos = () => function(dispatch, store) {
  store.getState().todos.forEach((todo,index) => {
    if(todo.sync_action === SYNC_ACTION.CREATE)
      storeTodo({... todo, uuid: undefined, sync_action: undefined}).then((newTodo) => dispatch)

  });
};


export const storeTodo = async (newTodo: Todo) => {
  return  fetch(config.apiUrl + 'todos', {
    method: 'POST',
    body: JSON.stringify(newTodo)
  }).then((response: Response) => {
    if(response.status !== 201)
      return Promise.reject(response);
  }).then((response: Response) => response.json());
};



