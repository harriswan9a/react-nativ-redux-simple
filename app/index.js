/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          不使用redux, 透過this.setState({})來rerender
        </Text>
        <Text>
          {this.state.number}
        </Text>
        <TouchableHighlight onPress={() => this.setState({number: this.state.number + 1})}>
          <Text>
            +
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.setState({number: this.state.number - 1})}>
          <Text>
            -
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});