import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
import SC from './../SC_wrapper'

let mapStateToProps = function(state) {
	return {
// 		checkbox1_checked: state.uploadSCReducer.checkbox1_checked,
// 		checkbox2_checked: state.uploadSCReducer.checkbox2_checked,
// 		checkbox3_checked: state.uploadSCReducer.checkbox3_checked,
	}
}

// Which action creators does it want to receive by props?
let mapDispatchToProps = function(dispatch) {
	return {
//         toogleCheckbox1: () => dispatch({ type: 'TOOGLE_CHECKBOX_1' }),
// 		toogleCheckbox2: () => dispatch({ type: 'TOOGLE_CHECKBOX_2' }),
// 		toogleCheckbox3: () => dispatch({ type: 'TOOGLE_CHECKBOX_3' }),
	}
}
 class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      test: '1'
    }
  }
  
  login = async ({ token }) => {
    var body = new FormData()
    body.append("grant_type", "convert_token")
    body.append("client_id", "biHRTlM74WJ2l8NddjR6pa8uNYpWC4vFzTjyjOUO")
    body.append("client_secret", "aNXFRxyW20wBDLmTlf4ntmFKYSQ7qvig3PSRLlSxBYfxpmFPnh9JJz876eLMIeZJaoYyM2F6Q7q36QveAWacmiOT14y1z0EwpqO7lQVhXBx037FNGr6mDwYNq1fGfNVl")
    body.append("backend", "facebook")
    body.append("token", token)
    
    var fetchInit = {
      method: 'POST',
      body
    }
    
    try {
      let response = await fetch('http://www.masas.fm/auth/convert-token/', fetchInit)
      let responseJSON = await response.json()
      
      this.setState({ test: responseJSON.access_token })
    } catch(error) {
      this.setState({ test: error })
    }
  }
  
  hey = () => {
    SC.connect();
  }
  
  render = () => {
    console.log(this)
    var that = this
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.Profile}>This is the login page!!</Text>
        <Text onPress={ this.hey }>{ this.state.test }</Text>
          
        <FBLogin onLogin={ (data) => {
            console.log(data)
            that.login(data.credentials)
          }}
          permissions={["email"]}/>

      </View>
    )
  }
}

// export default Login
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)