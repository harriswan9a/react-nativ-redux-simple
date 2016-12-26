/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

//掛上store
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//connect store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterAction from './actions/counterAction';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    const { number, actions } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            使用redux, 透過actions來更新state,{'\n'}
            並且通知畫面rerender
          </Text>
          <Text>
            {number}
          </Text>
          <TouchableHighlight
            onPress={actions.incrementAction}>
            <Text>
              +
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={actions.decrementAction}>
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

const mapStateToProps = (state) => {
  return {number: state.counterReducer.number}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(counterAction, dispatch)
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

const Root = () => (
  <Provider store={configureStore}>
  <App />
  </Provider>
)
export default Root;