/**
 * Created by ytang on 2018/9/10.
 */

import React from 'react'
import { View,Text,Button } from 'react-native'

import { Actions } from 'react-native-router-flux';

export default self => (
    <View>
        <Text>Home</Text>
        <Button title = "跳转测试" onPress={() => {Actions.homeDetail()}}/>
    </View>
)