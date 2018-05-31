import React from "react";
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import TodoList from "../../components/todo-list";
import {toggleTodo} from "../../actions";

export default class HomeScreen extends React.Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    const { todos, dispatch, orientation} =  this.props;
    const styles = makeStyles(orientation);
    const text = todos.filter(t => !t.completed).length === 0 ? "Add more tasks to finish!" : "You have tasks to finish!";
    return (
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <TodoList todos={todos} toggleTodo={(index) => dispatch(toggleTodo(index)) }/>
          <View style={styles.bottom}>
            <Button style={styles.button} title="Add todo" onPress={() => navigate('AddTodo') } />
          </View>
        </View>

      </ScrollView>
    );
  }

}

const makeStyles = (orientation)  => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 40,
    paddingTop: orientation === 'landscape' ? 5 : 40
  },
  text: {
    margin: orientation === 'landscape' ? 5 : 40,
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



