import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image source={{url: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
             style={styles.logo} />
      <Text style={styles.insts}>
           Press the button below to select an image on your phone!
      </Text>

     <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>
       <Text style={styles.buttonText}>Pick Image </Text>
       </TouchableOpacity>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFE0'
  },

  button: {
    backgroundColor: '#778899',
    padding: 20,
    borderRadius: 5
  },

  insts: {
    fontSize: 10,
    color: '#87CEFA',
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: '#ffff'
  }
});
