import React from "react";
import {Button, Text, TextInput, View, StyleSheet} from "react-native";
import {addTodo, clearNewTodoText, setNewTodoText} from "../../actions";

export default class AddTodoScreen extends React.Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    title: 'Add Todo',
  };

  render() {
    const { dispatch, newTodo} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch(setNewTodoText(text))}
          value={newTodo.text}
        />
        <Button title="Add todo" onPress={() => this.submitTodo() } />
      </View>
    );
  }

  submitTodo() {
    const { navigation, newTodo, dispatch } = this.props;
    dispatch(addTodo(newTodo));
    dispatch(clearNewTodoText());
    navigation.pop();
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 5,

  }
});