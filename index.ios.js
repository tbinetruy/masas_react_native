/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MASAS extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="Profile" component={Profile} title="Profile" />
        </Scene>
      </Router>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('MASAS', () => MASAS);
