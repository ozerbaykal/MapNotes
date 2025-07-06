import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import MapExample from './mapExample/mapExample'

const App = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Özer Baykal",
    email: "ozer@example.com",
    totalNotes: 15
  })

  const handleLocationPicker = () => {
    Alert.alert("📍 Location Picker", "Bu özellik PR ile eklendi!")
  }

  const handleProfilePress = () => {
    Alert.alert("👤 Profil", `
      👋 Merhaba, ${userProfile.name}!
      📧 Email: ${userProfile.email}
      📝 Toplam Not: ${userProfile.totalNotes}
    `)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Map Notes - Geliştirildi 📍</Text>
      
      {/* YENİ FEATURE: User Profile */}
      <View style={styles.profileSection}>
        <Text style={styles.profileTitle}>👤 Kullanıcı Profili</Text>
        <Text style={styles.userName}>{userProfile.name}</Text>
        <Text style={styles.userStats}>📝 {userProfile.totalNotes} Not</Text>
        <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
          <Text style={styles.buttonText}>Profili Görüntüle</Text>
        </TouchableOpacity>
      </View>
      
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
    backgroundColor:"#f0f8ff" // Aqua yerine daha güzel bir renk
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2e3440'
  },
  profileSection: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e3440',
    marginBottom: 8
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5e81ac',
    marginBottom: 4
  },
  userStats: {
    fontSize: 14,
    color: '#4c566a',
    marginBottom: 10
  },
  profileButton: {
    backgroundColor: '#5e81ac',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start'
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