import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyDog(){
  return (
    <View> 
      <Image source="https:raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/2dog.png"
      style= {{width: 200, height: 200}}
      />
      <Text> Hello, this is my dog</Text>
      </View>
  );
}