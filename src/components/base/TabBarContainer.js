/**
 * Created by ytang on 2018/9/10.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import commonStyle from '../../utils/commonStyle'
import deviceInfo from '../../utils/deviceInfo'
import {Icon} from '../../utils'

import HomePage from '../../pages/home'

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        }
    }

    render(){
        return (
           <View style={styles.container}>
              <TabNavigator tabBarStyle={styles.tabBarStyle}>
                 <TabNavigator.Item 
                   selected={this.state.selectedTab === 'Home'}
                   title="电影"
                   titleStyle={styles.tabText}
                   selectedTitleStyle={styles.selectedTabText}
                   renderIcon={() => <Icon name={'YIcon|tb_Movie_o'} size={20} color={commonStyle.textGrayColor}/>}
                   renderSelectedIcon={() => <Icon name={'YIcon|tb_Movie_o'} size={20} color={commonStyle.black}/>}
                   onPress={() => this.setState({selectedTab : 'Home'})}
                 >
                 <HomePage/>
                 </TabNavigator.Item>
              </TabNavigator>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBarStyle: {
        height: commonStyle.tabBarHeight,
        paddingBottom: deviceInfo.isIphoneX ? 34 : 0
    },
    tabText: {
        fontSize: 11,
        color: commonStyle.textGrayColor,
        marginBottom: 5
    },
    selectedTabText: {
        fontSize: 11,
        color: commonStyle.black,
        marginBottom: 5
    }
})