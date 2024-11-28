import React from 'react';
import { Text, View, Image } from 'react-native';

const CatWithImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

export default CatWithImage;
