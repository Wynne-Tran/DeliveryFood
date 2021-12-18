import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import {colors, parameters} from "./src/global/styles"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.StatusBar}
      
      />
      <Header title= "MY ACCOUNT"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
