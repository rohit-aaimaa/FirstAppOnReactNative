import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default class MainScreen extends Component {
    state = {
        
    }

    render() {
        return(
            <View style={styles.container}>
                <Button title='Main Screen' />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})