/******* IMPORTS *******/

// REACT
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  NativeModules,
} from 'react-native'
const { FBLoginManager } = NativeModules

// 3RD PARTY IMPORTS
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
const RouterWithRedux = connect()(Router)
import SideMenu from 'react-native-side-menu'

// MASAS FUNCTIONS
import store from './reducers/reducers'
import { login } from './MASAS_functions'

// MASAS COMPONENTS
import styles from './indexStyles'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import SidebarContent from './components/Sidebar/SidebarContent'
import Footer from './components/Footer/Footer'


/******* SUB COMPONENTS DEFINITION *******/

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
      

/******* MAIN COMPONENT DEFINITION *******/

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
                  
                  {/* ROOT */}
                  <Scene key="root">
                    
                    {/* LOGIN */}
                    <Scene key="Login">
                      <Scene 
                        key="Login2" 
                        component={Login} 
                        title="Login" 
                        navigationBarStyle={ styles.navBar } 
                        titleStyle={ styles.navBarTitle }
                        renderRightButton={ () => <RightMenuIcon />}
                        renderLeftButton={ () => <LeftMenuIcon />}
                        initial={true} />
                    </Scene>
                    
                    {/* PROFILE */}
                    <Scene key="Profile">
                      <Scene 
                        key="Profile2" 
                        component={Profile} 
                        title="Profile"
                        navigationBarStyle={ styles.navBar } 
                        titleStyle={ styles.navBarTitle }
                        renderRightButton={ () => <RightMenuIcon />}
                        renderLeftButton={ () => <LeftMenuIcon />}
                        initial={true} />
                    </Scene>
                  </Scene>
                </RouterWithRedux>
              </Provider>
            </View>
            <View style={ styles.footerContainer }>
              <Footer />
            </View>
          </Sidebar>
      </Provider>
    )
  }
}

    
AppRegistry.registerComponent('MASAS', () => MASAS)
