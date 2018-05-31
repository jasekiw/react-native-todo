// @flow
import React from 'react';
import HomeScreen from "./screens/home";
import AddTodoScreen from "./screens/add-todo";
import {createStackNavigator} from "react-navigation";
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  AddTodo: { screen: AddTodoScreen },
}, {
  transitionConfig: () => ({ screenInterpolator: sceneProps => CardStackStyleInterpolator.forHorizontal(sceneProps) }),
});
export default App;

