/**
 * Created by lkl on 2016/11/6.
 */
'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    InteractionManager,
    Image,
    AppRegistry,

} from 'react-native';

import NavigationBar from '../components/navigationBar';
import AlertSelected from '../components/AlertSelected';
import {findNewFriendAction,findNewFriendListAction} from '../actions/findNewFriendAction';
import {inviteFriendAction} from '../actions/inviteFriendAction';
import SocialSearch from '../pages/socialSearch'


import ListContent from '../components/listContent';
AppRegistry.registerComponent('bamboo_pay_app', () => ListContent);

class Friend extends Component {

    componentDidMount() {
        const{dispatch} = this.props;
        // console.log(this.props);
        // dispatch(findNewFriendAction('0e22b364a9094f3da758e9925fdff42b'));
        // dispatch(findNewFriendListAction('13405421570'));
        dispatch(inviteFriendAction('b46b57f991bf406e88ba1238e5bc1e0a','hello,交个朋友吧！'))
    }

    componentWillReceiveProps(nextProps) {
        const{newFriends} = nextProps;
        console.log(newFriends);
    }

    goToSearch() {
        const{navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: SocialSearch,
                name: 'SocialSearch'
            });
        });
    }
    onChangeText() {
        const{navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: SocialSearch,
                name: 'SocialSearch'
            });
        });
    }
    onFocus() {
        const{navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: SocialSearch,
                name: 'SocialSearch'
            });
        });
    }
    //style={styles.threeOptionArea}
    //onChangeText={(text) => this.setState({text})}
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title = '好友'
                    leftImageSource={require('../images/scan.png')}
                    rightImageSource={require('../assets/message.png')}
                />

                <TouchableOpacity onPress={this.goToSearch.bind(this)}>
                    <View style={styles.searchBox}>
                        <Text>搜索</Text>
                    </View>
                </TouchableOpacity>
                <ListContent style={styles.listRowContent}>
                    </ListContent>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF5',
    },
        coverView: {
            width: 365,
            justifyContent:"center",
            // alignItems:"center",

        },
        searchBox: {
            backgroundColor: '#fffaf0',
            height:40,
            width:365,
            alignItems:'center',
            justifyContent: 'center',
            margin:5
        },

    listRowContent: {
        backgroundColor: '#fffaf0',
    }
});
export default Friend;