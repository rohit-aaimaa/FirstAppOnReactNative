import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    ImageBackground,
    ActivityIndicator,
    AsyncStorage     
} from 'react-native'

export default class SplashScreen extends Component {
    componentWillMount(){
        AsyncStorage.getItem('app_token')
        .then(token => {
            if(token)
                this.props.navigation.navigate('Home')
            else
                this.props.navigation.navigate('Login')
        })
    }
    render() {
        const {navigate} = this.props.navigation
        return(
            <ImageBackground
            style={styles.imageStyle}
            source={{ uri: 'https://via.placeholder.com/400x700'}}
            >
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Loading ...</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        color: '#fff',
        fontSize: 30
    }
  });