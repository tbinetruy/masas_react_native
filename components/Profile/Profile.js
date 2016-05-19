import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.Login}>This is your profile!</Text>
      </View>
    )
  }
}

export default Profile
