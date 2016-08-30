/******* IMPORTS *******/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

import styles from './styles/SidebarContentStyles'

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      navSiderbarOpen: state.appReducer.navSiderbarOpen,
      MASASuser: state.appReducer.MASASuser,
      userData: state.appReducer.userData,
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
      toogleSidebar: () => dispatch({type:'TOOGLE_NAV_SIDEBAR'}),
      logout: () => dispatch({type: "LOGOUT"}),
	}
}

/******* COMPONENT DEFINITION *******/
class SidebarContent extends Component {

  goToProfile = () => {
    Actions.Profile()
    this.props.toogleSidebar()
  }

  goToLogin = () => {
    Actions.Login()
    this.props.toogleSidebar()
  }
  
  goToLogout = () => {
    this.props.toogleSidebar()
  }

  render = () => {
    
    const isLoggedIn = this.props.MASASuser !== "" ? true : false
    
    return (
      <View style={ styles.container }>
        <TouchableOpacity
          onPress={ isLoggedIn ? this.goToProfile : () => {} }>
          <Text style={ [styles.mainLink, isLoggedIn ? [] : styles.disabled] }>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ !isLoggedIn ? this.goToLogin : this.goToLogin }>
          <Text style={ styles.mainLink }>
            { isLoggedIn ? "Logout" : "Login" }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/******* PropTypes *******/
SidebarContent.propTypes = {
  
}

/******* EXPORT COMPONENT *******/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarContent)
