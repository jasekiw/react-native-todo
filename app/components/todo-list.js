import React from "react";
import {View, StyleSheet} from "react-native";
import Todo from "./todo";


export default function TodoList (props) {
    const {toggleTodo} = props;
    return (
      <View style={styles.todoList}>
        {props.todos.map((todo, i) => (<Todo key={i} todo={todo} index={i} toggleTodo={toggleTodo}/>))}
      </View>
    )
}

const styles = StyleSheet.create({
  todoList: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  }
});