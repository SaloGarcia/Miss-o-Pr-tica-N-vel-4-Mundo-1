import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Cat from './components/Cat';
import CatWithInput from './components/CatWithInput';
import CatWithProps from './components/CatWithProps';
import CatWithImage from './components/CatWithImage';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Componente simples */}
      <View style={styles.box}>
        <Cat />
      </View>

      {/* Componente com TextInput */}
      <View style={styles.box}>
        <CatWithInput />
      </View>

      {/* Componente com Props */}
      <View style={styles.box}>
        <CatWithProps />
      </View>

      {/* Componente com Imagem */}
      <View style={styles.box}>
        <CatWithImage />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  box: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default App;
