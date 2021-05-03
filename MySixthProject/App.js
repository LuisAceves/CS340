import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  const CSULogo = {
    url = 'google.com/google.png',
    width: 80,
    height: 80
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={CSULogo} style={styles.Image}>
        
        <Text style={styles.Text}> CSU Logo</Text>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  text: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
