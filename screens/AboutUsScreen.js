import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class AboutThisReleaseScreen extends Component {
    state = {
        
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>About Us Screen</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})