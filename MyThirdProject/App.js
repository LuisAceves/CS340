import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

function TV(props) {
  const [isOff,setisOff] = useState(true);
  return (
    <View>
      {"\n\n\n\n"}
      <Text>
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned Me on"}
      </Text>
      <Button
      onPress={() =>{
        setisOff(false);
      }}
      disabled={!isOff}
      title={isOff ? "Turn Me On, Please!" : "Thank you!"}
      />
    </View>
  )
}

export default function MultiComp(){
  return (
    <View>
      <TV name="LG" />
      <TV name="Sony" />
    </View>
  );
}