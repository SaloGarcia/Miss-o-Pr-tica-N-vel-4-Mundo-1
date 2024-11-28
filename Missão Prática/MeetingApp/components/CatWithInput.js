import React from 'react';
import { Text, TextInput, View } from 'react-native';

const CatWithInput = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 10,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default CatWithInput;
