import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class LoginScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
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