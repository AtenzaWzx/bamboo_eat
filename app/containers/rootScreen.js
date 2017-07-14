
/**
 * Created by lkl on 16/11/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';

//获取Dimensions
var dimensions = require('Dimensions');
//获取window组件
var window = dimensions.get('window');
//获取宽度和高度
var screenWidth = window.width;
var screenHeight = window.height;
var TextInputHeight = 44;
var paddding = 8;

class QQLoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
    <Image source={require('./imgs/icon.png')} style={styles.header}/>
    <TextInput style={styles.username} autoCorrect={false} clearButtonMode={'while-editing'}
        placeholder={'此处输入账号'} underlineColorAndroid={'#00000000'}/>
            <TextInput style={styles.password} autoCorrect={false} clearButtonMode={'while-editing'}
        secureTextEntry={true} placeholder={'此处输入密码'}
        //此方法去掉输入框（EditText）在Android下的默认下划线
        underlineColorAndroid={'#00000000'}/>

            <View style={styles.loginView}>
    <Text style={styles.login}>登录</Text>
        </View>

        <View style={styles.regView}>
    <Text style={styles.noLogin}>无法登陆?</Text>
        <Text style={styles.reg}>新用户</Text>
        </View>

        <View style={styles.other}>
    <Text>其他登录方式</Text>
        <Image source={require('./imgs/icon3.png')} style={styles.otherImg}/>
    <Image source={require('./imgs/icon7.png')} style={styles.otherImg}/>
    <Image source={require('./imgs/icon8.png')} style={styles.otherImg}/>
    </View>

        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    header:{
        marginTop:60,
        height:80,
        width:80,
        borderRadius:40
    },
    username:{
        width:screenWidth,
        height:44,
        backgroundColor:"white",
        paddingLeft:paddding,
        marginTop:26,
        textAlign:'center',
        fontSize:12,
        marginBottom:1,
        backgroundColor:'white',
    },
    password:{
        width:screenWidth,
        height:44,
        backgroundColor:"white",
        paddingLeft:paddding,
        textAlign:'center',
        fontSize:12

    },
    loginView:{
        width:screenWidth - 32,
        height:44,
        marginTop:26,
        backgroundColor:'#6EB8FE',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8
    },
    login:{

        color:'white',
        textAlign:'center',
        fontSize:16,
    },
    regView:{
        marginTop:16,
        width:screenWidth,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    noLogin:{
        color:"#6EB8FE",
        fontSize:14,
        marginLeft:16,
    },
    reg:{
        color:"#6EB8FE",
        fontSize:14,
        marginRight:16
    },
    other:{
        flexDirection:"row",
        width:screenWidth,
        paddingLeft:16,
        alignSelf:"flex-end",
        position:'absolute',
        bottom:10,
        alignItems:'center'
    },
    otherImg:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:8
    }
});

module.exports = QQLoginView;