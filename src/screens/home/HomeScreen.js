import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'

import { Card } from '../../components'

class HomeScreen extends Component {
  state = {
    userInfo: [],
  }

  async componentWillMount() {
    const userData = await AsyncStorage.getItem('user_name')
    if (userData !== null) {
      this.setState({ userInfo: userData })
    } else {
      this.setState({ userInfo: [] })
    }
  }

  render() {
    const { userInfo } = this.state

    return (
      <View style={styles.container}>
        <Card bgColor={styles.card} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
})

export default HomeScreen
