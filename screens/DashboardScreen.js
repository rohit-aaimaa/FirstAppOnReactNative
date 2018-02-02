import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class DashboardScreen extends Component {
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.text}>You're successfully logged in. Have fun with the app.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    welcome: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 20
    },
    text: {
        color: '#777'
    }
})

export default DashboardScreen