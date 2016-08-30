/******* IMPORTS *******/

// REACT
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'

// 3RD PARTY IMPORTS
import { connect } from 'react-redux';
var AudioPlayer = require('react-native-stream-audio-from-url')

// MASAS FUNCTIONS
import globals from'./../../globals'
// import { login } from './../../MASAS_functions'

// MASAS COMPONENTS
import globalStyles from './../globalStyles.js'
import styles from './styles/FooterStyles'




/******* REDUX PROPS *******/
let mapStateToProps = function(state) {
	return {
      MASASuser: state.appReducer.MASASuser,
      songPlaying: state.playerReducer.songPlaying,
      isPaused: state.playerReducer.isPaused,
      playerAtTime: state.playerReducer.playerAtTime,
      SC_songInfo: state.playerReducer.SC_songInfo,
      MASAS_songInfo: state.playerReducer.MASAS_songInfo,
      isSongPlayingLiked: state.playerReducer.isSongPlayingLiked,
      userPk: state.appReducer.MASASuserPk,
      isFetchingSong: state.playerReducer.isFetchingSong,
      discoverHistory: state.discoverReducer.history,
      playlist: state.playerReducer.playlist,
      playlistPosition: state.playerReducer.playlistPosition,
      isPlaylistPlaying: state.playerReducer.isPlaylistPlaying
	}
}

let mapDispatchToProps = function(dispatch) {
	return {
	}
}

class Footer extends Component {
  playRandomSong() {
//     AudioPlayer.playFromURL("https://api.soundcloud.com/tracks/268713736/stream?client_id=e5d965905a85b11e108d064bc04430a3")
    AudioPlayer.playFromURL("https://api.soundcloud.com/tracks/151854794/stream?client_id=e5d965905a85b11e108d064bc04430a3")

  }
    
  render() {
    
    return (
      <View style={ [styles.container, globalStyles.headerColor] }>
        <TouchableHighlight
          onPress={ AudioPlayer.pause }
          activeOpacity={10 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Image 
            style={{
              marginRight: 10,
              width: 30,
              height: 30,
            }}
            resizeMode={"contain"}
            source={ require('./../../img/MASAS_player_pause.png')}
          />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={ AudioPlayer.resume }
          activeOpacity={10 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Image 
            style={{
              marginRight: 10,
              width: 30,
              height: 30,
            }}
            resizeMode={"contain"}
            source={ require('./../../img/MASAS_player_play.png')}
          />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={ this.playNewSong }
          activeOpacity={ 10  / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Image 
            style={{
              marginRight: 10,
              width: 20,
              height: 20,
            }}
            resizeMode={"contain"}
            source={ require('./../../img/MASAS_next.png') }
          />
        </TouchableHighlight>
        
      
      </View>
    );
  }
}

/******* PropTypes *******/
Footer.propTypes = {
  
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)
