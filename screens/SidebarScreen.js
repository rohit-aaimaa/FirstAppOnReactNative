import React, { Component } from 'react'
import { 
    View, 
    StyleSheet, 
    Text, 
    ScrollView, 
    Button, 
    Modal,
    AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class SidebarScreen extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
  }

  state = {
      visible: false
  }

  openModal = () => {
    this.props.navigation.navigate('DrawerClose')
    this.setState({visible: true})
  }

  closeModal = () => {
    this.setState({visible: false})
  }

  signOut = async () => {
    await AsyncStorage.clear()
    this.closeModal()
    this.navigateToScreen('Drawer')
  }

  render() {
      return(
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
              <Button onPress={this.openModal} title='Logout' />
            </View>
          </ScrollView>

          <Modal
          visible={this.state.visible}
          onRequestClose={this.closeModal}
          onDismiss={this.closeModal}
          animationType='slide'
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>Do you really want to log out?</Text>
                <View style={styles.modalActions}>
                  <Button onPress={this.closeModal} title='Nope' />
                  <Button onPress={this.signOut} title='Yup' />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )
  }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#333'
    },
    innerContainer: {
      width: '80%',
      height: '20%',
      backgroundColor: '#fff',
      padding: 20
    },
    modalActions: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      margin: 10
    }
})