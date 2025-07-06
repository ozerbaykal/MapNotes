import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapExample from './mapExample/mapExample'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Map Notes - Geliştirildi 📍</Text>
      <MapExample/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f8ff" // Aqua yerine daha güzel bir renk
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2e3440'
  }
})