// @flow
import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import PropTypes from 'prop-types';

export default class Todo extends React.Component {

  render() {
    return (
      <TouchableHighlight style={styles.todo} underlayColor={shadeColor} onPress={this.onShow}>
          <Text>{this.props.todo.text}</Text>
      </TouchableHighlight>
    )
  }
  onShow() {
    console.log("shown");
  }
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
    padding: 3
  }
});
const shadeColor = '#c0c0c0';

Todo.propTypes = {
  todo: PropTypes.object
};