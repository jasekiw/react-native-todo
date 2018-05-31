// @flow
import React from 'react';
import HomeScreen from "./screens/home";
import AddTodoScreen from "./screens/add-todo";
import {createStackNavigator} from "react-navigation";
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";
import {Provider} from "react-redux";
import configureStore from "./store";
import initialState from "./store/initialState";

const store = configureStore(initialState);

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  AddTodo: { screen: AddTodoScreen },
}, {
  transitionConfig: () => ({ screenInterpolator: sceneProps => CardStackStyleInterpolator.forHorizontal(sceneProps) }),
});
export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
