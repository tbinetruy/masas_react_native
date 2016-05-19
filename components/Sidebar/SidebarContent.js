import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class SidebarContent extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>
          MENU !!!
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
    backgroundColor: 'green',
  },
  text: {
    color: 'red'
  },
});

export default SidebarContent
