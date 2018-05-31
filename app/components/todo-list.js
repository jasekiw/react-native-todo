import React from "react";
import {View, StyleSheet} from "react-native";
import Todo from "./todo";


export default class TodoList extends React.Component {
  render() {
    return (
      <View style={styles.todoList}>
        {this.props.todos.map((todo, i) => (<Todo key={i} todo={todo}/>))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoList: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  }
});