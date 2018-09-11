/**
 * Created by ytang on 2018/9/10.
 */

import { Component } from 'react';
import view from './view';
import styles from './style';

 export default class Home extends Component {

     constructor(props){
         super(props);
     }

     render() {
        return (view(this));
     }
 }