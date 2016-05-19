/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);
import store from './reducers/reducers';

import SideMenu from 'react-native-side-menu';
import Sidebar from './components/Sidebar/Sidebar';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import SidebarContent from './components/Sidebar/SidebarContent';
import Footer from './components/Footer/Footer';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MASAS extends Component {
  render() {
    const menu = <SidebarContent />

    return (
          <SideMenu menu={menu}>
            <View style={ styles.routerContainer }>
              <Provider store={store}>
                <RouterWithRedux>
                  <Scene key="root">
                    <Scene key="Login" component={Login} title="Login" initial={true} />
                    <Scene key="Profile" component={Profile} title="Profile" />
                  </Scene>
                </RouterWithRedux>
              </Provider>
            </View>
            <View style={ styles.footerContainer }>
              <Footer />
            </View>
          </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  routerContainer: {
    flex: 0.9,
  },
  footerContainer: {
    flex: 0.1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MASAS', () => MASAS);
