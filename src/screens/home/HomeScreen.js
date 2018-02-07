import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'

import { Card, Slider } from '../../components'

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
      <ScrollView style={styles.container}>
        <Card bgColor={styles.card} />
        <ScrollView horizontal style={styles.scroll}>
          <Card bgColor={styles.card} />
          <Card bgColor={styles.card} />
          <Card bgColor={styles.card} />
          <Card bgColor={styles.card} />
          <Card bgColor={styles.card} />
        </ScrollView>
        <FlatList
          data={[
            { key: 'AAIMAA' },
            { key: 'XYZ' },
            { key: 'ABC' },
            { key: 'Hello' },
            { key: 'World' },
            { key: 'Facebook' },
            { key: 'Wipro' },
            { key: 'Infosys' },
            { key: 'TCS' },
            { key: 'Google' },
            { key: 'Microsoft' },
            { key: 'Intel' },
            { key: 'Redme' },
            { key: 'Samsung' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <View style={styles.buttonView}>
          <TouchableHighlight
            underlayColor="#008a00"
            style={styles.button}
            onPress={() => <Text>Hello World</Text>}>
            <Text style={styles.buttonText}>Custom Button</Text>
          </TouchableHighlight>
          <TouchableOpacity
            underlayColor="#008a00"
            style={styles.buttonSecond}
            onPress={() => <Text>Hello World</Text>}>
            <Text style={styles.buttonSecondText}>Custom Button</Text>
          </TouchableOpacity>
          <TouchableNativeFeedback onPress={() => <Text>Hello World</Text>}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Custom Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  scroll: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    color: 'black',
    textAlign: 'center',
    borderTopWidth: 2,
    borderTopColor: 'black',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '20%',
    margin: 10,
    backgroundColor: '#00ca00',
    borderRadius: 10,
  },
  buttonSecond: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '20%',
    margin: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#00ca00',
    borderRadius: 10,
  },
  buttonSecondText: {
    color: '#00ca00',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})

export default HomeScreen
