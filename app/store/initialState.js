import dimensions from "../reducers/dimensions";

export default initialState = {
  todos:  [
    {text: 'a todo task'},
    {text: 'another todo task'},
    {text: 'a third todo task'},
    {text: 'a 4th todo task'},
  ],
  newTodo: { text: ''},
  dimensions: {
    // no dimension information available from the start
  }
};