/******* IMPORTS *******/

// REACT
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native'

// 3RD PARTY IMPORTS
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

// MASAS FUNCTIONS
import globals from'./../../globals'
import { login } from './../../MASAS_functions'
import SC from './../SC_wrapper'

// MASAS COMPONENTS
import styles from './styles/LoginStyles'
import BgImage from './../BgImage/BgImage'


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
      <BgImage>
        <View style={ styles.container }>
          <Image
            style={ styles.MASAS_logo }
            source={require('./../../img/MASAS_logo_tipi.png')}
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
      </BgImage>
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