import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import TodoList from "../components/todo-list";
import {state} from "../state";

export default class HomeScreen extends React.Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    const text = state.todos.length === 0 ? "Get started by adding a todo item" : "You have tasks to finish!";
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <TodoList todos={state.todos}/>
        <View style={styles.bottom}>
          <Button style={styles.button} title="Add todo" onPress={() => navigate('AddTodo') } />
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 40
  },
  text: {
    margin: 40,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#525252'
  },
  bottom: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  }
});
