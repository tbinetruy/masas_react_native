import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
var AudioPlayer = require('react-native-audioplayer');

class Footer extends Component {
  playNewSong() {
    AudioPlayer.playFromURL("https://api.soundcloud.com/tracks/151854794/stream?client_id=e5d965905a85b11e108d064bc04430a3")
  }
    
  render() {
    AudioPlayer.playFromURL("https://api.soundcloud.com/tracks/268713736/stream?client_id=e5d965905a85b11e108d064bc04430a3")
    
    return (
      <View style={ styles.container }>
        <Text style={ styles.text } onPress={ AudioPlayer.pause }>
          Pause
        </Text>
        <Text style={ styles.text } onPress={ AudioPlayer.resume }>
          Play
        </Text>
        <Text style={ styles.text } onPress={ this.playNewSong }>
          Next
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
