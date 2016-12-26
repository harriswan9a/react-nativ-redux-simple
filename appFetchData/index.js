/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './app';

export default class Root extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <App/>
      </Provider>
    )
  }
}