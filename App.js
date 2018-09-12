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
import HomeDetail from './src/pages/home/homeDetail'

const getSceneStyle = () => ({
  backgroundColor: 'black',
  shadowOpacity : 1,
  shadowRadius : 3
})

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
      <Modal key="modal" hideNavBar>
        {/* <Lightbox key="lightbox" hideNavBar={true}> 用于将组件渲染在当前Scene的组件上，多用于Loading、弹框等 */}
          <Stack key="init" >
              <Scene key="main" title="测试" initial component={MainPage}/>
              <Scene key="homeDetail" hideNavBar component={HomeDetail}/>
          </Stack>
        {/* </Lightbox> */}
         {/* <Stack key="modalRoot">
              <Scene key="homeDetail" hideNavBar component={HomeDetail}/>
          </Stack> */}
      </Modal>
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