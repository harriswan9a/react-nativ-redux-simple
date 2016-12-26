/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {AppRegistry} from 'react-native';
import App from './app'
import appUseReduxRoot from './appUseRedux'
import appFetchData from './appFetchData'

AppRegistry.registerComponent('testRedux', () => appFetchData);
