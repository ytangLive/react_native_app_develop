/**
 * Created by ytang on 2018/9/10.
 */

import { Component } from 'react';
import {connect} from 'react-redux'

import Action from '../../actions'
import view from './view';
import styles from './style';

class Home extends Component {

     constructor(props){
         super(props);
         this.state = {
            refreshing: false,
            hasMore: true,
            showTimeList: [],
            comeingNewList: [],
            attentionList: []
         }
     }

     componentDidMount() {
        Promise.all([this.props.getMovieShowTimeList(), this.props.getMovieComeingNewList()]).then(response => {
            this.setState({
                showTimeList: response[0].value.ms,
                comeingNewList: response[1].value.moviecomings,
                attentionList: response[1].value.attention,
            })
        })
     }

     render() {
        return (view(this));
     }
 }

const HomeList = connect(
     (state) => state.home.homeList, 
     Action.dispatch('home'))(Home)

export default HomeList