/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import styles from './indexStyles'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  NativeModules,
} from 'react-native'
const { FBLoginManager } = NativeModules;


import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

const RouterWithRedux = connect()(Router);
import store from './reducers/reducers';

import { login } from './MASAS_functions'
import SideMenu from 'react-native-side-menu';
import Sidebar from './components/Sidebar/Sidebar';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import SidebarContent from './components/Sidebar/SidebarContent';
import Footer from './components/Footer/Footer';

class RightMenuIcon extends Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={ this.props.toogleSidebar }
        style={{ 
          width: 30, 
          height: 37,
          alignItems: 'center',
          justifyContent: 'center',
          top:0
        }}> 
        <Image 
          style={{
            width: 30,
            height: 7,
            alignSelf: 'center',
          }}
          resizeMode={"stretch"}
          source={ require('./img/MASAS_dot_menu_icon.png') }
        />
      </TouchableHighlight>
    )
  }
}
    
RightMenuIcon = connect(
  function(state) {
    return {
    }
  },
  function(dispatch) {
    return {
      toogleSidebar: () => dispatch({type:'TOOGLE_NAV_SIDEBAR'}),
    }
})(RightMenuIcon)
  
class LeftMenuIcon extends Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={ this.props.toogleSidebar }
        style={{ 
          width: 30, 
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          top:0
        }}> 
        <Image 
          style={{
            width: 30,
            height:  30 ,
            alignSelf: 'center',
          }}
          resizeMode={"stretch"}
          source={ require('./img/MASAS_hamburger_menu.png') }
        />
      </TouchableHighlight>
    )
  }
}
    
LeftMenuIcon = connect(
  function(state) {
    return {
    }
  },
  function(dispatch) {
    return {
      toogleSidebar: () => dispatch({type:'TOOGLE_NAV_SIDEBAR'}),
    }
})(LeftMenuIcon)  
      

class MASAS extends Component {
  componentDidMount = () => {
      FBLoginManager.getCredentials((error, data) => {
        if(!error) {
          login(data.credentials.token)
        } else {}
      })
  }
  
  render() {
    const menu = <SidebarContent />
          
    return (
        <Provider store={store}>
          <Sidebar>
            <View style={ styles.routerContainer }>
              <Provider store={store}>
                <RouterWithRedux>
                  <Scene 
                    key="root" 
                    navigationBarStyle={ styles.navBar } 
                    titleStyle={ styles.navBarTitle }>
                    <Scene 
                      key="Login" 
                      component={Login} 
                      title="Login" 
                      renderRightButton={ () => <RightMenuIcon />}
                      renderLeftButton={ () => <LeftMenuIcon />}
                      initial={true} />
                    <Scene key="Profile" component={Profile} title="Profile" />
                  </Scene>
                </RouterWithRedux>
              </Provider>
            </View>
            <View style={ styles.footerContainer }>
              <Footer />
            </View>
          </Sidebar>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('MASAS', () => MASAS);
