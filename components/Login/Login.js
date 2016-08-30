/******* IMPORTS *******/
import globals from'./../../globals'
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native'

import styles from './styles/LoginStyles'

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
import SC from './../SC_wrapper'

import { login } from './../../MASAS_functions'

/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      userData: state.appReducer.userData,
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
      updateUserPk: (pk) => dispatch({type: 'UPDATE_USER_PK', pk}),
      login: ({ token }) => login(token),
      logout: () => dispatch({type: "LOGOUT"}),
	}
}

/******* COMPONENT DEFINITION *******/
class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      test: '1'
    }
  }
  
  hey = () => {
    SC.connect();
  }
  
  render = () => {
    var that = this
    return (
      <View style={ styles.container }>
        <Text onPress={Actions.Profile}>Login</Text>
        
        <Image
          source={require('./../../img/logo.png')}
        />
        
        <FBLogin 
          onLogin={ (data) => {
            that.props.login(data.credentials)
          }}
          onLogout={ (data) => {
            that.props.logout()
          }}
          onLoginFound={function(data){
            that.props.login(data.credentials)
          }}
          permissions={["email"]}/>

      </View>
    )
  }
}

/******* PropTypes *******/
Login.propTypes = {
  
}

/******* EXPORT COMPONENT *******/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)