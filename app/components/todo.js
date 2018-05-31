// @flow
import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import PropTypes from 'prop-types';

export default function Todo(props) {
    const {toggleTodo, index, todo} = props;
    return (
      <TouchableHighlight style={styles.todo} underlayColor={shadeColor} onPress={() => toggleTodo(index)}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{todo.text}</Text>
          <Text style={styles.checkText}> {todo.completed ? '✔': ''}</Text>
        </View>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#292929',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
    padding: 3,
    paddingVertical: 8
  },
  text: {
    flexGrow: 1,
    textAlign: 'center',
    marginLeft: 30
  },
  checkText: {
    width: 30
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
const shadeColor = '#c0c0c0';

Todo.propTypes = {
  todo: PropTypes.object
};

