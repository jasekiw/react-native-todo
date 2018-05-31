
export default (state = { text: ''}, action) => {
  switch(action.type) {
    case 'SET_NEW_TODO_TEXT': return {...state, text: action.text};
    case 'CLEAR_NEW_TODO_TEXT': return {...state, text: ''};
    default: return state;
  }
}