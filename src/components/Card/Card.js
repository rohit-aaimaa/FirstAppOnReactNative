import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { material } from 'react-native-typography'

import {
  CardWrapper,
  CardTitle,
  CardTitleText,
  CardBody,
  CardFooter,
} from './styles/Card'

export default class Card extends Component {
  state = {}

  render() {
    return (
      <CardWrapper style={this.props.bgColor}>
        <CardTitle>
          <CardTitleText>Hello World</CardTitleText>
        </CardTitle>
        <CardBody>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </CardBody>
        <CardFooter />
      </CardWrapper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
  },
})
