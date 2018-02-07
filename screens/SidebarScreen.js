import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, Button, AsyncStorage, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class SidebarScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    })
    this.props.navigation.dispatch(navigateAction)
  }

  state = {
    visible: false,
  }

  openAlert = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes', onPress: this.signOut },
    ])
  }

  signOut = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('DrawerClose')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text onPress={this.navigateToScreen('NeedHelp')}>Need Help?</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Share')}>Share</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('RateUs')}>Rate Us</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('AboutUs')}>About Us</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('AboutThisRelease')}>About this release</Text>
          </View>
          <View>
            <Button onPress={this.openAlert} title="Logout" />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
