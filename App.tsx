import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import MapExample from './mapExample/mapExample'

const App = () => {
  const [notificationCount, setNotificationCount] = useState(5)

  const handleLocationPicker = () => {
    Alert.alert("📍 Location Picker", "Bu özellik PR ile eklendi!")
  }

  const handleNotifications = () => {
    Alert.alert("🔔 Bildirimler", `${notificationCount} yeni bildiriminiz var!`)
    setNotificationCount(0)
  }

  const handleSettings = () => {
    Alert.alert("⚙️ Ayarlar", "Yeni ayarlar özelliği eklendi!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Map Notes - Yeni Özellikler 🚀</Text>
      
      {/* YENİ FEATURE: Settings Button */}
      <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
        <Text style={styles.buttonText}>⚙️ Ayarlar</Text>
      </TouchableOpacity>
      
      {/* MEVCUT FEATURE: Notifications */}
      <TouchableOpacity style={styles.notificationButton} onPress={handleNotifications}>
        <Text style={styles.buttonText}>🔔 Bildirimler ({notificationCount})</Text>
      </TouchableOpacity>
      
      {/* MEVCUT FEATURE: Location Picker */}
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
    backgroundColor:"#e8f4f8" // Bildirimler için açık mavi
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2e3440'
  },
  settingsButton: {
    backgroundColor: '#a3be8c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 10
  },
  notificationButton: {
    backgroundColor: '#bf616a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 10
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