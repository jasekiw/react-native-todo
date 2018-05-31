
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          ...action.todo,
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        (index === action.index)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state
  }
};
