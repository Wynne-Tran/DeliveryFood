import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors, parameters} from "./src/global/styles"
import RootNavigators from './src/navigation/RootNavigators';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
      <RootNavigators/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
