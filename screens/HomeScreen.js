import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, Button } from 'react-native'
import Reactotron from 'reactotron-react-native'

class HomeScreen extends Component {

	state={
		userInfo: []
	}

	async componentWillMount() {
		const userData = await AsyncStorage.getItem('user_name')
		if(userData !== null)
			this.setState({userInfo: userData})
		else
			this.setState({userInfo: []})
	}

	render() {

		Reactotron.log(this.state.userInfo)
		const { userInfo } = this.state


		return (
			<View style={styles.container}>
				<View style={styles.welcome}>
					<Text style={styles.text}>Welcome to My First React Native App.</Text>
					{ userInfo.length > 0 ? (
							<View>
								<Text>You are already logged in. Please visit </Text>
								<Button onPress={() => this.props.navigation.navigate('Dashboard')} title="Dashboard" />
							</View>
						) : (
							<View>
								<Text>You are not logged in. Please login </Text>
								<Button onPress={() => this.props.navigation.navigate('Login')} title='Login to continue' />
							</View>
						)
					}
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