import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import MapExample from './mapExample/mapExample'

const App = () => {
  const handleLocationPicker = () => {
    Alert.alert("📍 Location Picker", "Bu özellik PR ile eklendi!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Map Notes - DARK THEME 🌙</Text>
      
      {/* YENİ FEATURE: Location Picker */}
      <TouchableOpacity style={styles.locationButton} onPress={handleLocationPicker}>
        <Text style={styles.buttonText}>📍 Konum Seç</Text>
      </TouchableOpacity>
      
      <MapExample/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#2e3440" // Dark theme background
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#eceff4' // Light text for dark theme
  },
  locationButton: {
    backgroundColor: '#4c566a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})