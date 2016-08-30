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

/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      userData: state.appReducer.userData,
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
      updateUserPk: (pk) => dispatch({type: 'UPDATE_USER_PK', pk}),
      loginUser: (userToken, userData, userPk) => dispatch({ type: "LOGIN", token: userToken, userData , pk: userPk }),
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
  
  login = async ({ token }) => {  
    try {
      // GET USER TOKEN FROM MASAS API
      const convertTokenURL = globals.ajaxPref + '/auth/convert-token/'
      
      let convertTokenBody = new FormData()
      convertTokenBody.append("grant_type", "convert_token")
      convertTokenBody.append("client_id", "biHRTlM74WJ2l8NddjR6pa8uNYpWC4vFzTjyjOUO")
      convertTokenBody.append("client_secret", "aNXFRxyW20wBDLmTlf4ntmFKYSQ7qvig3PSRLlSxBYfxpmFPnh9JJz876eLMIeZJaoYyM2F6Q7q36QveAWacmiOT14y1z0EwpqO7lQVhXBx037FNGr6mDwYNq1fGfNVl")
      convertTokenBody.append("backend", "facebook")
      convertTokenBody.append("token", token)

      const convertTokenInit = {
        method: 'POST',
        body: convertTokenBody,
      }
    
      let MASAS_token = await fetch(convertTokenURL, convertTokenInit)
      let MASAS_tokenJSON = await MASAS_token.json()
      
      // GET USER PK FROM MASAS API
      const userPkRequestURL = globals.ajaxPref + '/api/check-user/'
      
      let userPkRequestHeaders = new Headers()
      userPkRequestHeaders.append('Authorization', 'Bearer ' + MASAS_tokenJSON.access_token)
      
      const userPkInit = {
        method: 'GET',
        headers: userPkRequestHeaders,
      }
      
      let userPk = await fetch(userPkRequestURL, userPkInit)
      let userPkJSON = await userPk.json()
      
      // GET USER DATA FROM MASAS API
      const userDataRequestURL = globals.ajaxPref + '/api/users/' + userPkJSON.userPk + '/'
      
      let userData = await fetch(userDataRequestURL)
      let userDataJSON = await userData.json()
      
      // UPDATE APP STATE
      this.props.loginUser(MASAS_tokenJSON.access_token, userDataJSON, userPkJSON.userPk)
    } catch(error) {
      console.log(error)
      this.setState({ error: error })
    }
  }
  
  hey = () => {
    SC.connect();
  }
  
  render = () => {
    console.log(this)
    var that = this
    return (
      <View style={ styles.container }>
        <Text onPress={Actions.Profile}>Login</Text>
        
        <Image
          source={require('./../../img/logo.png')}
        />
        
        <FBLogin onLogin={ (data) => {
            console.log(data)
            that.login(data.credentials)
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