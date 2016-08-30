/******* IMPORTS *******/

// REACT
import React, { Component } from 'react'
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
import styles from './styles/BgImageStyles'


/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      backgroundURL: state.homeReducer.backgroundURL,
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
	}
}


/******* COMPONENT DEFINITION *******/
class BgImage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  render = () => {
    return (
      <Image 
        style={{
          flex: 1
        }}
        resizeMode={"cover"}
        source={{ uri:this.props.backgroundURL }}
      >
        <View
          style={ styles.overlay }>
          { this.props.children }
        </View>
      </Image>
    )
  }
}


/******* PropTypes *******/
BgImage.propTypes = {
  
}


/******* EXPORT COMPONENT *******/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BgImage)