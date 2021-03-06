import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { Actions, DefaultRenderer } from 'react-native-router-flux'

import SidebarContent from './SidebarContent'
import SideMenu from 'react-native-side-menu'

/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      isNavSiderbarOpen: state.appReducer.navSiderbarOpen
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
      toogleSidebar: () => dispatch({type:'TOOGLE_NAV_SIDEBAR'}),
	}
}

/******* COMPONENT DEFINITION *******/
class Sidebar extends Component {

  render = () => {
    const menu = <SidebarContent/>

    return (
      <View style={ styles.container }>
        <SideMenu 
          menu={ menu }
          onChange={ (isOpen) => {
            console.log(isOpen)
            if(!isOpen && this.props.isNavSiderbarOpen)
              this.props.toogleSidebar()
            }}
          isOpen={ this.props.isNavSiderbarOpen }
          >
          { this.props.children }
        </SideMenu>
      </View>
    )
  }
}

/******* EXPORT COMPONENT *******/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)
