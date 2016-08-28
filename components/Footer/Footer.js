import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Footer extends Component {
  render() {
    AudioPlayer.play('01 01 Good Times Bad Times.mp3.mp3');
    
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>
          FOOTER !!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white'
  },
});

export default Footer
