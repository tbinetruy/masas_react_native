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
import styles from './styles/TemplateStyles'


/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
	}
}


/******* COMPONENT DEFINITION *******/
class Template extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  render = () => {
    return (
      <View style={ styles.container }>
      </View>
    )
  }
}


/******* PropTypes *******/
Template.propTypes = {
  
}


/******* EXPORT COMPONENT *******/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Template)