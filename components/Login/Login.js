import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.Profile}>This is the login page!!</Text>
      </View>
    )
  }
}

export default Login
