import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class SidebarContent extends Component {
  goToProfile = () => {
      Actions.Profile()

      // close sidebar
  }

  goToLogin = () => {
    Actions.Login()

    // close sidebar
  }

  render = () => {
    console.log(Actions)
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={this.goToProfile}>
          <Text style={ styles.text }>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToLogin}>
          <Text style={ styles.text }>
            Login
          </Text>
        </TouchableOpacity>
      </View>
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

export default SidebarContent
// export default connect(({store}) => ({store}))(SidebarContent);
