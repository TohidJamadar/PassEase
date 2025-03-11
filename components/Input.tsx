import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'

const styles = StyleSheet.create({
  
})

export default class Input extends Component<{ label: string; placeholder: string }> {
  render() {
    const { label, placeholder } = this.props // Destructuring props
    return (
      <View >
        <Text>{label}</Text>
        <TextInput placeholder={placeholder} />
      </View>
    )
  }
}
