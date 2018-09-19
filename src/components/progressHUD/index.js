/**
 * Created by ytang on 2018/9/18.
 */

import React from 'react'
import ProgressHUD from './progressHUD'
import store from '../../store'
import actionType from '../../utils/config/actionType'
import {createAction} from 'redux-actions'
import {Actions} from 'react-native-router-flux'

const loadingAction = createAction(actionType.FETCH_SHOW_HUD)

const RootHUD = {
    show: () => {
        let currentStatus = store.getState().common.loading.showHUD
        if(!currentStatus){
            Actions.loading()
            store.dispatch(loadingAction(true))
        }
    },

    hidden:() => {
        store.dispatch(loadingAction(false))
    }
}