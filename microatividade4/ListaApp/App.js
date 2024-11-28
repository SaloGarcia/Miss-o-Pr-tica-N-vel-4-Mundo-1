import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import FlatListBasics from './FlatListBasics';  // Caminho para o componente FlatListBasics
import SectionListBasics from './SectionListBasics';  // Caminho para o componente SectionListBasics

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Exibindo as duas listas lado a lado */}
        <View style={styles.listContainer}>
          <FlatListBasics />
        </View>
        <View style={styles.listContainer}>
          <SectionListBasics />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  listContainer: {
    width: '45%',  // Ajuste para que ambas as listas caibam lado a lado
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default App;
