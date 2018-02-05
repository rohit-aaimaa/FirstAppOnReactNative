import React, { Component } from 'react'
import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native'
import { NavigateActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'
import axios from "axios";
import Expo from "expo";

import { facebook, google } from '../config.js'

class LoginScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigateActions.navigate({
          routeName: route
        })
        this.props.navigation.dispatch(navigateAction)
    }

    state={
        fbData: {}
    }
    
    facebookLogin = async () => {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(facebook.clientID, {
            permissions: ['public_profile', 'user_friends', 'email', 'user_birthday']
        })

        if( type === 'success'){
            const res = await axios.get(`https://graph.facebook.com/me?access_token=${token}`)
            const user = await res.data
            await AsyncStorage.setItem('user_name', user.name)
            this.setState({fbData: user})
            this.navigateToScreen('Drawer')
        }
    }

    googleLogin = () => {

    }

    render(){
        const { fbData } = this.state
        return (
            <View style={styles.container}>
                <Text>Login Form</Text>
                <Button title='Facebook' onPress={this.facebookLogin} />
                <Button title='Google' onPress={this.googleLogin} />
                <Text>
                    {fbData ? fbData.name : ''}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.6)'
    }
})

export default LoginScreen