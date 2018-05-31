// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from "./components/todo-list";

export default class App extends React.Component {
  todos = [
    {text: 'a todo task'},
    {text: 'another todo task'},
    {text: 'a third todo task'},
    {text: 'a 4th todo task'},
    ];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add todos below</Text>
        <TodoList todos={this.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 40
  }
});
