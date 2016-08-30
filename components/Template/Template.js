/******* IMPORTS *******/
import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native'

import styles from './TemplateStyles'

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

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
)(Login)