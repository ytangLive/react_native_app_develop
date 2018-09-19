/**
 * Created by ytang on 2018/9/10.
 */

import {connect} from 'react-redux'
import { View } from 'react-native'
import Action from '../../actions'
import {BaseComponent} from '../../components/base/BaseComponent'
import HomeList from './homeList'

class Home extends BaseComponent {

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

     navigationBarProps(){
        return {
            title: '即将上映'
        }
    }

     _render() {
        return (
            <HomeList homeDatas={self.state.comeingNewList} attentionDatas={self.state.attentionList}/>
        )
     }
 }

const HomeList = connect(
     (state) => state.home.homeList, 
     Action.dispatch('home'))(Home)

export default HomeList