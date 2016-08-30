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

// MASAS FUNCTIONS
import globals from'./../../globals'
import { login } from './../../MASAS_functions'

// MASAS COMPONENTS
import globalStyles from './../globalStyles.js'
import styles from './styles/ProfileStyles'
import BgImage from './../BgImage/BgImage'


/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      userData: state.appReducer.userData,
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
	}
}

    
/******* COMPONENT DEFINITION *******/

class Profile extends Component {
  render() {
    return (
      <BgImage>
        <View style={{margin: 128}}>
          <Text onPress={Actions.Login} style={ globalStyles.text }>This is your profile!</Text>
        </View>
      </BgImage>
    )
  }
}

  
/******* PropTypes *******/
Profile.propTypes = {
  
}


/******* EXPORT COMPONENT *******/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile)
