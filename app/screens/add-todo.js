import React from "react";
import {Button, Text, TextInput, View} from "react-native";
import {state} from "../state";

export default class AddTodoScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    title: 'Add Todo',
  };

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button title="Add todo" onPress={() => this.submitTodo() } />
      </View>
    );
  }

  submitTodo() {
    const { navigation } = this.props;
    state.todos.push({... state.newTodo });
    state.newTodo = { text: ''};
    navigation.pop();
  }
}
