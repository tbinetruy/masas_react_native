import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

import SidebarContent from './SidebarContent'
import SideMenu from 'react-native-side-menu';

class Sidebar extends Component {

  render() {
    console.log(this.props)
    const children = this.props.navigationState.children;
    const menu = <SidebarContent />;

    return (
      <SideMenu menu={ menu }>
        <DefaultRenderer navigationState={children[0]} />
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'red'
  },
});

// export default SidebarContent
export default Sidebar;
