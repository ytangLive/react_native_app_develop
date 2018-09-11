/**
 * Created by ytang on 2018/9/11.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Icon} from '../../utils/icon'
import commonStyle from '../../utils/commonStyle'

const barBtnWidth = 40
const defaultNavigationBarProps = {
    hiddenNav : false,
    hiddenLeftItem : false,
    hiddenRightItem : false
}

/**
 * NavigationBar 配置项
 * @type {{navigationBarProps: (*), onLeftPress: *, onRightPress: *, hiddenNav: (*), navBarStyle, navContentStyle, hiddenLeftItem: (*), leftIcon, leftTitle, leftTitleStyle, leftItemStyle, titleStyle, title, subTitleStyle, subTitle, hiddenRightItem: (*), rightIcon, rightTitle, rightTitleStyle, rightItemStyle}}
 */

NavigationBar.propTypes = {
    navigationBarProps : PropTypes.Object,
    onLeftPress: PropTypes.fun,
    onRightPress: PropTypes.fun,
    hiddenNav: PropTypes.bool,
    navBarStyle: PropTypes.Object,
    navContentStyle: PropTypes.Object,
    hiddenLeftItem: PropTypes.bool,
    leftIcon: PropTypes.Object,
    leftTitle: PropTypes.string,
    leftTitleStyle: PropTypes.Object,
    leftItemStyle: PropTypes.Object,
    titleStyle: PropTypes.Object,
    title: PropTypes.string,
    subTitleStyle: PropTypes.Object,
    subTitle: PropTypes.string,
    hiddenRightItem: PropTypes.bool,
    rightIcon: PropTypes.Object,
    rightTitle: PropTypes.string,
    rightTitleStyle: PropTypes.Object,
    rightItemStyle: PropTypes.Object
 }

export default class NavigationBar extends Component {

    constructor(props){
        super(props)
        this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
    }

    componentWillReceiveProps(nextProps){
        this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
    }

    renderLeftItem(){

    }

    renderTitle(){

    }

    renderRightItem(){

    }


    render(){
        if(this.navigationBarProps.hiddenNav){
            return <View/>
        }

    }
}

const styles = StyleSheet.create({
    navBarStyle: {
        height: commonStyle.navHeight,
        backgroundColor: commonStyle.navThemeColor,
        borderBottomWidth: 0.5,
        borderBottomColor: commonStyle.navBottomColor
    },
    navContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: commonStyle.navStatusBarHeight,
        height: commonStyle.navContentHeight,
        marginHorizontal:10
    },
    leftItemStyle: {
        justifyContent: 'center',
        width: 40
    },
    leftTitleStyle: {
        fontSize:15,
        color: commonStyle.navLeftTitleColor
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titleStyle: {
        fontSize: 17,
        color: commonStyle.navTitleColor,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subTitleStyle: {
        fontSize: 11,
        marginTop: 5
    },
    rightItemStyle: {

    },
    rightTitleStyle: {

    }
})