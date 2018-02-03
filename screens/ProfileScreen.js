import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class ProfileScreen extends Component {
    state = {
        
    }

    render() {
        return(
            <View style={styles.container}>
               <Text>Profile Page</Text> 
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})