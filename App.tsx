import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapExample from './mapExample/mapExample'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <MapExample/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"aqua "
  }
})