import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const CSULogo = {
    url = 'google.com/google.png',
    width: 80,
    height: 80
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.png')}
      />

      <Image
        style={styles.urlCSULogo}
        source={{
          url='google.com'
        }}
      />

      <Image
        style={styles.stretchLogo}
        source={CSULogo} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
    height: 200,
    resizeMode: 'center'
  }
})
