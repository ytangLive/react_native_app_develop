/**
 * Created by ytang on 2018/9/14.
 */

import React from 'react'
import RootToast from 'react-native-root-toast'
import {View, Text, Platform, StyleSheet} from 'react-native'
import {Icon} from '../../utils/icon'

const Toast = {

    toast: null,

    show: (msg) => {
        this.toast = RootToast.show(msg, {
            position:RootToast.positions.CENTER,
            duration:1500
        })
    },

    showLong:(msg) => {
        this.toast = RootToast.show(msg, {
            position:RootToast.positions.CENTER,
            duration:2000
        })
    },

    showSuccess:(msg, options) => {
        let toast = RootToast.show(
            Platform.OS === 'ios' ? 
               <View style={styles.container}>
                   <Icon name={'oneIcon|toastSuccess_s'} size={50} color={'#fff'}/>
                   <Text style={styles.message}>{msg}</Text>
               </View>: msg, {
            duration: 1500,
            position: RootToast.positions.CENTER,
            ...options })
        setTimeout(() => {
            RootToast.hide(toast)
            typeof options === 'function' ? options && options(): null
        }, 2000)
    },

    showLongSuccess: (msg, options) => {
        let toast = RootToast.show(
          Platform.OS === 'ios' ?
            <View style={styles.container}>
              <Icon name={'YIcon|toastSuccess_s'} size={50} color={'#fff'}/>
              <Text style={styles.message}>{msg}</Text>
            </View> : msg, {
            duration: 2000,
            position: RootToast.positions.CENTER,
            ...options,
          })
        setTimeout(function () {
          RootToast.hide(toast)
          typeof options === 'function' ? options && options(): null
        }, 2500)
     },

     showWarning: (msg, options) => {
        let toast = RootToast.show(
          Platform.OS === 'ios' ?
            <View style={styles.container}>
              <Icon name={'YIcon|toastWarning_s'} size={40} color={'#fff'}/>
              <Text style={styles.message}>{msg}</Text>
            </View> : msg, {
            duration: RootToast.durations.SHORT,
            position: RootToast.positions.CENTER,
            ...options,
          })
        setTimeout(function () {
          RootToast.hide(toast)
        }, RootToast.durations.SHORT + 500)
    },

    showError: (msg, options) => {
        let toast = RootToast.show(
          Platform.OS === 'ios' ?
            <View style={styles.container}>
              <Icon name={'oneIcon|toastError_s'} size={40} color={'#fff'}/>
              <Text style={styles.message}>{msg}</Text>
            </View> : msg, {
            duration: RootToast.durations.SHORT,
            position: RootToast.positions.CENTER,
            ...options,
          })
        setTimeout(function () {
          RootToast.hide(toast)
        }, RootToast.durations.SHORT + 500)
    }
} 

var styles = StyleSheet.create({
    container: {
      width: 140,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
    },
    message: {
      color: '#fff',
      marginTop: 10,
      textAlign: 'center',
      lineHeight: 20,
    }
})

export {Toast}