/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Scene, Router, Actions, Reducer, ActionConst, Modal, Stack, Lightbox} from "react-native-router-flux"

import MainPage from './src/components/base/TabBarContainer'

const getSceneStyle = () => ({
  backgroundColor: 'black',
  shadowOpacity : 1,
  shadowRadius : 3
})

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
     <Stack key="init" >
        <Scene key="main" title="测试" initial component={MainPage}/>
     </Stack>
  </Scene>
)

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router 
          scenes={scenes}
          sceneStyle={getSceneStyle}/>
      </View>
    )
  }
}

export default App