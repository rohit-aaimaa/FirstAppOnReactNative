import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, Button } from 'react-native'

class HomeScreen extends Component {

    componentDidMount() {
        if(AsyncStorage.getItem('user_name')){
            this.props.navigation.navigate('Dashboard')
        } else {
            this.props.navigation.navigate('Login')
        }
    }
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.text}>Welcome to My First React Native App.</Text>
                    <Button onPress={() => this.props.navigation.navigate('Login')} title='Login to continue' />
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

export default HomeScreen