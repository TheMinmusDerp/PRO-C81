import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class FeedScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Feed Screen</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
})
