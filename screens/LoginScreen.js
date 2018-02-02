import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { facebook, google } from '../config.js'

class LoginScreen extends Component {
    state = {
        fbData: {

        },
        googleData: {

        }
    }

    facebookLogin = () => {

    }

    googleLogin = () => {

    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Login Form</Text>
                <Button title='Facebook' onPress={this.facebookLogin} />
                <Button title='Google' onPress={this.googleLogin} />
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